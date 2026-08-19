/**
 * One-time migration: Strapi v4 export → Keystatic content files.
 *
 * The production Strapi backend is offline, so this reads a DUMP/EXPORT you provide rather
 * than the live API. Put one JSON file per content type into an input directory (default
 * `./migration-input/`), each being the Strapi REST response *with relations & media
 * populated* (i.e. the `populate` tree from the old gatsby-config.js):
 *
 *   migration-input/
 *     topics.json            // GET /api/topics?populate=deep  → { data: [ { id, attributes } ] }
 *     measures.json
 *     examples.json
 *     community-entries.json
 *
 * Both the wrapped `{ data: [{ id, attributes }] }` shape and a plain array of flat objects
 * are accepted (see `unwrap`). Run with:
 *
 *   bun run migrate                       # reads ./migration-input, writes src/content + public images
 *   MIGRATION_INPUT=/path bun run migrate
 *   bun run migrate -- --dry-run          # parse + report only, write nothing
 *
 * After it finishes, run `bun run build:search` and commit src/content/ + public/content-images/.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { stringify as toYaml } from 'yaml'

const INPUT = process.env.MIGRATION_INPUT ?? join(process.cwd(), 'migration-input')
const DRY = process.argv.includes('--dry-run')
const CONTENT = join(process.cwd(), 'src', 'content')
const PUBLIC_IMG = join(process.cwd(), 'public', 'content-images')

type Any = Record<string, any>
const report = {
  topics: 0,
  measures: 0,
  examples: 0,
  communityEntries: 0,
  images: 0,
  missing: [] as string[],
}

// ---- Strapi shape helpers -------------------------------------------------

/** `{ data: [{ id, attributes }] }` → `[{ id, ...attributes }]`; passes plain arrays through. */
function unwrap(json: Any): Any[] {
  const arr = Array.isArray(json) ? json : Array.isArray(json?.data) ? json.data : []
  return arr.map((e: Any) => (e && e.attributes ? { id: e.id, ...e.attributes } : e))
}

/** Single relation → its slug/title (or undefined). Handles `{ data: { attributes } }` & flat. */
function relSlug(rel: Any, field = 'slug'): string | undefined {
  const a = rel?.data?.attributes ?? rel?.attributes ?? rel
  return a?.[field] ?? a?.slug ?? a?.title ?? undefined
}

/** Strapi media object → absolute URL (or undefined). */
function mediaUrl(media: Any): string | undefined {
  const a = media?.data?.attributes ?? media?.attributes ?? media
  return a?.url
}

/** `links.links` component array → [{ display, url }]. */
function links(arr: Any): { display: string; url: string }[] {
  if (!Array.isArray(arr)) return []
  return arr.filter((l) => l?.url).map((l) => ({ display: l.display ?? '', url: l.url }))
}

function loadType(file: string): Any[] {
  const path = join(INPUT, file)
  if (!existsSync(path)) {
    report.missing.push(file)
    return []
  }
  return unwrap(JSON.parse(readFileSync(path, 'utf8')))
}

// ---- image download -------------------------------------------------------

async function downloadImage(
  url: string | undefined,
  collection: string,
  name: string,
): Promise<string> {
  if (!url) return ''
  const ext = (url.split('.').pop() ?? 'jpg').split('?')[0].slice(0, 5)
  const fileName = `${name}.${ext}`
  const dir = join(PUBLIC_IMG, collection)
  const publicPath = `/content-images/${collection}/${fileName}`
  if (DRY) return publicPath
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, fileName), Buffer.from(await res.arrayBuffer()))
    report.images++
    return publicPath
  } catch (err) {
    console.warn(`[migrate] image failed (${url}): ${(err as Error).message}`)
    return ''
  }
}

function writeEntry(collection: string, slug: string, data: Any) {
  if (DRY) return
  const dir = join(CONTENT, collection, slug)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.yaml'), toYaml(data))
}

const str = (v: any) => (v == null ? '' : String(v))
const num = (v: any) => (v == null || v === '' ? undefined : Number(v))

// ---- migration ------------------------------------------------------------

async function main() {
  console.log(`[migrate] input=${INPUT}${DRY ? ' (dry-run)' : ''}`)

  // topics
  for (const t of loadType('topics.json')) {
    const slug = str(t.slug)
    if (!slug) continue
    const image = await downloadImage(mediaUrl(t.image), 'topics', slug)
    writeEntry('topics', slug, {
      name: str(t.name),
      position: num(t.position) ?? 1,
      shortDescription: str(t.shortDescription),
      description: str(t.description),
      image: { image, copyright: str(t.image?.copyright) },
      additionalResources: links(t.additionalResources),
      guidelines: links(t.guidelines),
      fundings: links(t.fundings),
    })
    report.topics++
  }

  // measures
  for (const m of loadType('measures.json')) {
    const slug = str(m.slug)
    if (!slug) continue
    writeEntry('measures', slug, {
      name: str(m.name),
      position: num(m.position) ?? 1,
      topic: relSlug(m.topic) ?? '',
      shortDescription: str(m.shortDescription),
      description: str(m.description),
      additionalResources: links(m.additionalResources),
      guidelines: links(m.guidelines),
      fundings: links(m.fundings),
    })
    report.measures++
  }

  // examples
  for (const e of loadType('examples.json')) {
    const slug = str(e.slug)
    if (!slug) continue
    const image = await downloadImage(mediaUrl(e.image?.image), 'examples', slug)
    const awards = []
    for (const [i, aw] of (Array.isArray(e.awards) ? e.awards : []).entries()) {
      const awardEntity = aw?.award?.data?.attributes ?? aw?.award ?? {}
      const logo = await downloadImage(
        mediaUrl(awardEntity?.logo?.image ?? awardEntity?.logo),
        'examples/awards',
        `${slug}-award-${i}`,
      )
      awards.push({
        name: str(awardEntity?.name),
        description: str(aw?.description),
        logo,
        logoCopyright: str(awardEntity?.logo?.copyright),
      })
    }
    writeEntry('examples', slug, {
      title: str(e.title),
      position: num(e.position) ?? 1,
      measure: relSlug(e.measure) ?? '',
      relatedTopic: relSlug(e.relatedTopic),
      image: { image, copyright: str(e.image?.copyright) },
      shortDescription: str(e.shortDescription),
      subcategory: str(e.subcategory),
      commune: str(e.commune),
      countryState: str(e.countryState),
      spatialStructure: str(e.spatialStructure),
      centrality: str(e.centrality),
      period: str(e.period),
      population: num(e.population) ?? 1,
      costs: num(e.costs),
      financiallyWeak: Boolean(e.financiallyWeak),
      beginnerFriendly: Boolean(e.beginnerFriendly),
      description: str(e.description),
      goals: str(e.goals),
      localChallenges: str(e.localChallenges),
      particularities: str(e.particularities),
      results: str(e.results),
      challenges: str(e.challenges),
      communication: str(e.communication),
      funding: str(e.funding),
      personnelExpenses: str(e.personnelExpenses),
      authorities: str(e.authorities),
      stakeholders: str(e.stakeholders),
      relatedOffice: str(e.relatedOffice),
      sources: str(e.sources),
      notes: str(e.notes),
      links: links(e.links),
      awards,
    })
    report.examples++
  }

  // community entries
  for (const c of loadType('community-entries.json')) {
    const slug = str(c.slug ?? c.title)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    if (!slug) continue
    const image = await downloadImage(mediaUrl(c.image?.image), 'community-entries', slug)
    const website = links(Array.isArray(c.website) ? c.website : c.website ? [c.website] : [])
    writeEntry('community-entries', slug, {
      title: str(c.title),
      measure: relSlug(c.measure) ?? '',
      description: str(c.description),
      image: image ? { image, copyright: str(c.image?.copyright) } : undefined,
      website,
      subcategory: str(c.subcategory),
      author: str(c.author),
      contact: str(c.contact),
      commune: str(c.commune),
      countryState: str(c.countryState),
    })
    report.communityEntries++
  }

  console.log('\n=== Migration report ===')
  console.log(report)
  if (report.missing.length) {
    console.warn(`[migrate] missing input files: ${report.missing.join(', ')}`)
  }
  if (!DRY) {
    console.log(
      '\nNext: `bun run build:search`, then commit src/content/ + public/content-images/.',
    )
  }
}

main()
