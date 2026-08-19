import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

import { basePath } from './examples.keystatic'
import { copyrightImageSchema, linksSchema } from './sharedFields.astro'
import { yamlFolderLoader } from './utils/loader'

export const astroExamplesDefinition = defineCollection({
  loader: yamlFolderLoader(basePath),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      position: z.number(),
      measure: z.string(),
      relatedTopic: z.string().optional(),
      image: copyrightImageSchema(image),
      shortDescription: z.string(),
      subcategory: z.string().optional().default(''),
      commune: z.string(),
      countryState: z.string(),
      spatialStructure: z.string(),
      centrality: z.string(),
      period: z.string(),
      population: z.number(),
      costs: z.number().optional(),
      financiallyWeak: z.boolean().default(false),
      beginnerFriendly: z.boolean().default(false),
      description: z.string(),
      goals: z.string(),
      localChallenges: z.string(),
      particularities: z.string(),
      results: z.string(),
      challenges: z.string(),
      communication: z.string(),
      funding: z.string(),
      personnelExpenses: z.string(),
      authorities: z.string(),
      stakeholders: z.string().optional().default(''),
      relatedOffice: z.string().optional().default(''),
      sources: z.string(),
      notes: z.string().optional().default(''),
      links: linksSchema.optional().default([]),
      awards: z
        .array(
          z.object({
            name: z.string().optional().default(''),
            description: z.string().optional().default(''),
            logo: image().optional(),
            logoCopyright: z.string().optional().default(''),
          }),
        )
        .optional()
        .default([]),
    }),
})
