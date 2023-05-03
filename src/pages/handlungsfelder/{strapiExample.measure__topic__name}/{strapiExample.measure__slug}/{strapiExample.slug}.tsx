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
      <Hero title="Handlungsfelder" />
      <section>
        <Content>
          <div className="ml-10 mt-6">
            <Breadcrumbs
              names={[
                'Handlungsfelder',
                example.measure.topic.name,
                example.measure.name,
              ]}
              prefix="../"
            />
          </div>
          <div className="bg-pastel-purple pl-2">
            <div className="bg-white pl-6">
              <h1 className="mt-6">{example.measure.name}</h1>
            </div>
          </div>
          <div className="bg-dark-green px-10 py-10">
            Praxisbesipiel
            <Link to={`../${prevSlug}`}> Prev</Link>
            {pos + 1}
            <Link to={`../${nextSlug}`}> Next</Link>
            <div className="bg-white">
              <h1 className="text-center">{example.title}</h1>
              <div>{example.shortDescription}</div>
              {example.image && (
                <GatsbyImage
                  image={getImage(example.image.image.localFile as any)}
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
      <div className="object-left pb-6 pt-28">
        <Fundings />
      </div>
    </>
  );
};

export default ExampleDetails;

export const query = graphql`
  query ExampleDetails($id: String!) {
    example: strapiExample(id: { eq: $id }) {
      title
      shortDescription
      countryState
      commune
      population
      spatialStructure
      localChallenges {
        data {
          localChallenges
        }
      }
      period
      funding {
        data {
          funding
        }
      }
      image {
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        copyright
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
      awards {
        award {
          logo {
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            copyright
          }
          name
        }
        description {
          data {
            description
          }
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
      slug
    }
  }
`;
