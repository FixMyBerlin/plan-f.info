import { HeadFC, PageProps, graphql, navigate } from 'gatsby';
import { useEffect } from 'react';
import { allQuestions, calculateScore } from '~/components/Fahrradcheck';
import { Content, MetaTags, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { articleProseClasses } from '~/components/core/articleProseClasses';

const title = 'Fahrradcheck';

const FahrradcheckPage: React.FC<
  PageProps<Queries.TopicMeasureExamplesQuery>
> = ({ params, data: { topics } }) => {
  const { result } = params;
  if (result.length !== allQuestions.length) {
    useEffect(() => {
      navigate('/404', { replace: true });
    });
  }
  const answers: number[] = result.split('').map((x) => parseInt(x, 10));
  const { totalScore, topicScores, measureScores, measureTypeScores } =
    calculateScore(answers, allQuestions);
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
        <Content>
          {JSON.stringify(
            Array.from(topics.nodes).sort(
              (a, b) => topicScores[a.name] - topicScores[b.name],
            ),
          )}
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
        measures {
          name
          slug
          shortDescription
          examples {
            title
            shortDescription
          }
        }
      }
    }
  }
`;
