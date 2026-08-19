import { config } from '@keystatic/core'
import { KEYSTATIC_STORAGE_KIND } from 'astro:env/client'

import { keystaticCommunityEntriesConfig } from '~/cms/communityEntries.keystatic'
import { keystaticExamplesConfig } from '~/cms/examples.keystatic'
import { keystaticMeasuresConfig } from '~/cms/measures.keystatic'
import { keystaticTopicsConfig } from '~/cms/topics.keystatic'

// Composition only — each collection's schema lives next to its Astro definition in
// `src/cms/<name>.keystatic.ts` / `<name>.astro.ts`. Mirrors Strapi's content types
// (topic / measure / example / community-entry) of the old plan-f-backend.
export default config({
  storage: {
    // https://keystatic.com/docs/github-mode#setting-up-git-hub-mode
    kind: KEYSTATIC_STORAGE_KIND,
    repo: { owner: 'FixMyBerlin', name: 'plan-f.info' },
  },
  ui: {
    brand: {
      name: 'Plan F',
      mark: () => <img src="/planf_icon.png" height={27} alt="Plan F" />,
    },
    navigation: {
      Wissensspeicher: ['topics', 'measures', 'examples'],
      Community: ['communityEntries'],
    },
  },
  collections: {
    topics: keystaticTopicsConfig,
    measures: keystaticMeasuresConfig,
    examples: keystaticExamplesConfig,
    communityEntries: keystaticCommunityEntriesConfig,
  },
})
