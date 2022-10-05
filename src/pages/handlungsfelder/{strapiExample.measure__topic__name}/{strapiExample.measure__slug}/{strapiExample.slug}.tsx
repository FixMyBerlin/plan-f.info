import React from 'react';
import { Fundings } from '~/components/StartPage';
import { Hero, Content, HelmetSeo, Breadcrumbs } from '~/components/Layout';
import { graphql, PageProps } from 'gatsby';
import { Link } from '~/components/Link';

const ExampleDetails: React.FC<PageProps<Queries.ExampleDetailsQuery>> = ({
  data: { example, exampleList },
}) => {
  const slugList = exampleList.nodes.map(({ slug }) => slug);
  const pos = slugList.indexOf(example.slug);
  const prevSlug = slugList[pos - 1] || slugList[slugList.length - 1];
  const nextSlug = slugList[pos + 1] || slugList[0];

  return (
    <>
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
      <section>
        <Content>
          <div className="bg-dark-green py-10 px-10">
            Praxisbesipiel
            <Link to={`../${prevSlug}`}> Prev</Link>
            {pos + 1}
            <Link to={`../${nextSlug}`}> Next</Link>
            <div className="bg-white">
              <h1>{example.name}</h1>
              {JSON.stringify(example)}
            </div>
          </div>
        </Content>
      </section>
      <div className="object-left pt-28 pb-6">
        <Fundings />
      </div>
    </>
  );
};

export default ExampleDetails;

export const query = graphql`
  query ExampleDetails($id: String!) {
    example: strapiExample(id: { eq: $id }) {
      countryState
      name
      slug
      period
      population
      shortDescription
      spatialStructure
      state
      targetGroup
      funding
      localChallanges
      accessibility {
        description
        percent
      }
      effectiveness {
        percent
        description
      }
      effort {
        percent
        description
      }
      evaluation {
        description
        percent
      }
      execution {
        percent
        description
      }
      participation {
        description
        percent
      }
      synergies {
        percent
        description
      }
      portability {
        percent
        description
      }
      links {
        url
        display
      }
      stakeholders {
        data {
          stakeholders
        }
      }
      award {
        data {
          award
        }
      }
      description {
        data {
          description
        }
      }
      relatedOffice {
        data {
          relatedOffice
        }
      }
      measure {
        name
        topic {
          name
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
