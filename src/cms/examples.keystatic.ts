import { collection, fields } from '@keystatic/core'

import { copyrightImage, linksField, markdownText, positionField } from './sharedFields.keystatic'

// api::example.example — "Praxisbeispiel"
export const basePath = 'src/content/examples'

export const keystaticExamplesConfig = collection({
  label: 'Praxisbeispiele (Examples)',
  slugField: 'title',
  path: `${basePath}/*/`,
  columns: ['title', 'position'],
  entryLayout: 'form',
  schema: {
    title: fields.slug({
      name: { label: 'Titel', validation: { isRequired: true } },
      slug: { label: 'Slug (URL)' },
    }),
    position: positionField,
    measure: fields.relationship({
      label: 'Maßnahme',
      collection: 'measures',
      validation: { isRequired: true },
    }),
    relatedTopic: fields.relationship({
      label: 'Verwandtes Handlungsfeld',
      collection: 'topics',
    }),
    image: copyrightImage('Bild', true, 'examples'),
    shortDescription: markdownText('Kurzbeschreibung', { isRequired: true, max: 200 }),
    subcategory: fields.text({ label: 'Unterkategorie' }),
    commune: fields.text({ label: 'Kommune', validation: { isRequired: true } }),
    countryState: fields.text({ label: 'Bundesland', validation: { isRequired: true } }),
    spatialStructure: fields.text({ label: 'Raumstruktur', validation: { isRequired: true } }),
    centrality: fields.text({ label: 'Zentralität', validation: { isRequired: true } }),
    period: fields.text({ label: 'Zeitraum', validation: { isRequired: true } }),
    population: fields.integer({
      label: 'Einwohnerzahl',
      validation: { isRequired: true, min: 1 },
    }),
    costs: fields.integer({ label: 'Kosten (€)', validation: { min: 0 } }),
    financiallyWeak: fields.checkbox({ label: 'Finanzschwache Kommune', defaultValue: false }),
    beginnerFriendly: fields.checkbox({ label: 'Einsteigerfreundlich', defaultValue: false }),
    description: markdownText('Beschreibung', { isRequired: true }),
    goals: markdownText('Ziele', { isRequired: true }),
    localChallenges: markdownText('Lokale Herausforderungen', { isRequired: true }),
    particularities: markdownText('Besonderheiten', { isRequired: true }),
    results: markdownText('Ergebnisse', { isRequired: true }),
    challenges: markdownText('Herausforderungen', { isRequired: true }),
    communication: markdownText('Kommunikation', { isRequired: true }),
    funding: markdownText('Förderung', { isRequired: true }),
    personnelExpenses: markdownText('Personalaufwand', { isRequired: true }),
    authorities: markdownText('Zuständigkeiten', { isRequired: true }),
    stakeholders: markdownText('Beteiligte'),
    relatedOffice: markdownText('Zuständiges Amt'),
    sources: markdownText('Quellen', { isRequired: true }),
    notes: markdownText('Anmerkungen'),
    links: linksField('Links'),
    awards: fields.array(
      fields.object({
        name: fields.text({ label: 'Auszeichnung' }),
        description: markdownText('Beschreibung'),
        logo: fields.image({
          label: 'Logo',
          directory: 'src/content/examples/{slug}',
          publicPath: './',
        }),
        logoCopyright: fields.text({ label: 'Logo Copyright' }),
      }),
      { label: 'Auszeichnungen', itemLabel: (props) => props.fields.name.value || 'Award' },
    ),
  },
})
