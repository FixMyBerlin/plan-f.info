import { HeadFC, PageProps, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { CommunityEntriesSection } from '~/components/CommunityEntries/CommunityEntriesSection';
import { InfoPopover } from '~/components/ExamplePage/InfoPopover';
import { Pagination } from '~/components/ExamplePage/Pagination';
import { Breadcrumbs, Hero, MetaTags } from '~/components/Layout';
import { CardText } from '~/components/Layout/CardText';
import { ImageWithCopyright } from '~/components/Layout/ImageWithCopyright';
import { LinkListBlackButton } from '~/components/Layout/LinkListBlackButton';
import { Section } from '~/components/Layout/Section';
import { H2, H3 } from '~/components/Text';
import { Prose } from '~/components/core/Prose';
import { Link } from '~/components/core/links';
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
  current: string,
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
    example.slug,
  );
  const { communityEntries } = example.measure;
  // eslint-disable-next-line no-param-reassign
  example = {
    ...example,
    population: Number(example.population).toLocaleString(),
    costs: Number(example.costs).toLocaleString(),
  };

  return (
    <>
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
        <section className="rounded-3xl bg-white px-4 py-8 md:p-12 md:py-12">
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
                {Object.keys(steckbiref).map((key) => {
                  if (!example[key]) return null;
                  return (
                    <tr
                      className="grid grid-cols-1 gap-3 text-gray-700 md:grid-cols-2 lg:grid-cols-3"
                      key={key}
                    >
                      <td>
                        {key === 'centrality' || key === 'spatialStructure' ? (
                          <div className="flex gap-1">
                            <p className="relative whitespace-nowrap font-bold uppercase text-gray-700">
                              {steckbiref[key]}
                            </p>
                            <InfoPopover
                              label={
                                <p>
                                  Für die Einteilung der Raumtypen Besiedlung
                                  und Lage nutzen wir die Daten des BBSR
                                  „Raumtypen 2010“ der Laufenden Raumbeobachtung
                                  – Raumabgrenzungen. Für die Definition sind
                                  die zwei räumlichen Strukturmerkmale, Dichte
                                  und Lage ausschlaggebend. Weitere
                                  Informationen zu den Daten finden Sie unter
                                  BBSR – Raumbeobachtung – Laufende
                                  Raumbeobachtung – Raumabgrenzungen (
                                  <Link href="https://www.bbsr.bund.de/BBSR/DE/forschung/raumbeobachtung/Raumabgrenzungen/deutschland/gemeinden/Raumtypen2010_vbg/Raumtypen2010_LageSied.html;jsessionid=8D851F8ECAFACA91FD6F226E7E7EC3CF.live11312">
                                    BBSR
                                  </Link>
                                  ).
                                </p>
                              }
                            />
                          </div>
                        ) : (
                          <p className="whitespace-nowrap font-bold uppercase text-gray-700">
                            {steckbiref[key]}
                          </p>
                        )}
                      </td>
                      <td className="col-span-2">
                        <Prose
                          className="prose-p:mt-0"
                          markdownHTML={example[key]}
                        />
                      </td>
                    </tr>
                  );
                })}
                <tr className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                  <td className="prose whitespace-nowrap font-bold uppercase text-gray-700">
                    <p>Zuständige Abteilung</p>
                  </td>
                  <td className="col-span-2">
                    <Prose
                      className="prose-p:!mt-0"
                      markdownHTML={
                        example.relatedOffice.data.childMarkdownRemark.html
                      }
                    />
                  </td>
                </tr>
                <tr className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                  <td className="font-bold uppercase text-gray-700">
                    Lokale Herausforderungen
                  </td>
                  <td className="col-span-2">
                    <Prose
                      className="prose-p:!mt-0"
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
                {example.costs && <p>{example.costs} Euro</p>}
              </CardText>
              <CardText
                title="Personeller Aufwand"
                markdownHTML={
                  example.personnelExpenses.data.childMarkdownRemark.html
                }
              />
              <CardText
                title="Beteiligte Ämter"
                markdownHTML={example.authorities.data.childMarkdownRemark.html}
              />
              {example.stakeholders && (
                <CardText
                  title="Beteiligte Akteur*innen"
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
              {example.particularities.data.particularities && (
                <CardText
                  title="Besonderheiten"
                  markdownHTML={
                    example.particularities.data.childMarkdownRemark.html
                  }
                />
              )}
            </div>
          </div>
          <LinkListBlackButton
            className="mt-12"
            links={example.links}
            titleMono
            title="Links"
          />
          {!!example.awards.length && (
            <div className="mt-12">
              <H2>Auszeichnungen</H2>
              {example.awards.map((award) => (
                <div
                  className="mt-8 flex gap-3 md:gap-6"
                  key={award.description.data.id}
                >
                  {award.award?.logo && (
                    <ImageWithCopyright copyright={award.award.logo.copyright}>
                      <img
                        src={award.award.logo.image.url}
                        alt={award.award.name}
                      />
                    </ImageWithCopyright>
                  )}
                  <div className="flex flex-col justify-start">
                    {award.award?.name && (
                      <H3 className="mt-0 md:mt-0">{award.award.name}</H3>
                    )}
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
          )}

          {example.notes.data.notes && (
            <div className="mt-12">
              <H2>Anmerkungen</H2>
              <Prose
                markdownHTML={example.notes.data.childMarkdownRemark.html}
              />
            </div>
          )}
          {example.sources.data.sources && (
            <div className="mt-12 flex items-start">
              <Prose
                className="mr-1"
                markdownHTML="<p>Quelle des Praxisbeispiels: </p>"
              />
              <Prose
                markdownHTML={example.sources.data.childMarkdownRemark.html}
              />
            </div>
          )}
        </section>
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

export const Head: HeadFC<Queries.ExampleDetailsQuery> = ({
  data: { example },
}) => <MetaTags title={example.title} />;

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
              url
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
