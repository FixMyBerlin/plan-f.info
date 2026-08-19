import type LunrDefault from 'lunr'

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

type LoadedIndex = { index: LunrDefault.Index; docs: Record<string, SearchDoc> }

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
      ;(stemmerSupport.default as (l: typeof lunr) => void)(lunr)
      ;(de.default as (l: typeof lunr) => void)(lunr)
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
function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .split(/\s+/)
    .map((t) => t.replace(/[~^*:+-]/g, ''))
    .filter(Boolean)
}

/**
 * Runs a lunr query over `tokens`. `requireAll` controls the multi-word semantics:
 * - true  → every token must prefix-match (AND) — precise, for type-ahead.
 * - false → tokens are optional (OR) and fuzzy (edit distance 1) — lenient fallback.
 */
function runQuery(
  lunr: typeof LunrDefault,
  index: LunrDefault.Index,
  tokens: string[],
  requireAll: boolean,
): LunrDefault.Index.Result[] {
  return index.query((q) => {
    for (const term of tokens) {
      q.term(term, {
        presence: requireAll ? lunr.Query.presence.REQUIRED : lunr.Query.presence.OPTIONAL,
        wildcard: lunr.Query.wildcard.TRAILING,
        ...(requireAll ? {} : { editDistance: term.length > 3 ? 1 : 0 }),
      })
    }
  })
}

const EMPTY: GroupedResults = { example: [], measure: [], topic: [] }

export async function search(query: string): Promise<GroupedResults> {
  const tokens = tokenize(query)
  if (!tokens.length) return { ...EMPTY }

  let loaded: LoadedIndex
  let lunr: typeof LunrDefault
  try {
    ;[loaded, lunr] = await Promise.all([loadIndex(), getLunr()])
  } catch {
    return { ...EMPTY }
  }

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
