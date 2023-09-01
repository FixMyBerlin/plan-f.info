import { HeadFC, PageProps, graphql, navigate } from 'gatsby';
import { useEffect } from 'react';
import { allQuestions, calculateScore } from '~/components/Fahrradcheck';
import { Content, MetaTags, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { articleProseClasses } from '~/components/core/articleProseClasses';

const title = 'Fahrradcheck';

// Sort topics, measures and examples by corresponding scores
const sortByScores = (
  topics: Queries.TopicMeasureExamplesQuery['topics'],
  topicScores,
  measureScores,
  measureTypeScores,
) => {
  // we need to copy the elements, due to parameters beeing imutable
  const topicsSorted = Array.from(topics.nodes).sort(
    (a, b) => topicScores[a.name] - topicScores[b.name],
  );
  topicsSorted.map((topic) => {
    const topicMutable = Object.assign(topic);
    topicMutable.measures = Array.from(topicMutable.measures);
    topicMutable.measures.sort(
      (a, b) => measureScores[a.name] - measureScores[b.name],
    );
    topicMutable.measures.map((measure) => {
      const measureMutable = Object.assign(measure);
      measureMutable.examples = Array.from(measureMutable.examples);
      measureMutable.examples.sort(
        (a, b) =>
          measureTypeScores[a.subcategory] - measureTypeScores[b.subcategory],
      );
      return measureMutable;
    });
    return topicMutable;
  });
  return topicsSorted;
};

const FahrradcheckPage: React.FC<
  PageProps<Queries.TopicMeasureExamplesQuery>
> = ({ params, data: { topics } }) => {
  const { result } = params;
  if (result.length !== allQuestions.length) {
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
          <p>Blabla</p>
          <p>{totalScore}</p>
          <p>{JSON.stringify(topicScores)}</p>
          <p>{JSON.stringify(measureScores)}</p>
          <p>{JSON.stringify(measureTypeScores)}</p>
        </Content>
        <Content>{JSON.stringify(topicsSorted)}</Content>
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
        measures {
          name
          slug
          shortDescription
          examples {
            title
            shortDescription
            subcategory
          }
        }
      }
    }
  }
`;
