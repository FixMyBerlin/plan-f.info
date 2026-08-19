import { glob } from 'astro/loaders'

/**
 * Astro content loader for a Keystatic folder collection: each entry is stored as
 * `<basePath>/<slug>/index.yaml`. Shared by every `*.astro.ts` definition so the glob
 * pattern lives in one place.
 */
export const yamlFolderLoader = (basePath: string) =>
  glob({ base: `./${basePath}`, pattern: '*/index.yaml' })
