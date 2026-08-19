import { Radio, RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import React, { useState } from 'react'

import { InfoPopover } from '../ExamplePage/InfoPopover'
import { Content } from '../Layout'
import { Section } from '../Layout/Section'
import { H3 } from '../Text'
import type { Question } from './questions.const'

type Props = {
  question: Question
  setSurveyResult: any
  surveyResult: any
  className?: string
  isSubmit: boolean
}

export const QuestionItem: React.FC<Props> = ({
  question,
  setSurveyResult,
  surveyResult,
  className,
  isSubmit,
}) => {
  const [questionResult, setQuestionResult] = useState(null)

  return (
    <Section
      className={clsx(
        className,
        'py-10 md:py-16',
        'mt-4 group hover:bg-white hover:shadow-xl rounded-b-none',
      )}
    >
      <Content>
        <div className="mb-4 flex items-start justify-between gap-4">
          <H3 className="!md:mt-0 !mt-0">
            {question.id + 1}. {question.question}
          </H3>
          {question.explanation && <InfoPopover label={<p>{question.explanation}</p>} />}
        </div>
        <RadioGroup
          value={questionResult}
          onChange={(x) => {
            setQuestionResult(x)
            const newSurveResult = [...surveyResult]
            newSurveResult[question.id] = x
            setSurveyResult(newSurveResult)
            console.log({ newSurveResult })
          }}
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {question.options.map((option, i) => (
              <Radio
                key={option.text}
                value={i}
                className={clsx(
                  'flex items-center justify-center rounded-md px-4 py-3 text-sm font-semibold sm:flex-1 hover:cursor-pointer',
                  'data-checked:bg-purple-200 data-checked:hover:bg-purple-300',
                  'data-focus:ring-2 data-focus:ring-purple-300 data-focus:ring-offset-2',
                  'not-data-checked:bg-white not-data-checked:text-gray-900 not-data-checked:ring-1 not-data-checked:ring-gray-300 not-data-checked:ring-inset not-data-checked:hover:bg-gray-100',
                )}
              >
                <span className="text-xs whitespace-nowrap md:text-sm">{option.text}</span>
              </Radio>
            ))}
          </div>
          {isSubmit && questionResult === null && (
            <p className="mt-4 pt-3 text-xs text-red-500">
              * Das Beantworten aller Fragen ist verpflichtend, um den Fragebogen abschließen zu
              können. Bitte wählen Sie eine Antwort auf diese Frage!
            </p>
          )}
        </RadioGroup>
      </Content>
    </Section>
  )
}
