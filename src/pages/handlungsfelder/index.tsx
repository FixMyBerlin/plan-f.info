import React from 'react';
import { Fundings } from '~/components/StartPage';
import {
  Layout,
  Hero,
  Content,
  HelmetSeo,
  Navigation,
  Breadcrumbs,
} from '~/components/Layout';
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
  path,
  data: { topics },
}) => {
  const title = 'Handlungsfelder';
  return (
    <Layout>
      <HelmetSeo title={title} />
      <Hero title={title}>
        <Breadcrumbs names={[title]} />
      </Hero>
      <Navigation path={path} />
      <section className="pt-1">
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
      <div className="object-left pt-28 pb-6">
        <Fundings />
      </div>
    </Layout>
  );
};

export default IndexPage;
