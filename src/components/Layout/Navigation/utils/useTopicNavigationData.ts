import { graphql, useStaticQuery } from 'gatsby';
import { sortByPosition } from '~/components/utils';

// https://stackoverflow.com/a/43001581
type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

// We want the topics _and_ measures to be sorted by position.
// However, the measures cannot be sorted in GraphQL for some reason.
// The code below is not nice, but it's not worth fighting with TypeScript more…
export const useTopicNavigationData = () => {
  const {
    allStrapiTopic: { nodes },
  }: DeepWriteable<Queries.TopicMeasureTreeQuery> = useStaticQuery(graphql`
    query TopicMeasureTree {
      allStrapiTopic(sort: { position: ASC }) {
        nodes {
          position
          name
          slug
          # measures(sort: { position: ASC }) # Does not work; some typing issue.
          measures {
            position
            name
            slug
          }
        }
      }
    }
  `);

  const sortedNodes = structuredClone(nodes);
  sortedNodes.forEach((topic) => {
    const sorted = sortByPosition(topic.measures);
    // eslint-disable-next-line no-param-reassign
    topic.measures = sorted;
  });

  return sortedNodes as Queries.TopicMeasureTreeQuery['allStrapiTopic']['nodes'];
};
