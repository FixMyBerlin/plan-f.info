import type LunrDefault from 'lunr'

import { foldUmlauts } from '~/lib/searchGerman'

export type SearchType = 'example' | 'measure' | 'topic'
export type SearchDoc = { id: string; type: SearchType; title: string; path: string }
export type SearchResult = { title: string; path: string }
export type GroupedResults = Record<SearchType, SearchResult[]>

/** Per-type result caps, mirroring the Strapi fuzzy-search `limit` config. */
const LIMITS: Record<SearchType, number> = { example: 6, topic: 4, measure: 2 }

export type SearchIndexFile = {
  index: object
  docs: Record<string, SearchDoc>
}

export type LoadedIndex = { index: LunrDefault.Index; docs: Record<string, SearchDoc> }

function lunrPlugin(mod: unknown): (l: typeof LunrDefault) => void {
  const fn = typeof mod === 'function' ? mod : (mod as { default?: unknown })?.default
  if (typeof fn !== 'function') throw new Error('lunr language plugin did not export a function')
  return fn as (l: typeof LunrDefault) => void
}

/**
 * Lazily load lunr + the German stemmer only when the user first searches. Keeping these
 * as dynamic imports (rather than a static `import lunr from 'lunr'`) keeps ~90KB of search
 * JS out of the navigation island bundle that ships on every page.
 */
let lunrPromise: Promise<typeof LunrDefault> | null = null
function getLunr(): Promise<typeof LunrDefault> {
  if (!lunrPromise) {
    lunrPromise = Promise.all([
      import('lunr'),
      // @ts-ignore untyped module
      import('lunr-languages/lunr.stemmer.support.js'),
      // @ts-ignore untyped module
      import('lunr-languages/lunr.de.js'),
    ]).then(([lunrMod, stemmerSupport, de]) => {
      const lunr = lunrMod.default
      // Register the German pipeline before any `Index.load` so its functions resolve.
      lunrPlugin(stemmerSupport)(lunr)
      lunrPlugin(de)(lunr)
      return lunr
    })
  }
  return lunrPromise
}

let cache: LoadedIndex | null = null
let loading: Promise<LoadedIndex> | null = null

async function loadIndex(): Promise<LoadedIndex> {
  if (cache) return cache
  if (!loading) {
    loading = Promise.all([
      getLunr(),
      fetch('/search/index.json').then((res) => {
        if (!res.ok) throw new Error(`search index ${res.status}`)
        return res.json() as Promise<SearchIndexFile>
      }),
    ]).then(([lunr, json]) => {
      cache = { index: lunr.Index.load(json.index), docs: json.docs }
      return cache
    })
  }
  return loading
}

/** Search tokens, stripped of lunr query metacharacters. */
export function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .split(/\s+/)
    .map((t) => t.replace(/[~^*:+-]/g, ''))
    .filter(Boolean)
}

/**
 * Runs a lunr query over `tokens`. `requireAll` controls the multi-word semantics:
 * - true  → every token must match (AND) — precise, for type-ahead.
 * - false → tokens are optional (OR) and fuzzy (edit distance 1) — lenient fallback.
 *
 * Trailing wildcards are applied with the pipeline off. The German trimmer treats `*` as a
 * non-word character and would strip it before prefix matching could run.
 */
function runQuery(
  lunr: typeof LunrDefault,
  index: LunrDefault.Index,
  tokens: string[],
  requireAll: boolean,
): LunrDefault.Index.Result[] {
  return index.query((q) => {
    for (const term of tokens) {
      const presence = requireAll ? lunr.Query.presence.REQUIRED : lunr.Query.presence.OPTIONAL
      q.term(term, { presence, usePipeline: true })
      // Prefix match on the umlaut-folded form (indexed tokens have ü→u via the stemmer).
      q.term(foldUmlauts(term), {
        presence: lunr.Query.presence.OPTIONAL,
        usePipeline: false,
        wildcard: lunr.Query.wildcard.TRAILING,
        ...(requireAll ? {} : { editDistance: term.length > 3 ? 1 : 0 }),
      })
    }
  })
}

const EMPTY: GroupedResults = { example: [], measure: [], topic: [] }

export function searchIndex(
  lunr: typeof LunrDefault,
  loaded: LoadedIndex,
  query: string,
): GroupedResults {
  const tokens = tokenize(query)
  if (!tokens.length) return { ...EMPTY }

  let raw: LunrDefault.Index.Result[] = []
  try {
    // Prefer all-terms-match; fall back to optional+fuzzy if that finds nothing.
    raw = runQuery(lunr, loaded.index, tokens, tokens.length > 1)
    if (!raw.length && tokens.length > 1) raw = runQuery(lunr, loaded.index, tokens, false)
  } catch {
    raw = []
  }

  const grouped: GroupedResults = { example: [], measure: [], topic: [] }
  for (const result of raw) {
    const doc = loaded.docs[result.ref]
    if (!doc) continue
    if (grouped[doc.type].length >= LIMITS[doc.type]) continue
    grouped[doc.type].push({ title: doc.title, path: doc.path })
  }
  return grouped
}

export async function search(query: string): Promise<GroupedResults> {
  const tokens = tokenize(query)
  if (!tokens.length) return { ...EMPTY }

  let loaded: LoadedIndex
  let lunr: typeof LunrDefault
  try {
    ;[loaded, lunr] = await Promise.all([loadIndex(), getLunr()])
  } catch (err) {
    console.warn('[search] failed to load index', err)
    return { ...EMPTY }
  }

  return searchIndex(lunr, loaded, query)
}
