import { graphql, PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Prose } from '~/components/core/Prose';
import { Breadcrumbs, HelmetSeo, Hero } from '~/components/Layout';
import { CardImageAndTextResponsiveImgFull } from '~/components/Layout/CardImageAndTextResponsiveImgFull';
import { CardImageAndTextVertical } from '~/components/Layout/CardImageAndTextVertical';
import { CardWrapperThreeCols } from '~/components/Layout/CardWrapperThreeCols';
import { LinkListBlackButton } from '~/components/Layout/LinkListBlackButton';
import { PageHeaderTextAndImage } from '~/components/Layout/PageHeaderTextAndImage';
import { Section } from '~/components/Layout/Section';
import { LinkButtonWithArrow } from '~/components/PageTopic/LinkButtonWithArrow';
import { H2, H3, P } from '~/components/Text';

const MeasureDetails: React.FC<PageProps<Queries.MeasureDetailsQuery>> = ({
  data: { measure },
}) => (
  <>
    <HelmetSeo title={measure.name} />
    <Hero title={measure.name} className="bg-green-500">
      <Breadcrumbs
        names={['Wissensspeicher', measure.topic.name, measure.name]}
      />
    </Hero>
    <PageHeaderTextAndImage
      image={getImage(measure.image.image.localFile as any)}
    >
      {measure.description.data.description}
    </PageHeaderTextAndImage>

    <Section className="mb-20 flex flex-col gap-10 sm:flex-row sm:gap-20">
      <div className="flex flex-col items-start gap-5">
        <H3 className="uppercase">Leitfäden (nicht in Daten)</H3>
        <LinkButtonWithArrow href="/">Leitfaden 1</LinkButtonWithArrow>
        <LinkButtonWithArrow href="/">Leitfaden 2</LinkButtonWithArrow>
      </div>

      <LinkListBlackButton
        links={measure.additionalResources}
        title="weitere Hinweise"
      />
    </Section>

    <Section className="mb-12 bg-lime-300">
      <H2>Praxisbeispiele</H2>
      <P>
        Schau was andere Kommunen zu diesem Thema bereits für Maßnahmen
        umgesetzt haben.
      </P>
      <CardWrapperThreeCols className="mt-12">
        {measure.examples.map((example) => (
          <CardImageAndTextVertical
            key={example.slug}
            link={example.slug}
            image={getImage(example.image.image.localFile as any)}
          >
            <H3>{example.title}</H3>
            <Prose className="line-clamp-4">{example.shortDescription}</Prose>
          </CardImageAndTextVertical>
        ))}
      </CardWrapperThreeCols>
    </Section>

    <Section className="bg-gray-300">
      <H2>Weitere Beiträge</H2>
      {/* TODO ? Was sind die weiteren Beiträge in den Daten? */}
      <P>
        TODO Text aus WIreframes: Entdecken Sie die Verschiedenen Maßnahmen, die
        zu diesem Handlungsfeld gehören, dort finden Sie auch viele
        Praxisbeispiele
      </P>
      <div className="mt-12 flex flex-col gap-5">
        {measure.examples.map((example) => (
          <CardImageAndTextResponsiveImgFull
            key={example.slug}
            link={example.slug}
            image={getImage(example.image.image.localFile as any)}
          >
            <H3>{example.title}</H3>
            <Prose className="line-clamp-4">{example.shortDescription}</Prose>
          </CardImageAndTextResponsiveImgFull>
        ))}
      </div>
    </Section>
  </>
);

export default MeasureDetails;

export const query = graphql`
  query MeasureDetails($id: String!) {
    measure: strapiMeasure(id: { eq: $id }) {
      name
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
      additionalResources {
        url
        display
      }
      topic {
        name
      }
      examples {
        title
        slug
        shortDescription
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
      }
    }
  }
`;
