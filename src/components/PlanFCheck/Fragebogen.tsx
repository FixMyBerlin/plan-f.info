/* eslint-disable react/jsx-fragments */
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useState } from 'react'

import { blackButtonStyles } from '~/components/core/links'
import { Content, Hero } from '~/components/Layout'
import { Section } from '~/components/Layout/Section'
import { allQuestions, questionBlocks } from '~/components/PlanFCheck'
import { QuestionItem } from '~/components/PlanFCheck/Question'
import { P } from '~/components/Text'
import { H2 } from '~/components/Text'

const initialState = [...Array(allQuestions.length)].map(() => null)

export const Fragebogen: React.FC = () => {
  const [surveyResult, setSurveyResult] = useState(initialState)
  const [isSubmit, setIsSubmit] = useState(false)

  const handleSubmit = () => {
    setIsSubmit(true)
    const surveyResultSlug = surveyResult.join('')
    if (surveyResult.every((value) => value !== null))
      window.location.href = `/plan-f-check/${surveyResultSlug}`
  }

  return (
    <>
      <Hero bgColor="bg-green-500" title="Plan F Check" />
      <div className="-mt-10 bg-gray-300">
        <Section>
          <Content>
            <h1 className="mb-5 pt-8 font-mono text-3xl break-words md:mb-10 md:pt-16 md:text-4xl">
              Fragen zum Status-Quo der Radverkehrsförderung in Ihrer Kommune
            </h1>
            <P>
              Die folgenden Fragen des Plan F Checks sind eine Selbstevaluation der
              Fahrradfreundlichkeit in Ihrer Kommune. Anhand Ihrer Aussagen wird bewertet, in
              welchen Handlungsfeldern der Radverkehrsförderung Ihre Kommune schon weit
              fortgeschritten ist und wo es noch Verbesserungsbedarf gibt.
              <br />
              <br />* Das Beantworten aller Fragen ist verpflichtend!
            </P>
          </Content>
        </Section>
        <div>
          {questionBlocks.map((block) => (
            <div key={block.title}>
              <div className="p-8 py-0 md:p-12 md:py-10">
                <H2 className="mx-auto max-w-3xl underline decoration-purple-600 underline-offset-8 md:!mb-0">
                  {block.title}
                </H2>
              </div>

              {block.questions.map((question) => (
                <QuestionItem
                  key={question.id}
                  isSubmit={isSubmit}
                  question={question}
                  setSurveyResult={setSurveyResult}
                  surveyResult={surveyResult}
                />
              ))}
            </div>
          ))}
        </div>
        <Section>
          <Content>
            <button
              className={clsx('flex items-center gap-2 mt-8 md:mt-20', blackButtonStyles)}
              type="button"
              onClick={handleSubmit}
            >
              <ArrowRightIcon className="h-5 w-5" />
              Plan F Check abschließen & auswerten
            </button>
            {isSubmit && !surveyResult.every((value) => value !== null) && (
              <p className="mt-4 text-xs text-red-500">
                * Das Beantworten aller Fragen ist verpflichtend, um den Fragebogen abschließen zu
                können. Bitte wählen Sie bei allen Fragen eine Antwort.
              </p>
            )}
          </Content>
        </Section>
      </div>
    </>
  )
}
