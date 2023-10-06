import { ShareIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { HeadFC, PageProps, graphql, navigate } from 'gatsby';
import { useEffect, useState } from 'react';
import { Content, Hero, MetaTags } from '~/components/Layout';
import { menuItemsWithChildren } from '~/components/Layout/Navigation/menuItems';
import { Section } from '~/components/Layout/Section';
import { CardExample } from '~/components/MeasurePage/CardExample';
import { CardWrapperMeasurePage } from '~/components/MeasurePage/CardWrapperMeasurePage';
import { allQuestions, calculateScore } from '~/components/PlanFCheck';
import { CardTopicPlanFCheck } from '~/components/PlanFCheck/CardTopicPlanFCheckPage';
import { FilterItem } from '~/components/PlanFCheck/FilterItem';
import { SmileyScore } from '~/components/PlanFCheck/ResultSmiley';
import { filterCategories } from '~/components/PlanFCheck/filterCategories.const';
import { topicTexts } from '~/components/PlanFCheck/topicTexts.const';
import { H2, H3, P } from '~/components/Text';
import { LinkButtonWithArrow } from '~/components/TopicPage/LinkButtonWithArrow';
import { blackButtonStyles } from '~/components/core/links';
import { domain, wikiPath } from '~/components/utils';

const title = 'Plan F Check - Ergebnisse';

// Sort topics, measures and examples by corresponding scores
const sortByScores = (
  topics: Queries.TopicMeasureExamplesQuery['topics'],
  topicScores,
  measureScores,
  measureTypeScores,
) => {
  // we need to copy the elements, due to parameters beeing imutable
  const topicsSorted: (Queries.TopicMeasureExamplesQuery['topics']['nodes'][number] & {
    examples?: Queries.TopicMeasureExamplesQuery['topics']['nodes'][number]['measures'][number]['examples'];
  })[] = Array.from(topics.nodes).sort(
    (a, b) => topicScores[a.name] - topicScores[b.name],
  );
  topicsSorted.map((topic) => {
    const topicMutable = Object.assign(topic);
    topicMutable.measures = Array.from(topicMutable.measures);
    topicMutable.measures.sort(
      (a, b) => measureScores[a.name] - measureScores[b.name],
    );
    topicMutable.examples = [];
    topicMutable.measures.forEach((measure) => {
      topicMutable.examples = [...topicMutable.examples, ...measure.examples];
    });
    topicMutable.examples.sort((a, b) => {
      const scoreA =
        measureTypeScores[a.subcategory] || measureScores[a.measure.name];
      const scoreB =
        measureTypeScores[b.subcategory] || measureScores[b.measure.name];
      return scoreA - scoreB;
    });
    return topicMutable;
  });
  return topicsSorted;
};

const PlanFCheckResultPage: React.FC<
  PageProps<Queries.TopicMeasureExamplesQuery>
> = ({ params, data: { topics } }) => {
  const { result } = params;

  if (result === undefined || result.length !== allQuestions.length) {
    useEffect(() => {
      navigate('/404', { replace: true });
    });
    return <div />;
  }

  const [filter, setFilter] = useState({
    financiallyWeak: 'all',
    beginnerFriendly: 'all',
    population: 'all',
    spatialStructure: 'all',
    countryState: 'all',
  });

  const filterExamples = (examples) => {
    let filteredExamples = examples;
    Object.keys(filter).forEach((filterKey) => {
      if (filter[filterKey] === 'all') return filteredExamples;
      if (filterKey === 'population') {
        filteredExamples = filteredExamples.filter((example) => {
          const min = Number(filter.population.split('-')[0]);
          const max = Number(filter.population.split('-')[1]);
          return (
            min < Number(example.population) &&
            Number(example.population) <= max
          );
        });
      } else {
        filteredExamples = filteredExamples.filter((example) =>
          filter[filterKey]
            .toLowerCase()
            .split(',')
            .includes(String(example[filterKey]).toLowerCase().trim()),
        );
      }
      return filteredExamples;
    });
    return filteredExamples;
  };

  const answers: number[] = result.split('').map((x) => parseInt(x, 10));
  const { totalScore, topicScores, measureScores, measureTypeScores } =
    calculateScore(answers, allQuestions);
  const topicsSorted = sortByScores(
    topics,
    topicScores,
    measureScores,
    measureTypeScores,
  );
  const handleCopyButtonClick = async () => {
    const currentDomain = domain();
    await navigator.clipboard.writeText(
      `${currentDomain}/plan-f-check/${result}`,
    );
  };

  // const handlePrintButtonClick = () => {
  //   window.print();
  //   // Print for Safari browser
  //   document.execCommand('print', false, null);
  // };
  return (
    <>
      <Hero bgColor="bg-green-500" title="Plan F Check" />
      {/* TODO remove result from hero */}
      <Section>
        <Content>
          <h1 className="font-mono pt-4 md:pt-10 text-3xl md:text-4xl mb-5 md:mb-10">
            Ergebnis des Plan F Checks für Ihre Kommune
          </h1>
          <div className="flex flex-col gap-6">
            <p>
              Herzlichen Glückwunsch! Sie haben den Plan F Check erfolgreich
              durchgeführt.
            </p>
            {/* <p>
              Die Gesamtbewertung zeigt, in welchen Handlungsfeldern Ihre
              Kommune bereits fortgeschritten ist und wo noch
              Verbesserungsbedarf besteht.
            </p> */}
            <div className="flex justify-start items-center gap-6">
              <p className="text-5xl">🏆</p>
              <p className="text-xl font-bold">{`Insgesamt erreichen Sie ${Math.round(
                totalScore * 100,
              )}% der möglichen Punkte.`}</p>
            </div>
          </div>
        </Content>
      </Section>
      <Section className="bg-purple-100 max-w-full rounded-b-none">
        <h1 className="font-mono pt-8 md:pt-10 text-3xl md:text-4xl mb-5 md:mb-10 break-words max-w-full">
          Ausgewählte Praxisbeispiele sortiert nach Handlungsfeldern
        </h1>
        <P>
          Auf Grundlage Ihrer Antworten wurden Empfehlungen für folgende
          Handlungsfelder und Praxisbeispiele berechnet. Je geringer die
          Prozentzahl, desto weniger aktiv sind Sie bisher in dem jeweiligen
          Handlungsfeld. Um den Radverkehr gezielt zu fördern, empfehlen wir
          Ihnen, Maßnahmen insbesondere in den Handlungsfeldern mit niedriger
          Prozentzahl zu ergreifen.
        </P>
        {/* Filter Results section */}
        <div className="bg-white p-6 flex flex-col gap-4">
          <p className="text-lg font-bold text-black md:text-xl">
            Optional: Filtern Sie die ausgewählten Praxisbeispiele weiter nach
            Kommunenmerkmalen
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 justify-between">
            {Object.keys(filterCategories).map((category) => (
              <FilterItem
                categoryName={category}
                category={filterCategories[category]}
                filter={filter}
                setFilter={setFilter}
              />
            ))}
          </div>
        </div>
        <div className="flex divide-y divide-black flex-col">
          {topicsSorted.map((topic) => {
            return (
              <div className="pt-8 md:pt-16 pb-9 md:pb-20" key={topic.name}>
                <H2 className="!mt-0 md:!mt-0">{`Handlungsfeld: ${topic.name} `}</H2>

                <CardTopicPlanFCheck
                  linkExternal
                  className="mb-4 md:mb-6"
                  title={topic.name}
                  key={topic.slug}
                  link={`/${wikiPath}/${topic.slug}`}
                  image={topic.image && topic.image.url}
                >
                  {topicTexts[topic.name] && (
                    <p className="text-sm text-gray-700 md:text-base max-w-2xl">
                      {topicTexts[topic.name]}
                    </p>
                  )}
                </CardTopicPlanFCheck>
                <div className="flex gap-4 items-center my-4 md:my-6 md:mb-10">
                  <SmileyScore score={topicScores[topic.name]} />
                  <p className="text-lg font-bold text-black md:text-xl">
                    {`Hier erreichen Sie ${
                      topicScores[topic.name]
                    }% der möglichen
                Punkte.`}
                  </p>
                </div>
                <p className="text-lgå text-black md:text-xl mb-5">
                  Praxisbeispiele, die in diesem Handlungsfeld auf Grund Ihrer
                  Eingaben besonders relevant sind:
                </p>
                {filterExamples(topic.examples).length === 0 && (
                  <P>keine Ergebnisse</P>
                )}
                <CardWrapperMeasurePage>
                  {filterExamples(topic.examples)
                    // .slice(0, 6)
                    .map((example) => {
                      return (
                        <CardExample
                          measure={example.measure.name}
                          linkExternal
                          title={example.title}
                          key={example.slug}
                          link={`/${wikiPath}/${topic.slug}/${example.measure.slug}/${example.slug}`}
                          image={example.image}
                        >
                          <div>
                            {/* testing */}
                            {/* <code>
                              <br />
                              beginnerFriendly:
                              {JSON.stringify(example.beginnerFriendly)}
                              <br />
                              financiallyWeak:
                              {JSON.stringify(example.financiallyWeak)}
                              <br />
                              spatialStructure:
                              {JSON.stringify(example.spatialStructure)}
                              <br />
                              population:
                              {JSON.stringify(example.population)}
                              <br />
                              Bundesland:
                              {JSON.stringify(example.countryState)}
                              <br />
                              <br />
                            </code> */}
                            <p className="text-sm text-gray-700 md:text-base">
                              {example.shortDescription}
                            </p>
                          </div>
                        </CardExample>
                      );
                    })}
                </CardWrapperMeasurePage>
              </div>
            );
          })}
        </div>
      </Section>
      <Section>
        <Content>
          <h1 className="font-mono pt-4 md:pt-10 text-3xl md:text-4xl mb-5 md:mb-10">
            Vielen Dank für Ihre Teilnahme am Plan F Check
          </h1>
          <P>
            Wir hoffen, dass Ihnen diese Handlungsempfehlungen und
            Praxisbeispiele dabei helfen, die Radverkehrsförderung in Ihrer
            Kommune auszubauen und Ihre Kommune fahrradfreundlicher zu
            gestalten. Sie haben die Möglichkeit, Ihr Ergebnis zu drucken oder
            als Link zu teilen.
          </P>
          <div className="flex flex-col items-start sm:flex-row gap-8 mt-8 md:mt-10">
            {/* <button
              onClick={handlePrintButtonClick}
              type="button"
              className={clsx('flex gap-2 items-center', blackButtonStyles)}
            >
              <PrinterIcon className="w-5" />
              Seite drucken
            </button> */}
            <button
              onClick={handleCopyButtonClick}
              type="button"
              className={clsx('flex gap-2 items-center', blackButtonStyles)}
            >
              <ShareIcon className="w-4" />
              Link mit Ergebnissen kopieren
            </button>
          </div>
          <div className="flex flex-col gap-2 md:gap-4 mt-8 md:mt-16">
            <H3 className="">
              Weitere hilfreiche Artikel für den Ausbau einer
              fahrradfreundlichen Kommune
            </H3>
            {Object.entries(menuItemsWithChildren.Artikel).map(([k, v]) => (
              <LinkButtonWithArrow key={k} truncate href={`/artikel/${v}`}>
                {k}
              </LinkButtonWithArrow>
            ))}
          </div>
        </Content>
      </Section>
    </>
  );
};

export default PlanFCheckResultPage;

export const Head: HeadFC = () => <MetaTags noindex title={title} />;

export const query = graphql`
  query TopicMeasureExamples {
    topics: allStrapiTopic {
      nodes {
        name
        shortDescription
        slug
        image {
          url
        }
        measures {
          name
          slug
          shortDescription
          examples {
            title
            shortDescription
            subcategory
            slug
            financiallyWeak
            beginnerFriendly
            population
            spatialStructure
            countryState
            measure {
              name
              slug
            }
            image {
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              copyright
            }
          }
        }
      }
    }
  }
`;
