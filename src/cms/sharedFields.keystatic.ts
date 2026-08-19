import { fields } from '@keystatic/core'

// Reusable Keystatic field builders shared across the collections. Their Astro/Zod
// counterparts live in `sharedFields.astro.ts`.

/** Strapi `links.links` component → array of { display?, url }. */
export const linksField = (label: string) =>
  fields.array(
    fields.object({
      display: fields.text({ label: 'Anzeigetext' }),
      url: fields.url({ label: 'URL', validation: { isRequired: true } }),
    }),
    {
      label,
      itemLabel: (props) => props.fields.display.value || props.fields.url.value || '',
    },
  )

/**
 * Strapi `image.copyright-image` component → image + required copyright string.
 * Images are co-located with each entry's `index.yaml` so Astro's `image()` helper can resolve them.
 */
export const copyrightImage = (label: string, isRequired: boolean, collectionDir: string) =>
  fields.object(
    {
      image: fields.image({
        label: 'Bild',
        directory: `src/content/${collectionDir}/{slug}`,
        publicPath: './',
        validation: { isRequired },
      }),
      copyright: fields.text({ label: 'Copyright', validation: { isRequired } }),
    },
    { label },
  )

/** Strapi `richtext` field → multiline Markdown text (keeps storage flat + rendering faithful). */
export const markdownText = (label: string, opts: { isRequired?: boolean; max?: number } = {}) =>
  fields.text({
    label,
    multiline: true,
    validation: { length: { min: opts.isRequired ? 1 : 0, max: opts.max } },
  })

/** Strapi `position` integer used for ordering. */
export const positionField = fields.integer({
  label: 'Position (Sortierung)',
  validation: { isRequired: true, min: 1 },
})
