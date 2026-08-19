import { defineConfig, devices } from '@playwright/test'

// Visual + smoke tests comparing the local static build against production plan-f.info.
// Run: `bun run test:visual`
export default defineConfig({
  testDir: './tests/visual',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  timeout: 60_000,
  expect: { timeout: 15_000 },
  use: {
    baseURL: process.env.LOCAL_URL ?? 'http://localhost:4321',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 900 } },
    },
    // Chromium-based mobile emulation (avoids needing the WebKit browser).
    { name: 'mobile', use: { ...devices['Pixel 5'] } },
  ],
  // Build the static site and serve it before the tests (reuses an already-running preview).
  webServer: {
    command: 'bun run build:local && bun run preview',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
})
