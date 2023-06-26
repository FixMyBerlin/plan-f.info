import { graphql, HeadFC, PageProps } from 'gatsby';
import React from 'react';
import { CommunityEntriesSection } from '~/components/CommunityEntries/CommunityEntriesSection';
import { Breadcrumbs, MetaTags, Hero } from '~/components/Layout';
import { LinkListBlackButton } from '~/components/Layout/LinkListBlackButton';
import { PageIntro } from '~/components/Layout/PageIntro';
import { CardExample } from '~/components/MeasurePage/CardExample';
import { CardWrapperMeasurePage } from '~/components/MeasurePage/CardWrapperMeasurePage';

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
      <Hero
        title={measure.name}
        bgColor={wikiColors.measure}
        breadcrumbs={
          <Breadcrumbs
            names={['Wissensspeicher', measure.topic.name, measure.name]}
          />
        }
      />
      <PageIntro
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
        <H2>Praxisbeispiele</H2>
        <P>
          Tauchen Sie in unsere Praxisbeispiele ein und sehen Sie, was andere
          Kommunen bereits für Maßnahmen umgesetzt haben.
        </P>
        <CardWrapperMeasurePage className="mt-12">
          {examples.map((example) => (
            <CardExample
              title={example.title}
              key={example.slug}
              link={example.slug}
              image={example.image}
            >
              <div>
                <p className="text-sm text-gray-700 md:text-base">
                  {example.shortDescription}
                </p>
              </div>
            </CardExample>
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

export const Head: HeadFC<Queries.MeasureDetailsQuery> = ({
  data: { measure },
}) => <MetaTags title={measure.name} />;

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
