import { expect, test } from '@playwright/test'

test.describe('smoke: structure & behavior', () => {
  test('home renders with nav, footer, Matomo', async ({ page, baseURL }) => {
    const res = await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    expect(res?.status()).toBe(200)
    // Matomo inline bootstrap present.
    expect(await page.content()).toContain('s.fixmycity.de')
    await expect(page.locator('footer')).toBeVisible()
  })

  test('desktop nav links resolve (200)', async ({ page, baseURL }, testInfo) => {
    test.skip(testInfo.project.name !== 'desktop', 'desktop only')
    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    const targets = [
      '/wissensspeicher/',
      '/plan-f-check/',
      '/weitere-angebote/',
      '/artikel/',
      '/ueber/',
      '/award/plan-f-award-2022/',
    ]
    for (const path of targets) {
      const res = await page.request.get(`${baseURL}${path}`)
      // wissensspeicher index may exist; other static pages must be 200.
      expect([200, 404]).toContain(res.status())
      if (path !== '/wissensspeicher/') expect(res.status()).toBe(200)
    }
  })

  test('client-side Lunr search runs (shows a result panel)', async ({
    page,
    baseURL,
  }, testInfo) => {
    test.skip(testInfo.project.name !== 'desktop', 'desktop only')
    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    const input = page.getByPlaceholder('Suche im Wissensspeicher').first()
    await input.fill('Radweg')
    // The Lunr index loads and a result header appears (content is empty until the dump is
    // imported, so it reads "Keine Ergebnisse…", which still proves the search pipeline works).
    await expect(page.getByText(/Ergebnis|Ergebnisse/).first()).toBeVisible({ timeout: 10_000 })
  })

  test('mobile menu opens', async ({ page, baseURL }, testInfo) => {
    test.skip(testInfo.project.name !== 'mobile', 'mobile only')
    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    await page.getByRole('button', { name: /open main menu/i }).click()
    // The mobile menu panel opens — its (visible) "Über" link appears. Scope to the visible
    // instance, since the hidden desktop nav also contains an "Über" link.
    await expect(
      page
        .locator('a:visible')
        .filter({ hasText: /^Über$/ })
        .first(),
    ).toBeVisible()
  })

  test('plan-f-check questionnaire is interactive', async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/plan-f-check/fragebogen/`, { waitUntil: 'networkidle' })
    // The questionnaire island hydrates and shows interactive controls.
    await expect(page.locator('main')).toBeVisible()
    const radios = page.getByRole('radio')
    expect(await radios.count()).toBeGreaterThan(0)
  })
})
