/**
 * One-shot migration: move CMS images from public/content-images/ into each content entry
 * folder (src/content/<collection>/<slug>/) and rewrite YAML paths to ./filename.
 *
 * Run: bun scripts/migrate-content-images-to-collections.ts
 */
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  renameSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { basename, join } from 'node:path'

import { parse, stringify } from 'yaml'

const ROOT = process.cwd()
const CONTENT = join(ROOT, 'src', 'content')
const PUBLIC_IMG = join(ROOT, 'public', 'content-images')

const COLLECTIONS = ['topics', 'examples', 'community-entries'] as const

const report = {
  yamlFiles: 0,
  imagesMoved: 0,
  awardsMoved: 0,
  skipped: 0,
  missing: [] as string[],
}

function isContentImagePath(value: unknown): value is string {
  return typeof value === 'string' && value.startsWith('/content-images/')
}

function publicFilePath(publicUrl: string): string {
  return join(ROOT, 'public', publicUrl.replace(/^\//, ''))
}

function moveImage(publicUrl: string, entryDir: string): string | undefined {
  const src = publicFilePath(publicUrl)
  if (!existsSync(src)) {
    report.missing.push(publicUrl)
    console.warn(`[migrate] missing file for ${publicUrl}`)
    return undefined
  }
  const fileName = basename(publicUrl)
  const dest = join(entryDir, fileName)
  mkdirSync(entryDir, { recursive: true })
  if (existsSync(dest)) {
    rmSync(src, { force: true })
  } else {
    renameSync(src, dest)
  }
  report.imagesMoved++
  return `./${fileName}`
}

function processEntry(collection: string, slug: string) {
  const entryDir = join(CONTENT, collection, slug)
  const yamlPath = join(entryDir, 'index.yaml')
  if (!existsSync(yamlPath)) return

  const data = parse(readFileSync(yamlPath, 'utf8')) as Record<string, unknown>
  report.yamlFiles++

  const imageObj = data.image as { image?: unknown; copyright?: string } | undefined
  if (imageObj && isContentImagePath(imageObj.image)) {
    const newPath = moveImage(imageObj.image, entryDir)
    if (newPath) imageObj.image = newPath
    else report.skipped++
  }

  if (collection === 'examples' && Array.isArray(data.awards)) {
    for (const award of data.awards as Record<string, unknown>[]) {
      if (isContentImagePath(award.logo)) {
        const newPath = moveImage(award.logo as string, entryDir)
        if (newPath) {
          award.logo = newPath
          report.awardsMoved++
        } else report.skipped++
      }
    }
  }

  writeFileSync(yamlPath, stringify(data))
}

function removeEmptyDirs(dir: string) {
  if (!existsSync(dir)) return
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) removeEmptyDirs(join(dir, entry.name))
  }
  if (readdirSync(dir).length === 0) rmSync(dir, { recursive: true, force: true })
}

for (const collection of COLLECTIONS) {
  const collectionDir = join(CONTENT, collection)
  if (!existsSync(collectionDir)) continue
  for (const entry of readdirSync(collectionDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    processEntry(collection, entry.name)
  }
}

removeEmptyDirs(PUBLIC_IMG)

console.log('\n=== Content image migration ===')
console.log(report)
