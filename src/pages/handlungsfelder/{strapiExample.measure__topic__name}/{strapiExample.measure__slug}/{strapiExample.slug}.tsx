import { PageProps, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Breadcrumbs, HelmetSeo, Hero } from '~/components/Layout';
import { ImageWithCopyright } from '~/components/Layout/ImageWithCopyright';
import { Section } from '~/components/Layout/Section';
import { CardText } from '~/components/PageExample/CardText';
import { SectionWithPagination } from '~/components/PageExample/SectionWithPagination';
import { LinkButtonWithArrow } from '~/components/PageTopic/LinkButtonWithArrow';
import { H2, H3, P } from '~/components/Text';
import { Prose } from '~/components/core/Prose';
import { truncateString } from '~/components/utils/truncateString';

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
  console.log(example);
  return (
    <>
      <HelmetSeo title={example.measure.name} />
      <Hero className="" title="Praxisbeispiele">
        <Breadcrumbs
          names={[
            'Wissensspeicher',
            example.measure.topic.name,
            example.measure.name,
          ]}
          prefix="../"
        />
      </Hero>

      <Section className="bg-lime-300">
        <SectionWithPagination
          className="bg-white"
          pagination={{ pos, prevSlug, nextSlug }}
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
                <P>{example[key]}</P>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <H2>Maßnahmenbeschreibung</H2>
            <Prose>{example.description.data.description}</Prose>
          </div>

          <div className="mt-12">
            <H2>Auswertung Praxisbeispiel</H2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <CardText title="Ziele" list={['todo', 'todo']} />
              <CardText
                title="Dauer: Planung und Umsetzung"
                list={['todo', 'todo']}
              />
              <CardText title="Ergebnisse" list={['todo', 'todo']} />
              <CardText
                title="Kosten / Mittelherkunft"
                list={['todo', 'todo']}
              />
            </div>
          </div>

          <div className="mt-12">
            <H2>Links</H2>
            {example.links.map(({ display, url }) => (
              <LinkButtonWithArrow href={url} key={url}>
                {display || truncateString(url, 25)}
              </LinkButtonWithArrow>
            ))}
          </div>

          <div className="mt-12">
            <H2>Auszeichnung</H2>
            {example.awards.map((award) => (
              <div className="flex">
                {award.award.logo && (
                  <ImageWithCopyright
                    className="mt-8"
                    copyright={award.award.logo.copyright}
                  >
                    <GatsbyImage
                      className="h-12 flex-shrink-0"
                      image={getImage(award.award.logo.image.localFile as any)}
                      alt="Titelbild"
                    />
                  </ImageWithCopyright>
                )}
                <div className="flex flex-col justify-evenly">
                  <H3>{award.award.name}</H3>
                  <Prose className="line-clamp-4">
                    {award.description.data.description}
                  </Prose>
                </div>
              </div>
            ))}
          </div>
        </SectionWithPagination>
      </Section>
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
      localChallenges
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
