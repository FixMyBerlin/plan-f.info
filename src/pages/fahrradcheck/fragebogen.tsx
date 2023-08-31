/* eslint-disable react/jsx-fragments */
import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
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
              {block.questions.map((question, i) => (
                <Fragment key={question.question}>
                  <h3>{question.question}</h3>

                  <RadioGroup
                    value={String(i)}
                    onChange={() => console.log('success')}
                    className="mt-2"
                  >
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                      {question.options.map((option) => (
                        <RadioGroup.Option
                          key={option.text}
                          value={option.weight}
                          className={({ active, checked }) =>
                            clsx(
                              active
                                ? 'ring-2 ring-indigo-600 ring-offset-2'
                                : '',
                              checked
                                ? 'bg-indigo-600 text-white hover:bg-indigo-500'
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
