import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Content } from '../Layout';
import { Section } from '../Layout/Section';
import { H3 } from '../Text';
import { Question } from './questions.const';
import { InfoPopover } from '../ExamplePage/InfoPopover';

type Props = {
  question: Question;
  setSurveyResult: any;
  surveyResult: any;
  className?: string;
  isSubmit: boolean;
};

export const QuestionItem: React.FC<Props> = ({
  question,
  setSurveyResult,
  surveyResult,
  className,
  isSubmit,
}) => {
  const [questionResult, setQuestionResult] = useState(null);

  return (
    <Section
      className={clsx(
        className,
        'py-10 md:py-16',
        'mt-4 group hover:bg-white hover:shadow-xl rounded-b-none',
      )}
    >
      <Content>
        <div className="flex justify-between items-start mb-4 gap-4">
          <H3 className="!mt-0 !md:mt-0">
            {question.id + 1}. {question.question}
          </H3>
          {question.explanation && (
            <InfoPopover label={<p>{question.explanation}</p>} />
          )}
        </div>
        <RadioGroup
          value={questionResult}
          onChange={(x) => {
            setQuestionResult(x);
            const newSurveResult = [...surveyResult];
            newSurveResult[question.id] = x;
            setSurveyResult(newSurveResult);
            console.log({ newSurveResult });
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:grid-cols-5">
            {question.options.map((option, i) => (
              <RadioGroup.Option
                key={option.text}
                value={i}
                className={({ active, checked }) =>
                  clsx(
                    active ? 'ring-2 ring-purple-300 ring-offset-2' : '',
                    checked
                      ? 'bg-purple-200 hover:bg-purple-300'
                      : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-100',
                    'flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1 hover:cursor-pointer',
                  )
                }
              >
                <RadioGroup.Label
                  className="lowercase whitespace-nowrap text-xs md:text-sm"
                  as="span"
                >
                  {option.text}
                </RadioGroup.Label>
              </RadioGroup.Option>
            ))}
          </div>
          {isSubmit && questionResult === null && (
            <p className="text-red-500 text-xs mt-4 pt-3">
              * Das Beantworten aller Fragen ist verpflichtend, um den
              Fragebogen abschließen zu können. Bitte wählen Sie eine Antwort
              auf diese Frage!
            </p>
          )}
        </RadioGroup>
      </Content>
    </Section>
  );
};
