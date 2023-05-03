import React from 'react';
import { Fundings } from '~/components/StartPage';
import { Hero, Content, HelmetSeo, Breadcrumbs } from '~/components/Layout';
import { graphql, PageProps, Link } from 'gatsby';

export const query = graphql`
  query TopicTeasers {
    topics: allStrapiTopic {
      nodes {
        slug
        name
        description {
          data {
            description
          }
        }
      }
    }
  }
`;

const IndexPage: React.FC<PageProps<Queries.TopicTeasersQuery>> = ({
  data: { topics },
}) => {
  const title = 'Handlungsfelder';
  return (
    <>
      <HelmetSeo title={title} />
      <Hero title={title}>
        <Breadcrumbs names={[title]} />
      </Hero>
      <section className="pt-1">
        <h1>Liste der Handlungsfelder</h1>
        <Content>
          {topics.nodes.map((topic) => (
            <Link to={topic.slug}>
              <div className="pt-6">
                <h1>{topic.name}</h1>
                {topic.description.data.description}
              </div>
            </Link>
          ))}
        </Content>
      </section>
      <div className="object-left pb-6 pt-28">
        <Fundings />
      </div>
    </>
  );
};

export default IndexPage;
