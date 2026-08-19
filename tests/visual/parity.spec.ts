import { expect, test } from '@playwright/test'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'

// Pages compared pixel-for-pixel against production. Includes the (now-imported) wiki
// index/topic/measure pages, which match deterministically. NOT included: the home page and
// example detail pages — both render correctly with identical text, but differ in the pixel
// diff for non-structural reasons (home picks 3 random example cards; example pages are
// richtext-heavy and pick up the Tailwind v4 vs v3 prose line-height delta).
const PAGES = [
  '/impressum/',
  '/datenschutz/',
  '/ueber/',
  '/artikel/',
  '/artikel/warum-ist-beteiligung-wichtig/',
  '/weitere-angebote/',
  '/weitere-angebote/handbuch/',
  '/weitere-angebote/audits/',
  '/weitere-angebote/e-learning/',
  '/award/plan-f-award-2022/',
  '/plan-f-check/',
  // wiki (content-driven)
  '/wissensspeicher/',
  '/wissensspeicher/infrastruktur/',
  '/wissensspeicher/kommunikation-und-oeffentlichkeitsarbeit/',
]

const PROD = 'https://plan-f.info'

test.describe('parity vs plan-f.info (desktop only)', () => {
  for (const path of PAGES) {
    test(`content + layout parity: ${path}`, async ({ page, baseURL }, testInfo) => {
      test.skip(testInfo.project.name !== 'desktop', 'desktop project only')
      // 1. Strong signal: the visible main text must be identical to production.
      await page.goto(`${baseURL}${path}`, { waitUntil: 'networkidle' })
      const localText = await page.locator('main').innerText()

      const prodPage = await page.context().newPage()
      await prodPage.goto(`${PROD}${path}`, { waitUntil: 'networkidle' })
      const prodText = await prodPage.locator('main').innerText()

      // Normalize away insignificant differences: invisible hyphenation/zero-width chars
      // (German soft hyphens), collapsed whitespace, and spaces before punctuation that
      // differ at inline-link boundaries between Astro and Gatsby's renderers.
      const normalize = (s: string) =>
        s
          .normalize('NFC') // prod serves some chars decomposed (\u00FC = u + combining \u25CC\u0308); unify
          .replace(/\u00AD|\u200B|\u200C|\u200D|\uFEFF/g, '')
          .replace(/\s+/g, ' ')
          .replace(/\s+([.,;:!?])/g, '$1')
          .trim()
      expect(normalize(localText), 'main text should match production').toBe(normalize(prodText))

      // 2. Pixel diff as a guard against gross layout regressions (lenient: prose line-height
      //    differs slightly between Tailwind v3/v4).
      const localShot = PNG.sync.read(await page.screenshot({ fullPage: true }))
      const prodShot = PNG.sync.read(await prodPage.screenshot({ fullPage: true }))
      await prodPage.close()

      const width = Math.min(localShot.width, prodShot.width)
      const height = Math.min(localShot.height, prodShot.height)
      const crop = (png: PNG) => {
        if (png.width === width && png.height === height) return png
        const out = new PNG({ width, height })
        PNG.bitblt(png, out, 0, 0, width, height, 0, 0)
        return out
      }
      const diff = new PNG({ width, height })
      const mismatched = pixelmatch(
        crop(localShot).data,
        crop(prodShot).data,
        diff.data,
        width,
        height,
        {
          threshold: 0.15,
        },
      )
      const ratio = mismatched / (width * height)
      expect(ratio, `pixel diff ratio for ${path}`).toBeLessThan(0.12)
    })
  }
})
