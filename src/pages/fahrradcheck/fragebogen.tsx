/* eslint-disable react/jsx-fragments */
import { HeadFC } from 'gatsby';
import { Fragment, useState } from 'react';
import { allQuestions, questionBlocks } from '~/components/Fahrradcheck';
import QuestionItem from '~/components/Fahrradcheck/Question';
import { Content, Hero, MetaTags } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { articleProseClasses } from '~/components/core/articleProseClasses';

const title = 'Fahrradcheck-Fragebogen';

const initialState = {};
allQuestions.forEach((q, i) => {
  initialState[i] = null;
});

const FahrradcheckPage = () => {
  const [surveyResult, setSurveyResult] = useState(initialState);

  return (
    <>
      <Hero bgColor="bg-green-500" title={title} />
      <Section className={articleProseClasses}>
        <Content>
          <h2>Fragen zur Fahrradfreundlichkeit</h2>

          {questionBlocks.map((block) => (
            <Fragment key={block.title}>
              <h2>{block.title}</h2>
              {block.questions.map((question) => (
                <QuestionItem
                  key={question.id}
                  question={question}
                  setSurveyResult={setSurveyResult}
                  surveyResult={surveyResult}
                />
              ))}
            </Fragment>
          ))}
        </Content>
      </Section>
    </>
  );
};

export default FahrradcheckPage;

export const Head: HeadFC = () => <MetaTags noindex title={title} />;
