import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Question } from './questions.const';

type Props = {
  question: Question;
  setSurveyResult: any;
  surveyResult: any;
};

const QuestionItem: React.FC<Props> = ({
  question,
  setSurveyResult,
  surveyResult,
}) => {
  const [questionResult, setQuestionResult] = useState(null);

  return (
    <>
      <h3>
        {question.id + 1}. {question.question}
      </h3>
      <RadioGroup
        value={questionResult}
        onChange={(x) => {
          setQuestionResult(x);
          setSurveyResult({ ...surveyResult, [question.id]: x });
          console.log({ surveyResult });
        }}
        className="mt-2"
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
                  'flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1',
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
      </RadioGroup>
    </>
  );
};

export default QuestionItem;
