/**
 * Builds the client-side search index consumed by the SearchBar.
 *
 * Reads the Keystatic content files (src/content/{topics,measures,examples}/<slug>/index.yaml),
 * mirrors the Strapi `strapi-plugin-fuzzy-search` field weights / limits, and writes a
 * serialized lunr index + document map to public/search/index.json.
 *
 * Tolerant of missing content: if no entries exist yet (e.g. before the Strapi dump is
 * imported) it writes a valid, empty index so the app still builds and the SearchBar works.
 *
 * Run via `bun run build:search` (also part of `bun run build`).
 */
import { readdirSync, readFileSync, mkdirSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

import lunr from 'lunr'
// @ts-ignore untyped module
import lunrDe from 'lunr-languages/lunr.de.js'
// @ts-ignore untyped module
import lunrStemmerSupport from 'lunr-languages/lunr.stemmer.support.js'
import { parse as parseYaml } from 'yaml'

lunrStemmerSupport(lunr)
lunrDe(lunr)

const ROOT = process.cwd()
const CONTENT = join(ROOT, 'src', 'content')
const OUT_DIR = join(ROOT, 'public', 'search')
const WIKI = 'wissensspeicher'
const CHAR_LIMIT = 300 // matches Strapi fuzzysortOptions.characterLimit

type Type = 'example' | 'measure' | 'topic'
type Raw = Record<string, unknown>

function readCollection(name: string): Map<string, Raw> {
  const dir = join(CONTENT, name)
  const out = new Map<string, Raw>()
  if (!existsSync(dir)) return out
  for (const slug of readdirSync(dir, { withFileTypes: true })) {
    if (!slug.isDirectory()) continue
    const file = join(dir, slug.name, 'index.yaml')
    if (!existsSync(file)) continue
    try {
      out.set(slug.name, (parseYaml(readFileSync(file, 'utf8')) ?? {}) as Raw)
    } catch (err) {
      console.warn(`[search] failed to parse ${file}:`, err)
    }
  }
  return out
}

const str = (v: unknown) => (typeof v === 'string' ? v : v == null ? '' : String(v))
const clip = (v: unknown) => str(v).slice(0, CHAR_LIMIT)

type IndexDoc = {
  id: string
  type: Type
  title: string
  commune: string
  body: string
}
type SearchDoc = { id: string; type: Type; title: string; path: string }

function main() {
  const topics = readCollection('topics')
  const measures = readCollection('measures')
  const examples = readCollection('examples')

  // slug → parent slug, for building nested wiki paths.
  const measureToTopic = new Map<string, string>()
  for (const [slug, m] of measures) measureToTopic.set(slug, str(m.topic))

  const indexDocs: IndexDoc[] = []
  const docs: Record<string, SearchDoc> = {}

  for (const [slug, t] of topics) {
    const id = `topic:${slug}`
    docs[id] = { id, type: 'topic', title: str(t.name), path: `/${WIKI}/${slug}/` }
    indexDocs.push({
      id,
      type: 'topic',
      title: clip(t.name),
      commune: '',
      body: clip(t.description),
    })
  }

  for (const [slug, m] of measures) {
    const topicSlug = str(m.topic)
    if (!topicSlug) {
      console.warn(`[search] skipping measure "${slug}" — no topic (would produce a // path)`)
      continue
    }
    const id = `measure:${slug}`
    docs[id] = {
      id,
      type: 'measure',
      title: str(m.name),
      path: `/${WIKI}/${topicSlug}/${slug}/`,
    }
    indexDocs.push({
      id,
      type: 'measure',
      title: clip(m.name),
      commune: '',
      body: clip(m.description),
    })
  }

  for (const [slug, e] of examples) {
    const measureSlug = str(e.measure)
    const topicSlug = measureToTopic.get(measureSlug) ?? ''
    if (!measureSlug || !topicSlug) {
      console.warn(
        `[search] skipping example "${slug}" — missing measure/topic (would produce a // path)`,
      )
      continue
    }
    const id = `example:${slug}`
    docs[id] = {
      id,
      type: 'example',
      title: str(e.title),
      path: `/${WIKI}/${topicSlug}/${measureSlug}/${slug}/`,
    }
    indexDocs.push({
      id,
      type: 'example',
      title: clip(e.title),
      commune: clip(e.commune),
      // Secondary body fields searched at low weight (subcategory, goals, …).
      body: [e.subcategory, e.goals, e.particularities, e.awards, e.localChallenges]
        .map(clip)
        .join(' \n '),
    })
  }

  const index = lunr(function () {
    // @ts-ignore lunr-languages augments lunr with `this.use`
    this.use(lunr.de)
    this.ref('id')
    this.field('title', { boost: 100 })
    this.field('commune', { boost: 10 })
    this.field('body', { boost: 1 })
    this.metadataWhitelist = []
    for (const doc of indexDocs) this.add(doc)
  })

  mkdirSync(OUT_DIR, { recursive: true })
  writeFileSync(join(OUT_DIR, 'index.json'), JSON.stringify({ index: index.toJSON(), docs }))

  const total = indexDocs.length
  console.log(
    `[search] wrote public/search/index.json — ${topics.size} topics, ` +
      `${measures.size} measures, ${examples.size} examples (${total} docs)`,
  )
  if (total === 0) {
    console.warn(
      '[search] no content found in src/content — index is empty. ' +
        'Import the Strapi dump (bun run migrate) to populate it.',
    )
  }
}

main()
