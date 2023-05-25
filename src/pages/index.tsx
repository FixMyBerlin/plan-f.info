import { PageProps, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Content, HelmetSeo } from '~/components/Layout';
import { CardImageAndTextHorizontal } from '~/components/Layout/CardImageAndTextHorizontal';
import { CardImageAndTextVertical } from '~/components/Layout/CardImageAndTextVertical';
import { CardWrapperMeasurePage } from '~/components/Layout/CardWrapperMeasurePage';
import { Section } from '~/components/Layout/Section';
import { LinkButtonWithArrow } from '~/components/PageTopic/LinkButtonWithArrow';
import { wikiPath } from '~/components/utils';

import { H2, H3, P } from '~/components/Text';
import { SearchBar } from '~/components/SearchBar';

export const query = graphql`
  query TopicOverview {
    topics: allStrapiTopic(sort: { position: ASC }) {
      nodes {
        slug
        name
        image {
          url
        }
      }
    }
    measures: allStrapiMeasure {
      nodes {
        slug
        topic {
          slug
        }
        examples {
          slug
          title
          shortDescription
          image {
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage: React.FC<PageProps<Queries.TopicOverviewQuery>> = ({
  data: { topics, measures },
}) => {
  const title = 'Impulse für die fahrradfreundliche Kommune';
  const examples = [...measures.nodes]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map((measure) => {
      const example =
        measure.examples[Math.floor(Math.random() * measure.examples.length)];
      if (example) {
        return {
          ...example,
          path: [wikiPath, measure.topic.slug, measure.slug, example.slug].join(
            '/'
          ),
        };
      }
      return null;
    })
    .filter((e) => e);

  return (
    <>
      <HelmetSeo title={title} />
      <Section className="relative flex flex-col items-start justify-between gap-4 !bg-green-500 px-5 !pt-32 pb-8 md:flex-row-reverse md:pb-16 md:pl-8 lg:px-10">
        <div className="flex w-full justify-end">
          <LinkButtonWithArrow button="black" href="/">
            Was ist Plan F
          </LinkButtonWithArrow>
        </div>
        <div className="flex-col justify-center gap-8 md:gap-16">
          <div>
            <H2>Plan F</H2>
            <H3>{title}</H3>
          </div>
          <SearchBar />
        </div>
      </Section>
      <Section className="-mt-6 !rounded-none bg-purple-300 pt-12 md:pt-16">
        <H2>Handlungsfelder</H2>
        <P>
          Entdecken Sie die verschiedenen Handlungsfelder. Dort finden Sie
          Maßnahmen und deren zugehörigen Praxisbeispiele
        </P>
        <CardWrapperMeasurePage className="mt-10">
          {topics.nodes.map((topic) => (
            <CardImageAndTextHorizontal
              key={topic.slug}
              link={`${wikiPath}/${topic.slug}`}
              image={topic.image.url}
            >
              <H3>{topic.name}</H3>
            </CardImageAndTextHorizontal>
          ))}
        </CardWrapperMeasurePage>
      </Section>
      <Section className="mb-12 !rounded-none bg-lime-300">
        <H2>Praxisbeispiele</H2>
        <P>
          Schau was andere Kommunen zu diesem Thema bereits für Maßnahmen
          umgesetzt haben.
        </P>
        <CardWrapperMeasurePage className="mt-12">
          {examples?.length &&
            examples.map((example) => (
              <CardImageAndTextVertical
                key={example.path}
                link={example.path}
                image={
                  example.image &&
                  getImage(example.image.image.localFile as any)
                }
              >
                <H3>{example.title}</H3>
                <div className="line-clamp-4">
                  <P>{example.shortDescription}</P>
                </div>
              </CardImageAndTextVertical>
            ))}
        </CardWrapperMeasurePage>
      </Section>
      <Section>
        <Content>
          <H2>Plan F Award</H2>
          <P>
            Im Sommer 2022 haben sich Kommunen mit guten Praxisbeispielen auf
            den Plan F Award in den verschiedenen Handlungsfeldern beworben.
            Unter den 66 Einreichungen hat unsere Jury die besten drei Maßnahmen
            (maximal) pro Handlungsfeld ausgewählt. Insgesamt wurden 21 Projekte
            gekürt und auf der Fahrradkommunalkonferenz 2022 in Aachen geehrt.
            Mehr zu dem Award hier:
          </P>
          <LinkButtonWithArrow className="mt-8" truncate={false} href="/award">
            Zur Plan F Award Seite
          </LinkButtonWithArrow>
          <P className="mt-20 md:mt-20">
            Plan F ist ein gemeinsames Projekt von fair spaces und FixMyCity und
            wird vom Bundesministerium für Digitales und Verkehr (BMDV) im
            Rahmen des Nationalen Radverkehrsplan (NRVP) gefördert.
          </P>
        </Content>
      </Section>
    </>
  );
};

export default IndexPage;
