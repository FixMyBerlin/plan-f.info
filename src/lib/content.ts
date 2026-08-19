import { getCollection } from 'astro:content'

import type { SideNavTopic } from '~/components/Layout/Navigation/SideNavigation'

// Shared content-collection helpers for the wissensspeicher (wiki) routes.
// Relationships are stored as the related entry's slug (= its collection `id`).

export async function getSortedTopics() {
  return (await getCollection('topics')).sort((a, b) => a.data.position - b.data.position)
}

export async function getSortedMeasures() {
  return (await getCollection('measures')).sort((a, b) => a.data.position - b.data.position)
}

export async function getSortedExamples() {
  return (await getCollection('examples')).sort((a, b) => a.data.position - b.data.position)
}

/** Measures belonging to a topic (by topic slug), sorted by position. */
export async function measuresForTopic(topicSlug: string) {
  return (await getSortedMeasures()).filter((m) => m.data.topic === topicSlug)
}

/** Examples belonging to a measure (by measure slug), sorted by position. */
export async function examplesForMeasure(measureSlug: string) {
  return (await getSortedExamples()).filter((e) => e.data.measure === measureSlug)
}

/** Topic → measures tree for the wiki side navigation. */
export async function getSideNavTree(): Promise<SideNavTopic[]> {
  const [topics, measures] = await Promise.all([getSortedTopics(), getSortedMeasures()])
  return topics.map((t) => ({
    name: t.data.name,
    slug: t.id,
    measures: measures
      .filter((m) => m.data.topic === t.id)
      .map((m) => ({ name: m.data.name, slug: m.id })),
  }))
}
