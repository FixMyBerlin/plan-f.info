import { PageProps, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Breadcrumbs, HelmetSeo, Hero } from '~/components/Layout';
import { ImageWithCopyright } from '~/components/Layout/ImageWithCopyright';
import { Section } from '~/components/Layout/Section';
import { CardText } from '~/components/PageExample/CardText';
import { SectionWithPagination } from '~/components/PageExample/SectionWithPagination';
import { Fundings } from '~/components/StartPage';
import { H2, P } from '~/components/Text';
import { Prose } from '~/components/core/Prose';

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
          <h1 className="mt-8">Links:</h1>
          <div>
            {example.links.map(({ display, url }) => (
              <div key={url}>
                <a href={url}>{display || url}</a>
              </div>
            ))}
          </div>
        </SectionWithPagination>
      </Section>

      <div className="object-left pb-6 pt-28 ">
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
