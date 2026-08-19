import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import pixelmatch from 'pixelmatch'
/**
 * Visual parity check: screenshots each page on the local static build and on the live
 * https://plan-f.info, then reports the pixel-difference ratio.
 *
 * Usage:
 *   bun run preview &            # serve dist/ on :4321
 *   bun run scripts/visual-compare.ts
 *
 * Only content-independent pages are compared (the wiki/home depend on Strapi content that
 * isn't migrated yet). Diffs are written to tests/visual/__diffs__/.
 */
import { chromium } from 'playwright'
import { PNG } from 'pngjs'

const LOCAL = process.env.LOCAL_URL ?? 'http://localhost:4321'
const PROD = 'https://plan-f.info'
const OUT = join(process.cwd(), 'tests', 'visual', '__diffs__')

// Pages whose content does not depend on the (not-yet-migrated) Strapi data.
const PAGES = [
  '/impressum/',
  '/datenschutz/',
  '/ueber/',
  '/artikel/',
  '/artikel/warum-ist-beteiligung-wichtig/',
  '/weitere-angebote/',
  '/weitere-angebote/handbuch/',
  '/award/plan-f-award-2022/',
  '/plan-f-check/',
]

const VIEWPORT = { width: 1280, height: 900 }

async function shoot(browser: Awaited<ReturnType<typeof chromium.launch>>, url: string) {
  const page = await browser.newPage({ viewport: VIEWPORT })
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 })
  // Settle fonts/lazy content.
  await page.waitForTimeout(1200)
  const buf = await page.screenshot({ fullPage: true })
  await page.close()
  return PNG.sync.read(buf)
}

async function main() {
  mkdirSync(OUT, { recursive: true })
  const browser = await chromium.launch()
  const results: { page: string; ratio: number; note: string }[] = []

  for (const path of PAGES) {
    try {
      const [local, prod] = await Promise.all([
        shoot(browser, LOCAL + path),
        shoot(browser, PROD + path),
      ])
      const width = Math.min(local.width, prod.width)
      const height = Math.min(local.height, prod.height)
      const diff = new PNG({ width, height })
      // Crop both to the common area (full-page heights can differ slightly).
      const crop = (png: PNG) => {
        if (png.width === width && png.height === height) return png
        const out = new PNG({ width, height })
        PNG.bitblt(png, out, 0, 0, width, height, 0, 0)
        return out
      }
      const a = crop(local)
      const b = crop(prod)
      const mismatched = pixelmatch(a.data, b.data, diff.data, width, height, {
        threshold: 0.15,
      })
      const ratio = mismatched / (width * height)
      const slug = path.replace(/\//g, '_') || 'root'
      writeFileSync(join(OUT, `${slug}.diff.png`), PNG.sync.write(diff))
      const note =
        height !== Math.max(local.height, prod.height)
          ? `(height local=${local.height} prod=${prod.height})`
          : ''
      results.push({ page: path, ratio, note })
    } catch (err) {
      results.push({ page: path, ratio: NaN, note: `ERROR ${(err as Error).message}` })
    }
  }

  await browser.close()

  console.log('\n=== Visual parity vs plan-f.info (lower = closer) ===')
  for (const r of results) {
    const pct = Number.isNaN(r.ratio) ? 'n/a' : `${(r.ratio * 100).toFixed(2)}%`
    const flag = Number.isNaN(r.ratio) ? '❌' : r.ratio < 0.03 ? '✅' : r.ratio < 0.1 ? '⚠️ ' : '❌'
    console.log(`${flag} ${pct.padStart(7)}  ${r.page}  ${r.note}`)
  }
}

main()
