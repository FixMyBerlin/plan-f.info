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
import { graphql, Link, PageProps } from 'gatsby';

const TopicDetails: React.FC<PageProps<Queries.TopicDetailsQuery>> = ({
  path,
  data: { topic },
}) => {
  return (
    <Layout>
      <HelmetSeo title={topic.name} />
      <Hero title={topic.name}>
        <Breadcrumbs names={['Handlungsfelder', topic.name]} />
      </Hero>
      <Navigation path={path} />
      <section className="pt-1">
        <Content>
          {topic.measures.map((measure) => (
            <Link to={measure.slug}>
              <div className="pt-6">
                <h1>{measure.name}</h1>
                {measure.description.data.description}
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

export default TopicDetails;

export const query = graphql`
  query TopicDetails($id: String!) {
    topic: strapiTopic(id: { eq: $id }) {
      name
      description {
        data {
          description
        }
      }
      measures {
        name
        slug
        description {
          data {
            description
          }
        }
      }
    }
  }
`;
