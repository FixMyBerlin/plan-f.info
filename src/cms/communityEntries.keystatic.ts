import { collection, fields } from '@keystatic/core'

import { copyrightImage, linksField, markdownText } from './sharedFields.keystatic'

// api::community-entry.community-entry — "Community Beitrag"
export const basePath = 'src/content/community-entries'

export const keystaticCommunityEntriesConfig = collection({
  label: 'Community Beiträge',
  slugField: 'title',
  path: `${basePath}/*/`,
  columns: ['title', 'commune'],
  entryLayout: 'form',
  schema: {
    title: fields.slug({
      name: { label: 'Titel', validation: { isRequired: true } },
      slug: { label: 'Slug (URL)' },
    }),
    measure: fields.relationship({
      label: 'Maßnahme',
      collection: 'measures',
      validation: { isRequired: true },
    }),
    description: markdownText('Beschreibung', { max: 300 }),
    image: copyrightImage('Bild', false, 'community-entries'),
    website: linksField('Website'),
    subcategory: fields.text({ label: 'Unterkategorie' }),
    author: fields.text({ label: 'Autor:in' }),
    contact: fields.text({ label: 'Kontakt' }),
    commune: fields.text({ label: 'Kommune', validation: { isRequired: true } }),
    countryState: fields.text({ label: 'Bundesland', validation: { isRequired: true } }),
  },
})
