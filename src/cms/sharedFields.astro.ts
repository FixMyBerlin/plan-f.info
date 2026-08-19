import { z } from 'astro:content'

// Zod counterparts of the shared Keystatic field builders (`sharedFields.keystatic.ts`).

export const linksSchema = z.array(
  z.object({
    display: z.string().optional().default(''),
    url: z.string(),
  }),
)

export const copyrightImageSchema = z.object({
  image: z.string(),
  copyright: z.string(),
})
