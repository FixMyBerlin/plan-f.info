/**
 * Imports the Strapi v4 production content from a restored Postgres database into Keystatic
 * content files (src/content/**) with images co-located next to each entry's index.yaml.
 *
 * The production Strapi is offline, so we restore its pg_dump into a throwaway Postgres
 * (via Docker) and read the relational tables directly. Strapi v4 splits content across:
 *   - main tables (topics, measures, examples, community_entries)
 *   - relation link tables (*_links)
 *   - polymorphic component joins (*_components → components_links_links / _image_copyright_images
 *     / _award_awards)
 *   - media morphs (files_related_morphs → files.url on S3)
 *
 * Prereq (see MIGRATION.md):
 *   docker run -d --name plan-f-pg -e POSTGRES_PASSWORD=planf -e POSTGRES_DB=planf -p 55432:5432 postgres:14
 *   docker exec -i plan-f-pg psql -U postgres -d planf < ../plan-f-db-production.sql
 *
 * Run:  bun run import:sql        (set PG_URL to override the connection string)
 * Then: bun run build:search  &&  commit src/content/
 */
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { Client } from 'pg'
import { stringify as toYaml } from 'yaml'

const PG_URL = process.env.PG_URL ?? 'postgres://postgres:planf@localhost:55432/planf'
const ROOT = process.cwd()
const CONTENT = join(ROOT, 'src', 'content')

const client = new Client({ connectionString: PG_URL })
const report = {
  topics: 0,
  measures: 0,
  examples: 0,
  communityEntries: 0,
  images: 0,
  imageFails: 0,
}

const str = (v: unknown) => (v == null ? '' : String(v))
const num = (v: unknown) => (v == null ? undefined : Number(v))

async function q<T = any>(sql: string, params: unknown[] = []): Promise<T[]> {
  return (await client.query(sql, params)).rows as T[]
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/** links.links component array for `<table>.<field>`. */
async function links(table: string, entityId: number, field: string) {
  const rows = await q(
    `select l.display, l.url
       from ${table}_components tc
       join components_links_links l on l.id = tc.component_id
      where tc.entity_id = $1 and tc.field = $2 and tc.component_type = 'links.links'
      order by tc."order"`,
    [entityId, field],
  )
  return rows.filter((r) => r.url).map((r) => ({ display: str(r.display), url: str(r.url) }))
}

/** A media file URL+ext attached directly to an entity/component via the morph table. */
async function morphFile(relatedType: string, relatedId: number, field: string) {
  const rows = await q(
    `select f.url, f.ext
       from files_related_morphs m
       join files f on f.id = m.file_id
      where m.related_type = $1 and m.related_id = $2 and m.field = $3
      order by m."order" limit 1`,
    [relatedType, relatedId, field],
  )
  return rows[0] as { url: string; ext: string } | undefined
}

/** Resolve an `image.copyright-image` component (image file + copyright) on `<table>.<field>`. */
async function copyrightImage(table: string, entityId: number, field: string) {
  const comp = (
    await q(
      `select component_id from ${table}_components
        where entity_id = $1 and field = $2 and component_type = 'image.copyright-image'
        order by "order" limit 1`,
      [entityId, field],
    )
  )[0]
  if (!comp) return undefined
  const meta = (
    await q(`select copyright from components_image_copyright_images where id = $1`, [
      comp.component_id,
    ])
  )[0]
  const file = await morphFile('image.copyright-image', comp.component_id, 'image')
  return { copyright: str(meta?.copyright), file }
}

async function downloadImage(
  file: { url: string; ext: string } | undefined,
  collection: string,
  slug: string,
  localBaseName?: string,
): Promise<string> {
  if (!file?.url) return ''
  const ext = (file.ext || `.${file.url.split('.').pop()}`).replace(/^\.?/, '.')
  const fileName = localBaseName ? `${localBaseName}${ext}` : `${slug}${ext}`
  const dir = join(CONTENT, collection, slug)
  try {
    const res = await fetch(file.url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, fileName), Buffer.from(await res.arrayBuffer()))
    report.images++
    return `./${fileName}`
  } catch (err) {
    report.imageFails++
    console.warn(`[import] image failed (${file.url}): ${(err as Error).message}`)
    return ''
  }
}

function writeEntry(collection: string, slug: string, data: Record<string, unknown>) {
  const dir = join(CONTENT, collection, slug)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.yaml'), toYaml(data))
}

function resetCollection(collection: string) {
  const dir = join(CONTENT, collection)
  if (existsSync(dir)) rmSync(dir, { recursive: true, force: true })
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, '.gitkeep'), '')
}

async function main() {
  await client.connect()
  for (const c of ['topics', 'measures', 'examples', 'community-entries']) resetCollection(c)

  // id → slug maps for relation resolution
  const topicSlug = new Map<number, string>()
  const measureSlug = new Map<number, string>()

  // ---- topics ----
  for (const t of await q(
    `select * from public.topics where published_at is not null order by position`,
  )) {
    const slug = str(t.slug) || slugify(str(t.name))
    topicSlug.set(t.id, slug)
    const img = await copyrightImageDirect('api::topic.topic', t.id, slug, 'topics')
    writeEntry('topics', slug, {
      name: str(t.name),
      position: num(t.position) ?? 1,
      shortDescription: str(t.short_description),
      description: str(t.description),
      image: img,
      additionalResources: await links('topics', t.id, 'additionalResources'),
      guidelines: await links('topics', t.id, 'guidelines'),
      fundings: await links('topics', t.id, 'fundings'),
    })
    report.topics++
  }

  // ---- measures ----
  for (const m of await q(
    `select * from public.measures where published_at is not null order by position`,
  )) {
    const slug = str(m.slug) || slugify(str(m.name))
    measureSlug.set(m.id, slug)
    const topicId = (
      await q(`select topic_id from public.measures_topic_links where measure_id = $1`, [m.id])
    )[0]?.topic_id
    writeEntry('measures', slug, {
      name: str(m.name),
      position: num(m.position) ?? 1,
      topic: topicSlug.get(topicId) ?? '',
      shortDescription: str(m.short_description),
      description: str(m.description),
      additionalResources: await links('measures', m.id, 'additionalResources'),
      guidelines: await links('measures', m.id, 'guidelines'),
      fundings: await links('measures', m.id, 'fundings'),
    })
    report.measures++
  }

  // ---- examples ----
  for (const e of await q(
    `select * from public.examples where published_at is not null order by position`,
  )) {
    const slug = str(e.slug) || slugify(str(e.title))
    const measureId = (
      await q(`select measure_id from public.examples_measure_links where example_id = $1`, [e.id])
    )[0]?.measure_id
    const relatedTopicId = (
      await q(`select topic_id from public.examples_related_topic_links where example_id = $1`, [
        e.id,
      ])
    )[0]?.topic_id

    const ci = await copyrightImage('examples', e.id, 'image')
    const image = {
      image: await downloadImage(ci?.file, 'examples', slug),
      copyright: str(ci?.copyright),
    }

    // awards: award.award components → award entity (name + logo) + description
    const awards: Record<string, unknown>[] = []
    const awardComps = await q(
      `select component_id, "order" from public.examples_components
        where entity_id = $1 and field = 'awards' and component_type = 'award.award' order by "order"`,
      [e.id],
    )
    for (const [i, ac] of awardComps.entries()) {
      const desc = (
        await q(`select description from public.components_award_awards where id = $1`, [
          ac.component_id,
        ])
      )[0]?.description
      const awardId = (
        await q(
          `select inv_award_id from public.components_award_awards_award_links where award_id = $1`,
          [ac.component_id],
        )
      )[0]?.inv_award_id
      const award = awardId
        ? (await q(`select name from public.awards where id = $1`, [awardId]))[0]
        : undefined
      const logoCi = awardId ? await copyrightImage('awards', awardId, 'logo') : undefined
      awards.push({
        name: str(award?.name),
        description: str(desc),
        logo: await downloadImage(logoCi?.file, 'examples', slug, `${slug}-award-${i}`),
        logoCopyright: str(logoCi?.copyright),
      })
    }

    writeEntry('examples', slug, {
      title: str(e.title),
      position: num(e.position) ?? 1,
      measure: measureSlug.get(measureId) ?? '',
      relatedTopic: topicSlug.get(relatedTopicId) || undefined,
      image,
      shortDescription: str(e.short_description),
      subcategory: str(e.subcategory),
      commune: str(e.commune),
      countryState: str(e.country_state),
      spatialStructure: str(e.spatial_structure),
      centrality: str(e.centrality),
      period: str(e.period),
      population: num(e.population) ?? 1,
      costs: num(e.costs),
      financiallyWeak: Boolean(e.financially_weak),
      beginnerFriendly: Boolean(e.beginner_friendly),
      description: str(e.description),
      goals: str(e.goals),
      localChallenges: str(e.local_challenges),
      particularities: str(e.particularities),
      results: str(e.results),
      challenges: str(e.challenges),
      communication: str(e.communication),
      funding: str(e.funding),
      personnelExpenses: str(e.personnel_expenses),
      authorities: str(e.authorities),
      stakeholders: str(e.stakeholders),
      relatedOffice: str(e.related_office),
      sources: str(e.sources),
      notes: str(e.notes),
      links: await links('examples', e.id, 'links'),
      awards,
    })
    report.examples++
  }

  // ---- community entries (no slug column → derive from title, dedupe) ----
  const usedSlugs = new Set<string>()
  for (const c of await q(
    `select * from public.community_entries where published_at is not null order by id`,
  )) {
    let slug = slugify(str(c.title)) || `entry-${c.id}`
    if (usedSlugs.has(slug)) slug = `${slug}-${c.id}`
    usedSlugs.add(slug)
    const measureId = (
      await q(
        `select measure_id from public.community_entries_measure_links where community_entry_id = $1`,
        [c.id],
      )
    )[0]?.measure_id
    const ci = await copyrightImage('community_entries', c.id, 'image')
    const imagePath = await downloadImage(ci?.file, 'community-entries', slug)
    writeEntry('community-entries', slug, {
      title: str(c.title),
      measure: measureSlug.get(measureId) ?? '',
      description: str(c.description),
      image: imagePath ? { image: imagePath, copyright: str(ci?.copyright) } : undefined,
      website: await links('community_entries', c.id, 'website'),
      subcategory: str(c.subcategory),
      author: str(c.author),
      contact: str(c.contact),
      commune: str(c.commune),
      countryState: str(c.country_state),
    })
    report.communityEntries++
  }

  await client.end()
  console.log('\n=== Import report ===')
  console.log(report)
  console.log('\nNext: `bun run build:search`, then commit src/content/.')
}

/** Topic image is stored directly on the entity (not via a copyright-image component). */
async function copyrightImageDirect(
  relatedType: string,
  entityId: number,
  slug: string,
  collection: string,
) {
  // Topics use a copyright-image component for `image`, same as examples.
  const ci = await copyrightImage(collection, entityId, 'image')
  if (ci) {
    return { image: await downloadImage(ci.file, collection, slug), copyright: str(ci.copyright) }
  }
  // Fallback: direct media morph on the entity.
  const file = await morphFile(relatedType, entityId, 'image')
  return { image: await downloadImage(file, collection, slug), copyright: '' }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
