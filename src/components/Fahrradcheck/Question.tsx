import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import React, { useState } from 'react';
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
    <article className={clsx(className, 'mt-4')}>
      <h3>
        {question.id + 1}. {question.question}
      </h3>
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
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {question.options.map((option) => (
            <RadioGroup.Option
              key={option.text}
              value={option.weight}
              className={({ active, checked }) =>
                clsx(
                  active ? 'ring-2 ring-indigo-600 ring-offset-2' : '',
                  checked
                    ? 'bg-gray-200 hover:bg-gray-500'
                    : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                  'mt-4 flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1',
                )
              }
            >
              <RadioGroup.Label
                className="lowercase whitespace-nowrap"
                as="span"
              >
                {option.text}
              </RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
        {isSubmit && questionResult === null && (
          <p className="text-red-500 text-xs mt-4">
            * Das Beantworten aller Fragen ist verpflichtend, um den Fragebogen
            abschließen zu können. Bitte wählen Sie eine Antwort auf diese
            Frage!
          </p>
        )}
      </RadioGroup>
    </article>
  );
};

export default QuestionItem;
