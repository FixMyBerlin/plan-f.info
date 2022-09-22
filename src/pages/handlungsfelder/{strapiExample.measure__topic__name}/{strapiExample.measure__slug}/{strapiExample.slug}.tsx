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
import { graphql, PageProps } from 'gatsby';
import { Link } from '~/components/Link';

const ExampleDetails: React.FC<PageProps<Queries.ExampleDetailsQuery>> = ({
  path,
  data: { example, exampleList },
}) => {
  const slugList = exampleList.nodes.map(({ slug }) => slug);
  const pos = slugList.indexOf(example.slug);
  const prevSlug = slugList[pos - 1] || slugList[slugList.length - 1];
  const nextSlug = slugList[pos + 1] || slugList[0];

  return (
    <Layout>
      <HelmetSeo title={example.measure.name} />
      <Hero title={example.measure.name}>
        <Breadcrumbs
          names={[
            'Handlungsfelder',
            example.measure.topic.name,
            example.measure.name,
          ]}
          prefix="../"
        />
      </Hero>
      <Navigation
        path={
          path.slice(0, path.lastIndexOf('/', path.length - 2) + 1)
          // can't use `path` lib here due to hydration :(
        }
      />
      <section>
        <Content>
          <h1>{example.name}</h1>
          <Link to={`../${prevSlug}`}> Prev</Link>
          <Link to={`../${nextSlug}`}> Next</Link>
        </Content>
      </section>
      <section className="pt-1">
        <Content>{example.description.data.description}</Content>
      </section>
      <div className="object-left pt-28 pb-6">
        <Fundings />
      </div>
    </Layout>
  );
};

export default ExampleDetails;

export const query = graphql`
  query ExampleDetails($id: String!) {
    example: strapiExample(id: { eq: $id }) {
      name
      slug
      measure {
        name
        topic {
          name
        }
      }
      description {
        data {
          description
        }
      }
    }
    exampleList: allStrapiExample {
      nodes {
        slug
      }
    }
  }
`;
