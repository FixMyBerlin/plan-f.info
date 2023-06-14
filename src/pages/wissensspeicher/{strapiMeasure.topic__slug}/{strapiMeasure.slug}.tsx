import { graphql, PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { CommunityEntriesSection } from '~/components/CommunityEntriesSection';
import { Breadcrumbs, HelmetSeo, Hero } from '~/components/Layout';
import { CardImageAndTextVertical } from '~/components/Layout/CardImageAndTextVertical';
import { CardWrapperMeasurePage } from '~/components/Layout/CardWrapperMeasurePage';
import { LinkListBlackButton } from '~/components/Layout/LinkListBlackButton';
import { PageHeader } from '~/components/Layout/PageHeader';
import { Section } from '~/components/Layout/Section';
import { H2, P } from '~/components/Text';
import { sortByPosition, wikiColors } from '~/components/utils';

const MeasureDetails: React.FC<PageProps<Queries.MeasureDetailsQuery>> = ({
  data: { measure },
}) => {
  const { communityEntries } = measure;
  const examples = sortByPosition(measure.examples);
  return (
    <>
      <HelmetSeo title={`${measure.name} | Plan F`} />
      <Hero
        title={measure.name}
        bgColor={wikiColors.measure}
        breadcrumbs={
          <Breadcrumbs
            names={['Wissensspeicher', measure.topic.name, measure.name]}
          />
        }
      />
      <PageHeader
        markdownHTML={measure.description.data.childMarkdownRemark.html}
      />

      <Section className="mb-20 grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
        {measure.guidelines && (
          <LinkListBlackButton links={measure.guidelines} title="Leitfäden" />
        )}
        {measure.additionalResources && (
          <LinkListBlackButton
            links={measure.additionalResources}
            title="weitere Hinweise"
          />
        )}
        {measure.fundings && (
          <LinkListBlackButton
            links={measure.fundings}
            title="Fördermöglichkeiten"
          />
        )}
      </Section>

      <Section className="mb-12 bg-lime-300">
        <H2>Praxisbeispiele ({examples.length})</H2>
        <P>
          Tauchen Sie in unsere Praxisbeispiele ein und sehen Sie, was andere
          Kommunen bereits für Maßnahmen umgesetzt haben.
        </P>
        <CardWrapperMeasurePage className="mt-12">
          {examples.map((example) => (
            <CardImageAndTextVertical
              title={example.title}
              key={example.slug}
              link={example.slug}
              image={
                example.image && getImage(example.image.image.localFile as any)
              }
            >
              <div className="line-clamp-4">
                <P>{example.shortDescription}</P>
              </div>
            </CardImageAndTextVertical>
          ))}
        </CardWrapperMeasurePage>
      </Section>
      {communityEntries && (
        <CommunityEntriesSection communityEntries={communityEntries} />
      )}
    </>
  );
};

export default MeasureDetails;

export const query = graphql`
  query MeasureDetails($id: String!) {
    measure: strapiMeasure(id: { eq: $id }) {
      name
      description {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      additionalResources {
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
        position
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
  }
`;
