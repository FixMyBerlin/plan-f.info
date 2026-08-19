import { ShareIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { parseAsString, useQueryStates } from 'nuqs'
import { NuqsAdapter } from 'nuqs/adapters/react'
import React, { useEffect, useState } from 'react'

import { blackButtonStyles } from '~/components/core/links'
import { Content, Hero } from '~/components/Layout'
import { menuItemsWithChildren } from '~/components/Layout/Navigation/menuItems'
import { Section } from '~/components/Layout/Section'
import { CardExample } from '~/components/MeasurePage/CardExample'
import { CardWrapperMeasurePage } from '~/components/MeasurePage/CardWrapperMeasurePage'
import { allQuestions, calculateScore } from '~/components/PlanFCheck'
import { CardTopicPlanFCheck } from '~/components/PlanFCheck/CardTopicPlanFCheckPage'
import { filterCategories } from '~/components/PlanFCheck/filterCategories.const'
import { FilterItem } from '~/components/PlanFCheck/FilterItem'
import { SmileyScore } from '~/components/PlanFCheck/ResultSmiley'
import { topicTexts } from '~/components/PlanFCheck/topicTexts.const'
import { H2, H3, P } from '~/components/Text'
import { LinkButtonWithArrow } from '~/components/TopicPage/LinkButtonWithArrow'
import { domain, wikiPath } from '~/components/utils'

// Tree shape embedded by the result.astro shell (built from content collections).
export type ResultExample = {
  title: string
  shortDescription: string
  subcategory: string
  slug: string
  financiallyWeak: boolean
  beginnerFriendly: boolean
  population: number
  spatialStructure: string
  countryState: string
  measure: { name: string; slug: string }
  image: { src: string; copyright?: string }
}
export type ResultMeasure = { name: string; slug: string; examples: ResultExample[] }
export type ResultTopic = {
  name: string
  slug: string
  shortDescription: string
  image: { url: string }
  measures: ResultMeasure[]
}

type Filter = {
  financiallyWeak: string
  beginnerFriendly: string
  population: string
  spatialStructure: string
  countryState: string
}

const sortByScores = (
  topics: ResultTopic[],
  topicScores: Record<string, number>,
  measureScores: Record<string, number>,
  measureTypeScores: Record<string, number>,
) => {
  return Array.from(topics)
    .sort((a, b) => topicScores[a.name] - topicScores[b.name])
    .map((topic) => {
      const measures = Array.from(topic.measures).sort(
        (a, b) => measureScores[a.name] - measureScores[b.name],
      )
      const examples = measures
        .flatMap((m) => m.examples)
        .sort((a, b) => {
          const scoreA = measureTypeScores[a.subcategory] ?? measureScores[a.measure.name]
          const scoreB = measureTypeScores[b.subcategory] ?? measureScores[b.measure.name]
          return scoreA - scoreB
        })
      return { ...topic, measures, examples }
    })
}

// Single-island use of nuqs (no app-wide root in Astro): wrap the island in the generic
// React adapter. See https://github.com/47ng/nuqs/pull/771 — the multi-island caveat does not
// apply here because this is the only island that reads/writes the query string.
export const PlanFCheckResultPage: React.FC<{ topics: ResultTopic[] }> = ({ topics }) => (
  <NuqsAdapter>
    <PlanFCheckResult topics={topics} />
  </NuqsAdapter>
)

const filterParser = parseAsString.withDefault('all')

const PlanFCheckResult: React.FC<{ topics: ResultTopic[] }> = ({ topics }) => {
  // The answer string lives in the URL; read it after mount (this is a client island).
  const [result, setResult] = useState<string | null>(null)
  const [invalid, setInvalid] = useState(false)
  // Filters are synced to the query string (shareable/bookmarkable, back-button aware).
  const [filter, setFilter] = useQueryStates(
    {
      financiallyWeak: filterParser,
      beginnerFriendly: filterParser,
      population: filterParser,
      spatialStructure: filterParser,
      countryState: filterParser,
    },
    { history: 'push', clearOnDefault: true },
  )

  // The answer string is only available from the URL on the client (this island is also
  // prerendered server-side, where `window` is undefined), so we read it after mount.
  useEffect(() => {
    const segments = window.location.pathname.split('/').filter(Boolean)
    const r = segments[segments.length - 1] ?? ''
    // Validate length AND that every char is a valid option index for its question — otherwise
    // a crafted URL (e.g. all "4"s) would index past the options and render NaN% scores.
    const isValid =
      r.length === allQuestions.length &&
      r.split('').every((char, i) => {
        const answer = Number(char)
        return Number.isInteger(answer) && answer >= 0 && answer < allQuestions[i].options.length
      })
    if (!isValid) {
      setInvalid(true)
      window.location.replace('/404/')
      return
    }
    setResult(r)
  }, [])

  if (invalid || !result) return <div />

  const filterExamples = (examples: ResultExample[]) => {
    let filtered = examples
    ;(Object.keys(filter) as (keyof Filter)[]).forEach((key) => {
      if (filter[key] === 'all') return
      if (key === 'population') {
        const [min, max] = filter.population.split('-').map(Number)
        filtered = filtered.filter((e) => min < Number(e.population) && Number(e.population) <= max)
      } else {
        filtered = filtered.filter((e) =>
          filter[key]
            .toLowerCase()
            .split(',')
            .includes(
              String(e[key as keyof ResultExample])
                .toLowerCase()
                .trim(),
            ),
        )
      }
    })
    return filtered
  }

  const answers = result.split('').map((x) => parseInt(x, 10))
  const { totalScore, topicScores, measureScores, measureTypeScores } = calculateScore(
    answers,
    allQuestions,
  )
  const topicsSorted = sortByScores(topics, topicScores, measureScores, measureTypeScores)

  const handleCopyButtonClick = async () => {
    // Include the active filters (nuqs keeps them in the query string) so the shared link
    // restores the same filtered view.
    await navigator.clipboard.writeText(
      `${domain()}/plan-f-check/${result}${window.location.search}`,
    )
  }

  return (
    <>
      <Hero bgColor="bg-green-500" title="Plan F Check" />
      <Section>
        <Content>
          <h1 className="mb-5 pt-4 font-mono text-3xl md:mb-10 md:pt-10 md:text-4xl">
            Ergebnis des Plan F Checks für Ihre Kommune
          </h1>
          <div className="flex flex-col gap-6">
            <p>Herzlichen Glückwunsch! Sie haben den Plan F Check erfolgreich durchgeführt.</p>
            <div className="flex items-center justify-start gap-6">
              <p className="text-5xl">🏆</p>
              <p className="text-xl font-bold">
                {`Insgesamt erreichen Sie ${Math.round(totalScore * 100)}% der möglichen Punkte.`}
              </p>
            </div>
          </div>
        </Content>
      </Section>
      <Section className="max-w-full rounded-b-none bg-purple-100">
        <h1 className="mb-5 max-w-full pt-8 font-mono text-3xl break-words md:mb-10 md:pt-10 md:text-4xl">
          Ausgewählte Praxisbeispiele sortiert nach Handlungsfeldern
        </h1>
        <P>
          Auf Grundlage Ihrer Antworten wurden Empfehlungen für folgende Handlungsfelder und
          Praxisbeispiele berechnet. Je geringer die Prozentzahl, desto weniger aktiv sind Sie
          bisher in dem jeweiligen Handlungsfeld. Um den Radverkehr gezielt zu fördern, empfehlen
          wir Ihnen, Maßnahmen insbesondere in den Handlungsfeldern mit niedriger Prozentzahl zu
          ergreifen.
        </P>
        <div className="flex flex-col gap-4 bg-white p-6">
          <p className="text-lg font-bold text-black md:text-xl">
            Optionale Möglichkeit: Filtern Sie die ausgewählten Praxisbeispiele weiter nach
            Kommunenmerkmalen
          </p>
          <div className="grid grid-cols-1 justify-between gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {Object.keys(filterCategories).map((category) => (
              <FilterItem
                key={category}
                categoryName={category}
                category={filterCategories[category as keyof typeof filterCategories]}
                filter={filter}
                setFilter={setFilter}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col divide-y divide-black">
          {topicsSorted.map((topic) => (
            <div className="pt-8 pb-9 md:pt-16 md:pb-20" key={topic.name}>
              <H2 className="!mt-0 md:!mt-0">{`Handlungsfeld: ${topic.name} `}</H2>
              <CardTopicPlanFCheck
                linkExternal
                className="mb-4 md:mb-6"
                title={topic.name}
                link={`/${wikiPath}/${topic.slug}`}
                image={topic.image && topic.image.url}
              >
                {topicTexts[topic.name] && (
                  <p className="max-w-2xl text-sm text-gray-700 md:text-base">
                    {topicTexts[topic.name]}
                  </p>
                )}
              </CardTopicPlanFCheck>
              <div className="my-4 flex items-center gap-4 md:my-6 md:mb-10">
                <SmileyScore score={topicScores[topic.name]} />
                <p className="text-lg font-bold text-black md:text-xl">
                  {`Hier erreichen Sie ${topicScores[topic.name]}% der möglichen Punkte.`}
                </p>
              </div>
              <p className="mb-5 text-black md:text-xl">
                Praxisbeispiele, die in diesem Handlungsfeld auf Grund Ihrer Eingaben besonders
                relevant sind:
              </p>
              {filterExamples(topic.examples).length === 0 && <P>keine Ergebnisse</P>}
              <CardWrapperMeasurePage>
                {filterExamples(topic.examples)
                  .slice(0, 6)
                  .map((example) => (
                    <CardExample
                      measure={example.measure.name}
                      linkExternal
                      title={example.title}
                      key={example.slug}
                      link={`/${wikiPath}/${topic.slug}/${example.measure.slug}/${example.slug}`}
                      image={example.image}
                    >
                      <div>
                        <p className="text-sm text-gray-700 md:text-base">
                          {example.shortDescription}
                        </p>
                      </div>
                    </CardExample>
                  ))}
              </CardWrapperMeasurePage>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <Content>
          <h1 className="mb-5 pt-4 font-mono text-3xl md:mb-10 md:pt-10 md:text-4xl">
            Vielen Dank für Ihre Teilnahme am Plan F Check
          </h1>
          <P>
            Wir hoffen, dass Ihnen diese Handlungsempfehlungen und Praxisbeispiele dabei helfen, die
            Radverkehrsförderung in Ihrer Kommune auszubauen und Ihre Kommune fahrradfreundlicher zu
            gestalten. Sie haben die Möglichkeit, Ihr Ergebnis zu drucken oder als Link zu teilen.
          </P>
          <div className="mt-8 flex flex-col items-start gap-8 sm:flex-row md:mt-10">
            <button
              onClick={handleCopyButtonClick}
              type="button"
              className={clsx('flex items-center gap-2', blackButtonStyles)}
            >
              <ShareIcon className="w-4" />
              Link mit Ergebnissen kopieren
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-2 md:mt-16 md:gap-4">
            <H3>Weitere hilfreiche Artikel für den Ausbau einer fahrradfreundlichen Kommune</H3>
            {Object.entries(menuItemsWithChildren.Artikel).map(([k, v]) => (
              <LinkButtonWithArrow key={k} truncate href={`/artikel/${v}`}>
                {k}
              </LinkButtonWithArrow>
            ))}
          </div>
        </Content>
      </Section>
    </>
  )
}
