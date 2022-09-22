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

const MeasureDetails: React.FC<PageProps<Queries.MeasureDetailsQuery>> = ({
  path,
  data: { measure },
}) => {
  return (
    <Layout>
      <HelmetSeo title={measure.name} />
      <Hero title={measure.name}>
        <Breadcrumbs
          names={['Handlungsfelder', measure.topic.name, measure.name]}
        />
      </Hero>
      <Navigation path={path} />
      <section className="pt-1">
        <Content>
          {measure.examples.map((example) => (
            <Link to={example.slug}>
              <div className="pt-6">
                <h1>{example.name}</h1>
                {example.description.data.description}
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

export default MeasureDetails;

export const query = graphql`
  query MeasureDetails($id: String!) {
    measure: strapiMeasure(id: { eq: $id }) {
      name
      description {
        data {
          description
        }
      }
      topic {
        name
      }
      examples {
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
