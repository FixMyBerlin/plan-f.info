import { RadioGroup } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { useState } from 'react';
import { InfoPopover } from '../ExamplePage/InfoPopover';
import { Content } from '../Layout';
import { Section } from '../Layout/Section';
import { Caption, H3 } from '../Text';
import { Question } from './questions.const';

type Props = {
  question: Question;
  setSurveyResult: any;
  surveyResult: any;
  className: string;
  isSubmit: boolean;
};

const QuestionItem: React.FC<Props> = ({
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
        'mt-4 pt-10 pb-20 md:pb-20 group hover:bg-white hover:shadow-xl rounded-b-none',
      )}
    >
      <Content>
        <div className="flex justify-between items-center">
          <H3>
            {question.id + 1}. {question.question}
          </H3>
          {question.explanation && (
            <InfoPopover
              button={
                <InformationCircleIcon className="h-4 w-4 text-gray-700" />
              }
            >
              <Caption className="text-white">{question.explanation}</Caption>
            </InfoPopover>
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
                    active ? 'ring-2 ring-purple-600 ring-offset-2' : '',
                    checked
                      ? 'bg-purple-200 hover:bg-purple-500'
                      : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                    'mt-4 flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1',
                  )
                }
              >
                <RadioGroup.Label className="lowercase" as="span">
                  {option.text}
                </RadioGroup.Label>
              </RadioGroup.Option>
            ))}
          </div>
          {isSubmit && questionResult === null && (
            <p className="text-red-500 text-xs mt-4">
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

export default QuestionItem;
