import { HeadFC, PageProps, graphql, navigate } from 'gatsby';
import { useEffect } from 'react';
import { allQuestions, calculateScore } from '~/components/Fahrradcheck';
import { Content, MetaTags, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { CardExample } from '~/components/MeasurePage/CardExample';
import { CardWrapperMeasurePage } from '~/components/MeasurePage/CardWrapperMeasurePage';
import { H1, H2 } from '~/components/Text';
import { CardTopic } from '~/components/WissensspeicherStartPage/CardTopic';
import { articleProseClasses } from '~/components/core/articleProseClasses';
import { wikiPath } from '~/components/utils';

const title = 'Fahrradcheck';

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
  return (
    <>
      <Hero bgColor="bg-green-500" title={result} />
      <Section className={articleProseClasses}>
        <Content>
          <h2>Plan-f Fahrradcheck</h2>
          <p>{`Gesamtbewertung: ${totalScore}`}</p>
          {topicsSorted.map((topic, index) => {
            return (
              <div key={topic.name}>
                <H2>{`${index + 1}. Handlungsfeld: ${
                  topic.name
                } (hier erreichen Sie nur: ${topicScores[topic.name]}%)`}</H2>
                Folgende Maßnahmen gehören zu diesem Handlungsfeld:
                {topic.measures
                  .map((measure) => {
                    return `${measure.name} (${measureScores[measure.name]}%)`;
                  })
                  .join(', ')}
                <CardTopic
                  title={topic.name}
                  key={topic.slug}
                  link={`/${wikiPath}/${topic.slug}`}
                  image={topic.image && topic.image.url}
                >
                  {topic.shortDescription && (
                    <p className="text-sm text-gray-700 md:text-base">
                      {topic.shortDescription}
                    </p>
                  )}
                </CardTopic>
                <p>
                  Praxisbeispiele die in diesem Handlungsfeld auf Grund den
                  Angaben zu ihrer Kommune besonders relevant sind:
                </p>
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
        </Content>
        <Content>
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
