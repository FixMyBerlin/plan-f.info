import { collection, fields } from '@keystatic/core'

import { copyrightImage, linksField, markdownText, positionField } from './sharedFields.keystatic'

// api::topic.topic — "Handlungsfeld"
export const basePath = 'src/content/topics'

export const keystaticTopicsConfig = collection({
  label: 'Handlungsfelder (Topics)',
  slugField: 'name',
  path: `${basePath}/*/`,
  columns: ['name', 'position'],
  entryLayout: 'form',
  schema: {
    name: fields.slug({
      name: { label: 'Name', validation: { isRequired: true } },
      slug: { label: 'Slug (URL)', description: 'Nach dem ersten Speichern nicht mehr ändern.' },
    }),
    position: positionField,
    shortDescription: markdownText('Kurzbeschreibung', { max: 250 }),
    description: markdownText('Beschreibung', { isRequired: true }),
    image: copyrightImage('Bild', true, 'topics'),
    additionalResources: linksField('Weiterführende Informationen'),
    guidelines: linksField('Leitfäden'),
    fundings: linksField('Förderungen'),
  },
})
