import { z } from 'astro/zod'
import type { SchemaContext } from 'astro:content'

// Zod counterparts of the shared Keystatic field builders (`sharedFields.keystatic.ts`).

export const linksSchema = z.array(
  z.object({
    display: z.string().optional().default(''),
    url: z.string(),
  }),
)

export const copyrightImageSchema = (image: SchemaContext['image']) =>
  z.object({
    image: image(),
    copyright: z.string(),
  })
