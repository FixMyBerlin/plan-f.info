import { PrinterIcon, ShareIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { HeadFC, PageProps, graphql, navigate } from 'gatsby';
import { Fragment, useEffect } from 'react';
import { allQuestions, calculateScore } from '~/components/Fahrradcheck';
import { topicTexts } from '~/components/Fahrradcheck/topicTexts.const';
import { Content, MetaTags, Hero } from '~/components/Layout';
import { menuItemsWithChildren } from '~/components/Layout/Navigation/menuItems';
import { Section } from '~/components/Layout/Section';
import { CardExample } from '~/components/MeasurePage/CardExample';
import { CardWrapperMeasurePage } from '~/components/MeasurePage/CardWrapperMeasurePage';
import { H1, H2, H3, P } from '~/components/Text';
import { LinkButtonWithArrow } from '~/components/TopicPage/LinkButtonWithArrow';
import { CardTopic } from '~/components/WissensspeicherStartPage/CardTopic';
import { articleProseClasses } from '~/components/core/articleProseClasses';
import { Link, blackButtonStyles } from '~/components/core/links';
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

const FahrradcheckPage: React.FC<
  PageProps<Queries.TopicMeasureExamplesQuery>
> = ({ params, data: { topics } }) => {
  const { result } = params;
  if (result === undefined || result.length !== allQuestions.length) {
    useEffect(() => {
      navigate('/404', { replace: true });
    });
    return <div />;
  }
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
  const handlePrintButtonClick = () => {
    window.print();
    // Print for Safari browser
    document.execCommand('print', false, null);
  };
  return (
    <>
      <Hero bgColor="bg-green-500" title="Plan F Check" />
      {/* TODO remove result from hero */}
      <Section className={articleProseClasses}>
        <Content>
          <h1 className="font-mono pt-4 md:pt-10 text-3xl md:text-4xl mb-5 md:mb-10">
            Ergebnis des Plan F Checks für Ihre Kommune
          </h1>
          <p>
            Herzlichen Glückwunsch! Sie haben den Plan F Check erfolgreich
            durchgeführt.
          </p>
          <p>
            Die Gesamtbewertung zeigt, in welchen Handlungsfeldern Ihre Kommune
            bereits fortgeschritten ist und wo noch Verbesserungsbedarf besteht.
          </p>
          <h3>{`Insgesamt erreichen Sie ${Math.round(
            totalScore * 100,
          )}% der möglichen Punkte.`}</h3>
        </Content>
      </Section>
      <Section className="bg-purple-100 max-w-full rounded-b-none">
        <H1 className="font-mono pt-8 md:pt-16 break-words max-w-full">
          Handlungsempfehlungen für Ihre Kommune
        </H1>
        <P>
          Auf Grundlage Ihrer Antworten wurden Empfehlungen für folgende
          Handlungsfelder und Praxisbeispiele berechnet. Je geringer die
          Prozentzahl, desto weniger aktiv sind Sie bisher in diesem
          Handlungsfeld. Um den Radverkehr gezielt zu fördern, empfehlen wir
          Ihnen, Maßnahmen insbesondere in diesem Handlungsfeld zu ergreifen.
        </P>
        <div className="flex divide-y divide-black flex-col">
          {topicsSorted.map((topic, index) => {
            return (
              <div className="py-8 md:py-16" key={topic.name}>
                <H2 className="!mt-0 md:!mt-0">{`${index + 1}. Handlungsfeld: ${
                  topic.name
                } `}</H2>
                <H3 className="!mt-2 !md:mt-4">
                  {`Hier erreichen Sie ${topicScores[topic.name]}% der möglichen
                Punkte.`}
                </H3>
                <P>
                  Folgende Maßnahmen gehören zu diesem Handlungsfeld:{' '}
                  <b>
                    {topic.measures.map((measure) => {
                      return (
                        <Fragment key={measure.slug}>
                          <Link
                            href={`/${wikiPath}/${topic.slug}/${measure.slug}`}
                          >
                            {measure.name}
                          </Link>{' '}
                          {`(${measureScores[measure.name]}%)`}{' '}
                        </Fragment>
                      );
                    })}
                  </b>
                </P>
                <CardTopic
                  className="mb-8 md:mb-12"
                  title={topic.name}
                  key={topic.slug}
                  link={`/${wikiPath}/${topic.slug}`}
                  image={topic.image && topic.image.url}
                >
                  {topicTexts[topic.name] && (
                    <p className="text-sm text-gray-700 md:text-base">
                      {topicTexts[topic.name]}
                    </p>
                  )}
                </CardTopic>
                <P>
                  Praxisbeispiele die in diesem Handlungsfeld auf Grund den
                  Angaben zu ihrer Kommune besonders relevant sind:
                </P>
                <CardWrapperMeasurePage>
                  {topic.examples.slice(0, -1).map((example) => {
                    return (
                      <CardExample
                        title={`${example.title}: ${
                          measureTypeScores[example.subcategory] ||
                          measureScores[example.measure.name]
                        }`}
                        key={example.slug}
                        link={`/${wikiPath}/${topic.slug}/${example.measure.slug}/${example.slug}`}
                        image={example.image}
                      >
                        <div>
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

        {/* <Content>
          <H1>Praxisbeispiel ohne Massnahmentyp oder Bewertung:</H1>
          {topicsSorted.map((topic) => {
            return topic.examples.map((example) => {
              if (measureTypeScores[example.subcategory] === undefined) {
                return (
                  <p>{`name: ${example.title} massnahmentyp: ${example.subcategory}`}</p>
                );
              }
              return undefined;
            });
          })}
        </Content> */}
      </Section>
      <Section>
        <Content>
          <H1 className="font-mono pt-4 md:pt-10">
            Zusammenfassung der Plan F Check Eingaben für Ihre Kommune
          </H1>
          <P>
            Vielen Dank für Ihre Teilnahme am Plan F Check, hier ist eine
            Zusammenfassung Ihrer Eingaben.
          </P>
          <P>
            Wir hoffen, dass Ihnen diese Handlungsempfehlungen und
            Praxisbeispiele dabei helfen, die Radverkehrsförderung in Ihrer
            Kommune auszubauen und Ihre Kommune fahrradfreundlicher zu
            gestalten. Sie haben die Möglichkeit, Ihr Ergebnis zu drucken oder
            als Link zu teilen.
          </P>
          <div className="flex flex-col items-start sm:flex-row gap-8 mt-8 md:mt-10">
            <button
              onClick={handlePrintButtonClick}
              type="button"
              className={clsx('flex gap-2 items-center', blackButtonStyles)}
            >
              <PrinterIcon className="w-5" />
              Seite drucken
            </button>
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

export default FahrradcheckPage;

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
