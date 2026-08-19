import { defineCollection, z } from 'astro:content'

import { copyrightImageSchema, linksSchema } from './sharedFields.astro'
import { basePath } from './topics.keystatic'
import { yamlFolderLoader } from './utils/loader'

export const astroTopicsDefinition = defineCollection({
  loader: yamlFolderLoader(basePath),
  schema: z.object({
    name: z.string(),
    position: z.number(),
    shortDescription: z.string().optional().default(''),
    description: z.string(),
    image: copyrightImageSchema,
    additionalResources: linksSchema.optional().default([]),
    guidelines: linksSchema.optional().default([]),
    fundings: linksSchema.optional().default([]),
  }),
})
