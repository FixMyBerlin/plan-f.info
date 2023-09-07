/* eslint-disable react/jsx-fragments */
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { HeadFC, PageProps, navigate } from 'gatsby';
import { useState } from 'react';
import { allQuestions, questionBlocks } from '~/components/Fahrradcheck';
import QuestionItem from '~/components/Fahrradcheck/Question';
import { Content, Hero, MetaTags } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { H1, H2, P } from '~/components/Text';
import { blackButtonStyles } from '~/components/core/links';

const title = 'Plan F Check - Fragebogen';

const initialState = [...Array(allQuestions.length)].map(() => null);

const FahrradcheckPage: React.FC<PageProps> = () => {
  const [surveyResult, setSurveyResult] = useState(initialState);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = () => {
    setIsSubmit(true);
    const surveyResultSlug = surveyResult.join('');
    if (surveyResult.every((value) => value !== null))
      navigate(`/plan-f-check/${surveyResultSlug}`);
  };

  return (
    <>
      <Hero bgColor="bg-green-500" title="Plan F Check" />
      <div className="bg-gray-300 -mt-10">
        <Section>
          <Content>
            <H1 className="font-mono pt-8 md:pt-16 break-words text-3xl md:text-4xl mb-5 md:mb-10">
              Fragen zum Status-Quo der Radverkehrsförderung in Ihrer Kommune
            </H1>
            <P>
              Die folgenden Fragen des Plan F Checks sind eine Selbstevaluation
              der Fahrradfreundlichkeit in Ihrer Kommune. Anhand Ihrer Aussagen
              wird bewertet, in welchen Handlungsfeldern der
              Radverkehrsförderung Ihre Kommune schon weit fortgeschritten ist
              und wo es noch Verbesserungsbedarf gibt.
              <br />
              <br />* Das Beantworten aller Fragen ist verpflichtend!
            </P>
          </Content>
        </Section>
        <div>
          {questionBlocks.map((block) => (
            <div key={block.title}>
              <div className="p-8 py-0 md:p-12 md:py-12">
                <H2 className="mx-auto max-w-3xl">{block.title}</H2>
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
              className={clsx(
                'flex items-center gap-2 mt-8 md:mt-20',
                blackButtonStyles,
              )}
              type="button"
              onClick={handleSubmit}
            >
              <ArrowRightIcon className="h-5 w-5 " />
              Plan F Check abschließen & auswerten
            </button>
            {isSubmit && !surveyResult.every((value) => value !== null) && (
              <p className="text-red-500 text-xs mt-4">
                * Das Beantworten aller Fragen ist verpflichtend, um den
                Fragebogen abschließen zu können. Bitte wählen Sie bei allen
                Fragen eine Antwort.
              </p>
            )}
          </Content>
        </Section>
      </div>
    </>
  );
};

export default FahrradcheckPage;

export const Head: HeadFC = () => <MetaTags noindex title={title} />;
