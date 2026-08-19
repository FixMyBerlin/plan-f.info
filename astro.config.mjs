import { homedir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

import markdoc from '@astrojs/markdoc'
import netlify from '@astrojs/netlify'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import keystatic from '@keystatic/astro'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, envField } from 'astro/config'
import { loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'

const appRoot = fileURLToPath(new URL('.', import.meta.url))

// ABOUT:
// Settings are read from `.env` manually because Astro only exposes a subset by default.
// Docs https://docs.astro.build/en/guides/configuring-astro/#environment-variables
//
// OUTPUT: this is a static site — every public page (incl. the wiki getStaticPaths routes) is
// prerendered. `output: 'static'` is required so getStaticPaths actually runs; in `'server'`
// mode it is ignored and the wiki pages render with empty props (topic.data → crash). Keystatic
// is the only on-demand part, so it's added only where a server can serve it: the dev server, or
// the Netlify adapter in the deployed build. See https://keystatic.com/docs/installation-astro
const { ASTRO_USE_NETLIFY_ADAPTER } = loadEnv(
  process.env.NODE_ENV ?? 'development',
  process.cwd(),
  '',
)

const useNetlifyAdapter = ASTRO_USE_NETLIFY_ADAPTER === 'true'
const isDev = process.argv.includes('dev')
// Keystatic injects on-demand (`prerender: false`) routes, which need either the dev server or
// an adapter. Excluded from the pure-static local build so it doesn't require an adapter.
const withKeystatic = isDev || useNetlifyAdapter

// https://astro.build/config
export default defineConfig({
  site: 'https://plan-f.info',
  // Pages are emitted in directory format (`/page/index.html`) to keep the trailing-slash URLs
  // of the old Gatsby site. We use 'ignore' (not 'always') because 'always' force-404s the
  // Keystatic admin's non-trailing-slash routes (e.g. /keystatic/collection/topics and the
  // /api/keystatic/* endpoints). Netlify serves the static pages at their trailing-slash URLs.
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    withKeystatic ? keystatic() : undefined,
    react(),
    markdoc(),
    sitemap({
      // Match gatsby-plugin-sitemap excludes.
      filter: (page) => !page.endsWith('/impressum/') && !page.endsWith('/datenschutz/'),
    }),
  ],
  output: 'static',
  adapter: useNetlifyAdapter ? netlify() : undefined,
  vite: {
    // svgr handles `*.svg?react` imports (React components used inside .tsx islands).
    // Bare `*.svg` imports are left to Astro's native SVG component handling.
    plugins: [svgr(), tailwindcss()],
    server: {
      // Bun globalStore (bunfig.toml) symlinks realpath outside the project (~/.bun/install/cache/links/).
      // Extend (not replace) Vite's default fs.allow — setting allow alone drops the project root.
      // @see https://bun.com/docs/pm/global-store
      // @see https://vite.dev/config/server-options.html#server-fs-allow
      fs: {
        allow: [appRoot, join(homedir(), '.bun/install/cache/links')],
      },
    },
  },
  env: {
    schema: {
      ASTRO_USE_NETLIFY_ADAPTER: envField.boolean({
        access: 'secret',
        context: 'server',
        optional: true,
        default: false,
      }),
      KEYSTATIC_STORAGE_KIND: envField.enum({
        values: ['local', 'github'],
        access: 'public',
        context: 'client',
        optional: true,
        default: 'local',
      }),
      ASTRO_ENV: envField.enum({
        values: ['development', 'staging', 'production'],
        access: 'public',
        context: 'client',
        optional: true,
        default: 'development',
      }),
    },
  },
})
