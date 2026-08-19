import { readdirSync } from 'node:fs'
import { join } from 'node:path'

import { expect, test } from '@playwright/test'

// Crawls every built page and asserts it loads without a server error, without console/page
// errors, and without broken images. Runs against the local static build (playwright.config's
// webServer builds + serves dist/). Keeps it simple: one test that walks the whole sitemap.

// Discover URLs from the built output: each dist/**/index.html → "/path/".
function builtPageUrls(distDir = join(process.cwd(), 'dist')): string[] {
  const urls: string[] = []
  const walk = (dir: string, base: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (entry.name === '_astro') continue
        walk(join(dir, entry.name), `${base}${entry.name}/`)
      } else if (entry.name === 'index.html') {
        urls.push(base || '/')
      }
    }
  }
  walk(distDir, '/')
  // The result shell only renders for a valid answer URL (it redirects to /404 otherwise).
  return urls.filter((u) => u !== '/plan-f-check/result/').sort()
}

// Console messages that are expected in the local preview (external analytics can't load).
const IGNORED_ERROR = /matomo|s\.fixmycity\.de|favicon\.ico/i

test.describe('every page loads cleanly', () => {
  test('no broken pages, console errors, or broken images', async ({ page, baseURL }, testInfo) => {
    test.skip(testInfo.project.name !== 'desktop', 'desktop only')
    test.setTimeout(300_000) // crawling the whole site takes a while

    const consoleErrors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error' && !IGNORED_ERROR.test(msg.text())) consoleErrors.push(msg.text())
    })
    page.on('pageerror', (err) => consoleErrors.push(`pageerror: ${err.message}`))

    const urls = builtPageUrls()
    expect(urls.length, 'should have discovered built pages').toBeGreaterThan(20)

    const failures: string[] = []
    for (const path of urls) {
      consoleErrors.length = 0
      // Not `networkidle`: the Matomo script keeps a connection busy, so it never settles.
      const res = await page
        .goto(`${baseURL}${path}`, { waitUntil: 'domcontentloaded', timeout: 20_000 })
        .catch((err) => {
          failures.push(`${path} → navigation failed: ${err.message}`)
          return null
        })
      if (!res) continue

      const status = res.status()
      if (status >= 400) failures.push(`${path} → HTTP ${status}`)

      // Scroll to trigger lazy images, wait for them to settle, then flag any that finished
      // loading with no dimensions (a broken src → 404 image).
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
      await page.waitForLoadState('load').catch(() => {})
      await page.waitForTimeout(200)
      const brokenImages = await page.evaluate(() =>
        [...document.querySelectorAll('img')]
          .filter((img) => img.complete && img.naturalWidth === 0)
          .map((img) => img.getAttribute('src') || '(no src)'),
      )
      if (brokenImages.length) failures.push(`${path} → broken images: ${brokenImages.join(', ')}`)
      if (consoleErrors.length)
        failures.push(`${path} → console errors: ${consoleErrors.join(' | ')}`)
    }

    console.log(`[all-pages] crawled ${urls.length} pages, ${failures.length} failure(s)`)
    expect(failures, `\n${failures.join('\n')}\n`).toEqual([])
  })
})
