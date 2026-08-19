# Plan F → Astro migration

This project replaces the Gatsby + Strapi `plan-f.info` with a fully static Astro site
(Keystatic CMS, client-side Lunr search, Netlify hosting).

## Status

| Area                                                                                     | State                                                 |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Scaffold, toolchain (Bun, Astro 6, Tailwind 4, oxlint/oxfmt, React islands)              | ✅ done                                               |
| Keystatic schema (`keystatic.config.ts`) + content collections (`src/content.config.ts`) | ✅ done                                               |
| Layout, head, nav, footer, Matomo, SVG components, fonts                                 | ✅ done                                               |
| Static pages (home, legal, artikel ×7, weitere-angebote ×4, award, plan-f-check)         | ✅ done, **visually verified vs plan-f.info**         |
| Lunr search (build script + client SearchBar)                                            | ✅ done — 177-doc index, German stemmer, real results |
| Plan F Check questionnaire + result shell                                                | ✅ done                                               |
| Wissensspeicher (wiki) routes                                                            | ✅ done — 178 wiki pages, verified vs plan-f.info     |
| Netlify config (`netlify.toml`, `_redirects`, server/Keystatic build)                    | ✅ done & verified                                    |
| **Content imported** (9 topics, 46 measures, 122 examples, 126 community, 275 images)    | ✅ done from the production SQL dump                  |

## Content import (done)

The production Strapi is offline, so the content was restored from the `pg_dump`
(`../plan-f-db-production.sql`) into a throwaway Postgres via Docker, then read directly from
the Strapi v4 relational tables. To re-run (e.g. with a fresh dump):

```bash
# 1. restore the dump into a local Postgres
docker run -d --name plan-f-pg -e POSTGRES_PASSWORD=planf -e POSTGRES_DB=planf -p 55432:5432 postgres:14
docker exec -i plan-f-pg psql -U postgres -d planf < ../plan-f-db-production.sql

# 2. extract → Keystatic content + download images (from S3, still live)
bun run import:sql        # writes src/content/** with images next to each index.yaml

# 3. rebuild the search index, then build
bun run build:search
bun run build:local
```

`scripts/import-from-sql.ts` resolves Strapi's relation link tables, polymorphic component
joins, and media morphs. (`scripts/migrate-strapi-to-keystatic.ts` is the alternative path for
a Strapi REST/JSON export rather than a SQL dump.)

## Commands

- `bun run dev` — dev server + Keystatic admin at `/keystatic`
- `bun run build` — production build (server + Keystatic, used on Netlify)
- `bun run build:local` — pure static build like the public site
- `bun run preview` — serve the static build on :4321
- `bun run test:visual` — Playwright parity + smoke tests vs plan-f.info
- `bun run test:pages` — crawl every built page; assert no 4xx/5xx, console errors, or broken images
- `bun run migrate` — import a Strapi dump (see above)

## Key decisions / deviations from the original plan

- **Astro 6, not 7.** `@keystatic/astro` supports Astro `2–6` only; Astro 7 would break the CMS.
- **TypeScript 5.9 (classic), not tsgo 7.0.1-rc.** The native-preview package lacks the
  `typescript` API entrypoints Astro's config loader needs. tsgo is for the Vite/TanStack SPA
  stack in the fixmyskills tech-stack skill, not Astro.
- **Tailwind 4** (`@tailwindcss/vite`, CSS-first) with the brand palette (lime/green/purple)
  ported 1:1 into `@theme` in `src/styles/global.css`.
- **Richtext stored as Markdown text** in Keystatic (not document fields): the example type has
  ~15 richtext fields; Markdown keeps storage flat, migration verbatim, search-indexing trivial,
  and rendering identical to the old `childMarkdownRemark.html` (via `marked` → `<Prose>`).
- **SVGs**: `.astro` files use Astro's native SVG components (`import X from './x.svg'` →
  `<X />`, auto-optimized); React islands use `vite-plugin-svgr` (`import X from './x.svg?react'`).
  Both auto-load and auto-update on edit. A few source SVGs had stray JSX attributes / a trailing
  `;` that broke the SVG parser — those were normalized to valid SVG.
- **`html`/`body` are not height-constrained.** The original `@apply: h-full` had a typo that
  silently disabled it, so the page scrolled naturally; reproducing `height:100%` caused
  `overflow-x-hidden` to clip the page. See the note in `src/styles/global.css`.
- **nuqs**: no official Astro adapter exists, but the generic `react` adapter works inside a
  single island (see [nuqs#771](https://github.com/47ng/nuqs/pull/771) — the multi-island caveat
  doesn't apply). The Plan F Check **result filters** use `useQueryStates` wrapped in
  `<NuqsAdapter>`, so filtered results are shareable/bookmarkable and survive the back button.
  The answer string itself stays a URL path segment (not a query param).
- **CMS config is split per entity** (rsv-landingpages convention): each collection has a
  co-located pair in `src/cms/` — `<name>.keystatic.ts` (`keystatic<Name>Config` + `basePath`)
  and `<name>.astro.ts` (`astro<Name>Definition`, importing the shared `basePath`). The root
  `keystatic.config.tsx` and `src/content.config.ts` are pure composition. Shared field builders
  live in `sharedFields.keystatic.ts` / `sharedFields.astro.ts`; the glob loader in `cms/utils`.
- **`trailingSlash: 'ignore'`, not `'always'`.** `'always'` force-404s Keystatic's admin routes
  (`/keystatic/collection/*`, `/api/keystatic/*` have no trailing slash). With `'ignore'` +
  `build.format: 'directory'`, public pages are still emitted as `/page/index.html` with
  trailing-slash canonicals, and the Keystatic admin works (verified: lists/edits the content).
- **`output: 'static'`, not `'server'`.** The site is fully static; Keystatic's `/keystatic` +
  `/api/keystatic` are the only on-demand routes (served by the Netlify adapter, or the dev
  server). `output: 'static'` is required because in `'server'` mode Astro **ignores
  `getStaticPaths`**, so the wiki `[topic]`/`[measure]`/`[example]` routes render with empty
  props → `topic.data` crashes (a 500 in dev and on Netlify). Keystatic is added only when a
  server can run it (`process.argv` has `dev`, or the Netlify adapter is enabled).

## Known follow-ups (non-blocking)

- `bun run check` is green (0 type errors, 0 lint errors). The only remaining `astro check`
  output is ~100 _hints_ for Headless UI v2's deprecated namespaced API (`Combobox.Input` etc.).
  Migrating to the named exports (`ComboboxInput`, `MenuButton`, …) is a tidy-up, not a blocker.
- Prose-heavy pages (articles ~9%, wiki example detail pages ~17%) differ in the pixel diff due
  to Tailwind v4 vs v3 typography line-height; text content is identical. Tighten
  `@tailwindcss/typography` spacing if exact prose parity is required.
- Image cards (object-cover) vs the old GatsbyImage differ slightly in crop on image-heavy
  measure pages; non-structural.

## Verification

`bun run test:visual` (Playwright, local build vs live plan-f.info):

- **Static pages** (legal, articles, weitere-angebote, award, plan-f-check): text-identical,
  pixel diff < 2% (the 887-line award page at 1.9%).
- **Wiki index / topic / measure pages**: text-identical, pixel diff < 0.4%.
- **Example detail pages**: text-identical; ~17% pixel diff from the Tailwind v4 vs v3 prose
  line-height on these richtext-heavy pages (non-structural — see follow-ups).
- **Home page**: the 3 example cards are a `client:only` React island (`RandomExamples`) that
  picks 3 measures + one example each at random on every visit, mirroring the original.
- **Behavior** (smoke tests): nav, mobile menu, client-side Lunr search (German stemmer, real
  results), and the Plan F Check questionnaire all work.
