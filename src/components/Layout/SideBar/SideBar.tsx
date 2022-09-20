import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

export const SideBar: React.FC = () => {
  const data: Queries.TopicMeasureTreeQuery = useStaticQuery(graphql`
    query TopicMeasureTree {
      nestedMeasures: allStrapiTopic {
        nodes {
          name
          slug
          measures {
            name
            slug
          }
        }
      }
    }
  `);
  return <></>;
};
