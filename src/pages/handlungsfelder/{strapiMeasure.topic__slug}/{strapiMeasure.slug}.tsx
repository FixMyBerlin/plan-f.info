import { graphql, PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { CommunityEntriesSection } from '~/components/CommunityEntriesSection';
import { Prose } from '~/components/core/Prose';
import { Breadcrumbs, HelmetSeo, Hero } from '~/components/Layout';
import { CardImageAndTextVertical } from '~/components/Layout/CardImageAndTextVertical';
import { CardWrapperThreeCols } from '~/components/Layout/CardWrapperThreeCols';
import { LinkListBlackButton } from '~/components/Layout/LinkListBlackButton';
import { PageHeaderTextAndImage } from '~/components/Layout/PageHeaderTextAndImage';
import { Section } from '~/components/Layout/Section';
import { LinkButtonWithArrow } from '~/components/PageTopic/LinkButtonWithArrow';
import { H2, H3, P } from '~/components/Text';

const MeasureDetails: React.FC<
  PageProps<Queries.MeasureDetailsAndCommunityEntriesQuery>
> = ({ data: { measure, communityEntries } }) => {
  return (
    <>
      <HelmetSeo title={measure.name} />
      <Hero title={measure.name} className="bg-green-500">
        <Breadcrumbs
          names={['Wissensspeicher', measure.topic.name, measure.name]}
        />
      </Hero>
      <PageHeaderTextAndImage>
        {measure.description.data.description}
      </PageHeaderTextAndImage>

      <Section className="mb-20 flex flex-col gap-10 sm:flex-row sm:gap-20">
        <div className="flex flex-col items-start gap-5">
          <H3 className="uppercase">Leitfäden (nicht in Daten)</H3>
          <LinkButtonWithArrow href="/">Leitfaden 1</LinkButtonWithArrow>
          <LinkButtonWithArrow href="/">Leitfaden 2</LinkButtonWithArrow>
        </div>

        {measure.additonalResources && (
          <LinkListBlackButton
            links={measure.additonalResources}
            title="weitere Hinweise"
          />
        )}

        <div className="flex flex-col items-start gap-5">
          <H3 className="uppercase">Fördermöglichkeiten (nicht in Daten)</H3>
          <LinkButtonWithArrow href="/">
            Fördermöglichkeiten 1
          </LinkButtonWithArrow>
          <LinkButtonWithArrow href="/">
            Fördermöglichkeiten 2
          </LinkButtonWithArrow>
        </div>
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
              image={
                example.image && getImage(example.image.image.localFile as any)
              }
            >
              <H3>{example.title}</H3>
              <Prose className="line-clamp-4">{example.shortDescription}</Prose>
            </CardImageAndTextVertical>
          ))}
        </CardWrapperThreeCols>
      </Section>
      {communityEntries && (
        <CommunityEntriesSection communityEntries={communityEntries} />
      )}
    </>
  );
};

export default MeasureDetails;

export const query = graphql`
  query MeasureDetailsAndCommunityEntries($id: String!) {
    measure: strapiMeasure(id: { eq: $id }) {
      name
      description {
        data {
          description
        }
      }
      additonalResources {
        url
        display
      }
      guidelines {
        display
        url
      }
      fundings {
        display
        url
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
