import { collection, fields } from '@keystatic/core'

import { linksField, markdownText, positionField } from './sharedFields.keystatic'

// api::measure.measure — "Maßnahme"
export const basePath = 'src/content/measures'

export const keystaticMeasuresConfig = collection({
  label: 'Maßnahmen (Measures)',
  slugField: 'name',
  path: `${basePath}/*/`,
  columns: ['name', 'position'],
  entryLayout: 'form',
  schema: {
    name: fields.slug({
      name: { label: 'Name', validation: { isRequired: true } },
      slug: { label: 'Slug (URL)' },
    }),
    position: positionField,
    topic: fields.relationship({
      label: 'Handlungsfeld',
      collection: 'topics',
      validation: { isRequired: true },
    }),
    shortDescription: markdownText('Kurzbeschreibung', { max: 250 }),
    description: markdownText('Beschreibung', { isRequired: true }),
    additionalResources: linksField('Weiterführende Informationen'),
    guidelines: linksField('Leitfäden'),
    fundings: linksField('Förderungen'),
  },
})
