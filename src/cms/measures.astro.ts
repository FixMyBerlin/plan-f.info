import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

import { basePath } from './measures.keystatic'
import { linksSchema } from './sharedFields.astro'
import { yamlFolderLoader } from './utils/loader'

export const astroMeasuresDefinition = defineCollection({
  loader: yamlFolderLoader(basePath),
  schema: z.object({
    name: z.string(),
    position: z.number(),
    topic: z.string(),
    shortDescription: z.string().optional().default(''),
    description: z.string(),
    additionalResources: linksSchema.optional().default([]),
    guidelines: linksSchema.optional().default([]),
    fundings: linksSchema.optional().default([]),
  }),
})
