/* eslint-disable react/jsx-fragments */
import { HeadFC, PageProps, navigate } from 'gatsby';
import { Fragment, useState } from 'react';
import { allQuestions, questionBlocks } from '~/components/Fahrradcheck';
import QuestionItem from '~/components/Fahrradcheck/Question';
import { Content, Hero, MetaTags } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';

const title = 'Fahrradcheck-Fragebogen';

const initialState = [...Array(allQuestions.length)].map(() => null);

const FahrradcheckPage: React.FC<PageProps> = () => {
  const [surveyResult, setSurveyResult] = useState(initialState);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = () => {
    setIsSubmit(true);
    const surveyResultSlug = surveyResult.join('');
    if (surveyResult.every((value) => value !== null))
      navigate(`/fahrradcheck/${surveyResultSlug}`);
  };

  return (
    <>
      <Hero bgColor="bg-green-500" title={title} />
      <Section>
        <Content>
          <h2>Fragen zur Fahrradfreundlichkeit</h2>

          {questionBlocks.map((block) => (
            <div className="mt-8" key={block.title}>
              <h2>{block.title}</h2>
              {block.questions.map((question) => (
                <QuestionItem
                  className="mt-4"
                  key={question.id}
                  isSubmit={isSubmit}
                  question={question}
                  setSurveyResult={setSurveyResult}
                  surveyResult={surveyResult}
                />
              ))}
            </div>
          ))}
          <button type="button" onClick={handleSubmit}>
            Plan F Check abschließen & auswerten
          </button>
          {isSubmit && !surveyResult.every((value) => value !== null) && (
            <p className="text-red-500 text-xs mt-4">
              * Das Beantworten aller Fragen ist verpflichtend, um den
              Fragebogen abschließen zu können. Bitte wählen Sie eine Antwort
              auf diese Frage!
            </p>
          )}
        </Content>
      </Section>
    </>
  );
};

export default FahrradcheckPage;

export const Head: HeadFC = () => <MetaTags noindex title={title} />;
