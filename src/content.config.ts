// Composition only — each collection's Astro definition lives next to its Keystatic config
// in `src/cms/<name>.astro.ts` / `<name>.keystatic.ts` (single source of truth per entity).
import { astroCommunityEntriesDefinition } from '~/cms/communityEntries.astro'
import { astroExamplesDefinition } from '~/cms/examples.astro'
import { astroMeasuresDefinition } from '~/cms/measures.astro'
import { astroTopicsDefinition } from '~/cms/topics.astro'

export const collections = {
  topics: astroTopicsDefinition,
  measures: astroMeasuresDefinition,
  examples: astroExamplesDefinition,
  communityEntries: astroCommunityEntriesDefinition,
}
