import { defineCollection, z } from 'astro:content'

import { basePath } from './communityEntries.keystatic'
import { copyrightImageSchema, linksSchema } from './sharedFields.astro'
import { yamlFolderLoader } from './utils/loader'

export const astroCommunityEntriesDefinition = defineCollection({
  loader: yamlFolderLoader(basePath),
  schema: z.object({
    title: z.string(),
    measure: z.string(),
    description: z.string().optional().default(''),
    image: copyrightImageSchema.optional(),
    website: linksSchema.optional().default([]),
    subcategory: z.string().optional().default(''),
    author: z.string().optional().default(''),
    contact: z.string().optional().default(''),
    commune: z.string(),
    countryState: z.string(),
  }),
})
