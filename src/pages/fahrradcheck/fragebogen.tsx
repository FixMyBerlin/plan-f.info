/* eslint-disable react/jsx-fragments */
import { HeadFC } from 'gatsby';
import { Fragment } from 'react';
import { questionBlocks } from '~/components/Fahrradcheck';
import { Content, Hero, MetaTags } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { articleProseClasses } from '~/components/core/articleProseClasses';

const title = 'Fahrradcheck-Fragebogen';

const FahrradcheckPage = () => {
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
                <Fragment key={question.question}>
                  <h3>{question.question}</h3>
                  <ul>
                    {question.options.map((option) => (
                      <li key={option.text}>
                        <span>{option.weight}</span> -{' '}
                        <span>{option.text}</span>
                      </li>
                    ))}
                  </ul>
                </Fragment>
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
