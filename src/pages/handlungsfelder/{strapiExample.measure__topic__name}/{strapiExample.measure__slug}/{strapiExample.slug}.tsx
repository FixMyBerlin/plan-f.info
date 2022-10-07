import React from 'react';
import { Fundings } from '~/components/StartPage';
import { Hero, Content, HelmetSeo, Breadcrumbs } from '~/components/Layout';
import { graphql, PageProps } from 'gatsby';
import { Link } from '~/components/Link';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
            <GatsbyImage
              image={getImage(example.image.localFile as any)}
              alt="Titelbild"
            />
            <div>
              {Object.keys(example.evaluation).map((key) => (
                <div key={key}>
                  {key}: {`${example.evaluation[key].percent} % `}
                  {example.evaluation[key].description}
                </div>
              ))}
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
      name
      shortDescription
      countryState
      commune
      population
      spatialStructure
      localChallanges
      state
      period
      targetGroup
      funding
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
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
      links {
        url
        display
      }
      measure {
        name
        topic {
          name
        }
      }
      evaluation {
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
      }
      slug
    }
    exampleList: allStrapiExample {
      nodes {
        slug
      }
    }
  }
`;
