import { PageProps, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { CommunityEntriesSection } from '~/components/CommunityEntriesSection';
import { Breadcrumbs, HelmetSeo, Hero } from '~/components/Layout';
import { ImageWithCopyright } from '~/components/Layout/ImageWithCopyright';
import { LinkListBlackButton } from '~/components/Layout/LinkListBlackButton';
import { Section } from '~/components/Layout/Section';
import { CardText } from '~/components/PageExample/CardText';
import { SectionWithPagination } from '~/components/PageExample/SectionWithPagination';
import { H2, H3, P } from '~/components/Text';
import { Prose } from '~/components/core/Prose';

const ExampleDetails: React.FC<
  PageProps<Queries.ExampleDetailsAndCommunityEntriesQuery>
> = ({ data: { example, communityEntries } }) => {
  const slugList = example.measure.examples.map(({ slug }) => slug);
  const pos = slugList.indexOf(example.slug);
  const prevSlug = slugList[pos - 1] || slugList[slugList.length - 1];
  const nextSlug = slugList[pos + 1] || slugList[0];
  const steckbiref = {
    subcategory: 'Maßnahmentyp',
    name: 'Name des Projektes',
    countryState: 'Bundesland',
    population: 'Einwohner*innen',
    spatialStructure: 'Besiedelung',
    centrality: 'Lage',
    'relatedOffice.data.relatedOffice': 'Zuständige Abteilung',
    localChallenges: 'Lokale Herausforderungen (nicht in wireframes)',
    commune: 'Kommune (nicht in wireframes)',
  };

  return (
    <>
      <HelmetSeo title={example.measure.name} />
      <Hero className="!mb-0 rounded-b-none bg-lime-300" title={example.title}>
        <Breadcrumbs
          names={[
            'Wissensspeicher',
            example.measure.topic.name,
            example.measure.name,
          ]}
          prefix="../"
        />
      </Hero>

      <Section className="mb-12 bg-lime-300 pt-12">
        <SectionWithPagination
          className="bg-white"
          pagination={{
            pos,
            prevSlug,
            nextSlug,
            total: example.measure.examples.length,
          }}
        >
          <H2>{example.title}</H2>
          <Prose>{example.shortDescription}</Prose>
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
          <div className="mt-8 rounded-br-3xl rounded-tl-3xl bg-lime-200 p-4 py-6">
            <H2 className="">{example.commune}</H2>

            {Object.keys(steckbiref).map((key) => (
              <div
                className="grid grid-cols-1 text-sm md:grid-cols-2 md:flex-row"
                key={key}
              >
                <P className="whitespace-nowrap font-bold uppercase">
                  {steckbiref[key]}
                </P>
                <Prose>{example[key]}</Prose>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <H2>Maßnahmenbeschreibung</H2>
            <Prose>{example.description.data.description}</Prose>
          </div>

          <div className="mt-12">
            <H2>Auswertung Praxisbeispiel</H2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <CardText title="Ziele">{example.goals.data.goals}</CardText>
              <CardText title="Ergebnisse">
                {example.results.data.results}
              </CardText>
              <CardText title="Dauer: Planung und Umsetzung">
                {example.period}
              </CardText>
              <CardText title="Kosten / Mittelherkunft">
                {example.goals.data.goals}
              </CardText>
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
              <div className="flex gap-2 md:gap-6">
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
                  <H3>{award.award.name}</H3>
                  <Prose className="line-clamp-4">
                    {award.description.data.description}
                  </Prose>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <H2>Besonderheiten (nicht in wireframes)</H2>
            <Prose>{example.particularities.data.particularities}</Prose>
          </div>
          <div className="mt-12">
            <H2>Anmerkungen</H2>
            <Prose>{example.notes.data.notes}</Prose>
          </div>

          <Prose className="mt-12">
            Quelle: {example.sources.data.sources}
          </Prose>
        </SectionWithPagination>
      </Section>

      {communityEntries && (
        <CommunityEntriesSection communityEntries={communityEntries} />
      )}
    </>
  );
};

export default ExampleDetails;

export const query = graphql`
  query ExampleDetailsAndCommunityEntries($id: String!) {
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
      communication {
        data {
          communication
        }
      }
      period
      funding {
        data {
          funding
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
      relatedTopic {
        name
      }
      slug
    }
    communityEntries: allStrapiCommunityEntry {
      nodes {
        description {
          data {
            description
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
        title
        website {
          url
          display
        }
      }
    }
  }
`;
