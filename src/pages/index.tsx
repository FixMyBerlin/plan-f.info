import { PageProps, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Content, HelmetSeo } from '~/components/Layout';
import { CardImageAndTextHorizontal } from '~/components/Layout/CardImageAndTextHorizontal';
import { CardImageAndTextVertical } from '~/components/Layout/CardImageAndTextVertical';
import { CardWrapperMeasurePage } from '~/components/Layout/CardWrapperMeasurePage';
import { Section } from '~/components/Layout/Section';
import { LinkButtonWithArrow } from '~/components/PageTopic/LinkButtonWithArrow';

import { H2, H3, P } from '~/components/Text';

export const query = graphql`
  query TopicAndExampleOverview {
    topics: allStrapiTopic {
      nodes {
        slug
        name
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    examples: allStrapiExample {
      nodes {
        slug
        title
        shortDescription
        measure {
          id
        }
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
`;

const IndexPage: React.FC<PageProps<Queries.TopicAndExampleOverviewQuery>> = ({
  data: { topics, examples },
}) => {
  const title = 'Impulse für die fahrradfreundliche Kommune';

  // get three example nodes - from distinct measures

  const uniqueMeasureIds = new Set();

  // Filter example nodes to get unique measure IDs
  const filteredExamples = examples.nodes.filter((example) => {
    if (!uniqueMeasureIds.has(example.measure.id)) {
      uniqueMeasureIds.add(example.measure.id);
      return true;
    }
    return false;
  });

  // Select the first three nodes from the filtered list
  // in case the list is shorter than three, simply take the first three example nodes
  const selectedFilteredExamples =
    filteredExamples.length < 3
      ? examples.nodes.slice(0, 3)
      : filteredExamples.slice(0, 3);

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
          <p>SUCHE TODO</p>
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
              link={topic.slug}
              image={topic.image && getImage(topic.image.localFile as any)}
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
          {selectedFilteredExamples.map((example) => (
            <CardImageAndTextVertical
              key={example.slug}
              link={example.slug}
              image={
                example.image && getImage(example.image.image.localFile as any)
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
