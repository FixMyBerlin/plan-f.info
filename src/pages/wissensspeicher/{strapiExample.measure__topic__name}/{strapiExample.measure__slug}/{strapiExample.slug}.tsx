import { PageProps, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { CommunityEntriesSection } from '~/components/CommunityEntriesSection';
import { Breadcrumbs, HelmetSeo, Hero } from '~/components/Layout';
import { ImageWithCopyright } from '~/components/Layout/ImageWithCopyright';
import { LinkListBlackButton } from '~/components/Layout/LinkListBlackButton';
import { Section } from '~/components/Layout/Section';
import { CardText } from '~/components/PageExample/CardText';
import { Pagination } from '~/components/PageExample/Pagination';
import { H2, H3 } from '~/components/Text';
import { Prose } from '~/components/core/Prose';
import { sortByPosition, wikiColors } from '~/components/utils';

const steckbiref = {
  subcategory: 'Maßnahmentyp',
  title: 'Name des Projektes',
  countryState: 'Bundesland',
  population: 'Einwohner*innen',
  spatialStructure: 'Besiedelung',
  centrality: 'Lage',
  commune: 'Kommune',
};
const adjacentSlugs = (
  examples: Queries.ExampleDetailsQuery['example']['measure']['examples'],
  current: string
) => {
  const sortedExamples = sortByPosition(examples);
  const slugList = sortedExamples.map(({ slug }) => slug);
  const pos = slugList.indexOf(current);
  const prevSlug = slugList[pos - 1] || slugList[slugList.length - 1];
  const nextSlug = slugList[pos + 1] || slugList[0];
  return { prevSlug, nextSlug, pos };
};

const ExampleDetails: React.FC<PageProps<Queries.ExampleDetailsQuery>> = ({
  data: { example },
}) => {
  const { prevSlug, nextSlug, pos } = adjacentSlugs(
    example.measure.examples,
    example.slug
  );
  const { communityEntries } = example.measure;

  return (
    <>
      <HelmetSeo title={example.measure.name} />
      <Hero
        className="!mb-0 rounded-b-none"
        bgColor={wikiColors.example}
        breadcrumbs={
          <Breadcrumbs
            names={[
              'Wissensspeicher',
              example.measure.topic.name,
              example.measure.name,
              example.title,
            ]}
          />
        }
      />

      <Section className="mb-12 rounded-b-none bg-lime-300 pt-0 md:pt-0">
        <Pagination
          pos={pos}
          prevSlug={prevSlug}
          nextSlug={nextSlug}
          total={example.measure.examples.length}
          className="mb-5"
        />
        <Section className="rounded-3xl bg-white">
          <H2 className="!md:mt-0 !mt-0">{example.title}</H2>
          <Prose markdownHTML={example.shortDescription} />
          {example.image && (
            <ImageWithCopyright
              className="mt-8"
              copyright={example.image.copyright}
            >
              <GatsbyImage
                className=""
                image={getImage(example.image.image.localFile as any)}
                alt="Titelbild"
              />
            </ImageWithCopyright>
          )}
          <div className="mt-8 rounded-br-3xl rounded-tl-3xl bg-lime-200 p-5 py-6 md:p-10">
            <H2>{example.commune}</H2>
            <table className="table-auto">
              <tbody className="flex flex-col gap-2">
                {Object.keys(steckbiref).map((key) => (
                  <tr
                    className="grid grid-cols-1 text-gray-700 md:grid-cols-2 lg:grid-cols-3"
                    key={key}
                  >
                    <td className="whitespace-nowrap font-bold uppercase text-gray-700">
                      {steckbiref[key]}
                    </td>
                    <td>
                      <Prose
                        className="prose-p:mt-0 lg:col-span-2"
                        markdownHTML={example[key]}
                      />
                    </td>
                  </tr>
                ))}
                <tr className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <td className="whitespace-nowrap font-bold uppercase text-gray-700">
                    Zuständige Abteilung
                  </td>
                  <td>
                    <Prose
                      className="prose-p:mt-0 lg:col-span-2"
                      markdownHTML={
                        example.relatedOffice.data.childMarkdownRemark.html
                      }
                    />
                  </td>
                </tr>
                <tr className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <td className="whitespace-nowrap font-bold uppercase text-gray-700">
                    Lokale Herausforderungen
                  </td>
                  <td>
                    <Prose
                      className="prose-p:mt-0 lg:col-span-2"
                      markdownHTML={
                        example.localChallenges.data.childMarkdownRemark.html
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12">
            <H2>Maßnahmenbeschreibung</H2>
            <Prose
              markdownHTML={example.description.data.childMarkdownRemark.html}
            />
          </div>
          <div className="mt-12">
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <CardText
                title="Ziele"
                markdownHTML={example.goals.data.childMarkdownRemark.html}
              />
              <CardText
                title="Ergebnisse"
                markdownHTML={example.results.data.childMarkdownRemark.html}
              />
              <CardText
                title="Dauer: Planung und Umsetzung"
                markdownHTML={example.period}
              />
              <CardText
                title="Kosten / Mittelherkunft"
                markdownHTML={example.funding.data.childMarkdownRemark.html}
              >
                <p>{example.costs} €</p>
              </CardText>
              <CardText
                title="Personeller Aufwand"
                markdownHTML={
                  example.personnelExpenses.data.childMarkdownRemark.html
                }
              />
              <CardText
                title="Beteiligte Ämter (intern)"
                markdownHTML={example.authorities.data.childMarkdownRemark.html}
              />
              {example.stakeholders && (
                <CardText
                  title="Beteiligte Akteur*innen (extern)"
                  markdownHTML={
                    example.stakeholders.data.childMarkdownRemark.html
                  }
                />
              )}
              <CardText
                title="Kommunikation der Maßnahme"
                markdownHTML={
                  example.communication.data.childMarkdownRemark.html
                }
              />
              <CardText
                title="Herausforderungen"
                markdownHTML={example.challenges.data.childMarkdownRemark.html}
              />
            </div>
          </div>
          <LinkListBlackButton
            className="mt-12"
            links={example.links}
            titleMono
            title="Links"
          />
          <div className="mt-12">
            <H2>Auszeichnungen</H2>
            {example.awards.map((award) => (
              <div
                className="mt-8 flex gap-2 md:gap-6"
                key={award.description.data.id}
              >
                {award.award?.logo && (
                  <ImageWithCopyright copyright={award.award.logo.copyright}>
                    <GatsbyImage
                      className="h-20 w-20 flex-shrink-0 md:h-36 md:w-36"
                      image={
                        award.award?.logo?.image &&
                        getImage(award.award?.logo.image.localFile as any)
                      }
                      alt="Titelbild"
                    />
                  </ImageWithCopyright>
                )}
                <div className="flex flex-col justify-start">
                  {award.award?.name && <H3>{award.award.name}</H3>}
                  <Prose
                    className="line-clamp-4"
                    markdownHTML={
                      award.description.data.childMarkdownRemark.html
                    }
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <H2>Besonderheiten</H2>
            <Prose
              markdownHTML={
                example.particularities.data.childMarkdownRemark.html
              }
            />
          </div>
          <div className="mt-12">
            <H2>Anmerkungen</H2>
            <Prose markdownHTML={example.notes.data.childMarkdownRemark.html} />
          </div>
          {example.sources && (
            <div className="mt-12 flex items-start">
              <Prose className="mr-1" markdownHTML="<p>Quelle: </p>" />
              <Prose
                markdownHTML={example.sources.data.childMarkdownRemark.html}
              />
            </div>
          )}
        </Section>
        <Pagination
          pos={pos}
          prevSlug={prevSlug}
          nextSlug={nextSlug}
          total={example.measure.examples.length}
          className="mt-5"
        />
      </Section>

      {communityEntries && (
        <CommunityEntriesSection communityEntries={communityEntries} />
      )}
    </>
  );
};

export default ExampleDetails;

export const query = graphql`
  query ExampleDetails($id: String!) {
    example: strapiExample(id: { eq: $id }) {
      title
      description {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      shortDescription
      period
      stakeholders {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      links {
        url
        display
      }
      relatedOffice {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      countryState
      commune
      spatialStructure
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
            childMarkdownRemark {
              html
            }
            id
          }
        }
      }
      centrality
      subcategory
      population
      costs
      localChallenges {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      communication {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      funding {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      personnelExpenses {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      challenges {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      authorities {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      goals {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      results {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      sources {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      particularities {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      notes {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      goals {
        data {
          goals
        }
      }
      results {
        data {
          results
        }
      }
      sources {
        data {
          sources
        }
      }
      particularities {
        data {
          particularities
        }
      }
      notes {
        data {
          notes
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
      measure {
        name
        topic {
          name
        }
        examples {
          slug
          position
        }
        communityEntries {
          title
          author
          contact
          subcategory
          countryState
          commune
          description {
            data {
              childMarkdownRemark {
                html
              }
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
          website {
            url
            display
          }
        }
      }
      relatedTopic {
        name
      }
      slug
    }
  }
`;
