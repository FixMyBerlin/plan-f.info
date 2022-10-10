import React from 'react';
import { Fundings } from '~/components/StartPage';
import { Hero, Content, HelmetSeo, Breadcrumbs } from '~/components/Layout';
import { graphql, PageProps } from 'gatsby';
import { Link } from '~/components/Link';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ExampleDetails: React.FC<PageProps<Queries.ExampleDetailsQuery>> = ({
  data: { example },
}) => {
  const slugList = example.measure.examples.map(({ slug }) => slug);
  const pos = slugList.indexOf(example.slug);
  const prevSlug = slugList[pos - 1] || slugList[slugList.length - 1];
  const nextSlug = slugList[pos + 1] || slugList[0];
  const steckbiref = {
    name: 'Name des Projektes',
    commune: 'Kommune',
    population: 'Einwohner*innen',
    countryState: 'Bundesland',
    spatialStructure: 'Raumstruktur',
    localChallenges: 'Lokale Herausforderungen',
  };
  return (
    <>
      <HelmetSeo title={example.measure.name} />
      <Hero title="Handlungsfelder">
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
              <h1 className="text-center">{example.name}</h1>
              <div>{example.shortDescription}</div>
              {example.image && (
                <GatsbyImage
                  image={getImage(example.image.localFile as any)}
                  alt="Titelbild"
                />
              )}
              <h1 className="mt-8">Steckbrief:</h1>
              <div>
                <table className="min-w-full divide-y divide-gray-300">
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {Object.keys(steckbiref).map((key) => (
                      <tr key={key}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {steckbiref[key]}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500">
                          {example[key]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h1 className="mt-8">Beschreibung:</h1>
              <div>{example.description.data.description}</div>
              {example.evaluation && (
                <>
                  <h1 className="mt-8">Einordnung:</h1>
                  <table className="min-w-full divide-y divide-gray-300">
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {Object.keys(example.evaluation).map((key) => (
                        <tr key={key}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {`${example.evaluation[key].percent} % `}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500">
                            {example.evaluation[key].description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
              <h1 className="mt-8">Links:</h1>
              <div>
                {example.links.map(({ display, url }) => (
                  <div key={url}>
                    <a href={url}>{display || url}</a>
                  </div>
                ))}
              </div>
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
        examples {
          slug
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
  }
`;
