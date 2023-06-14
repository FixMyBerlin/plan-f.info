import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { Prose } from '~/components/core/Prose';
import { Breadcrumbs, HelmetSeo, Hero } from '~/components/Layout';
import { CardImageAndTextResponsive } from '~/components/Layout/CardImageAndTextResponsive';
import { CardWrapperTopicPage } from '~/components/Layout/CardWrapperTopicPage';
import { LinkListBlackButton } from '~/components/Layout/LinkListBlackButton';
import { PageHeader } from '~/components/Layout/PageHeader';
import { Section } from '~/components/Layout/Section';
import { H2, P } from '~/components/Text';
import { sortByPosition, wikiColors } from '~/components/utils';

const TopicDetails: React.FC<PageProps<Queries.TopicDetailsQuery>> = ({
  data: { topic },
}) => {
  const measures = sortByPosition(topic.measures);
  return (
    <>
      <HelmetSeo title={`${topic.name} | Plan F`} />

      <Hero
        title={topic.name}
        bgColor={wikiColors.topic}
        breadcrumbs={<Breadcrumbs names={['Wissensspeicher', topic.name]} />}
      />

      <PageHeader
        className="-mb-10"
        image={topic.image?.url && topic.image.url}
        markdownHTML={topic.description.data.childMarkdownRemark.html}
      />

      <Section className="mb-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
        {topic.guidelines && (
          <LinkListBlackButton links={topic.guidelines} title="Leitfäden" />
        )}
        {topic.additionalResources && (
          <LinkListBlackButton
            links={topic.additionalResources}
            title="weitere Hinweise"
          />
        )}
        {topic.fundings && (
          <LinkListBlackButton
            links={topic.fundings}
            title="Fördermöglichkeiten"
          />
        )}
      </Section>

      <Section className="bg-green-500">
        <H2>Maßnahmen im Handlungsfeld {topic.name}</H2>
        <P>
          Entdecken Sie die verschiedenen Maßnahmen, die zu diesem Handlungsfeld
          gehören, dort finden Sie auch viele Praxisbeispiele
        </P>
        <CardWrapperTopicPage className="mt-12">
          {measures.map((measure) => (
            <CardImageAndTextResponsive
              title={measure.name}
              key={measure.slug}
              link={measure.slug || '/'} // This is only quick fix - slug should be Pflichtfpeld
            >
              <Prose markdownHTML={measure.shortDescription} />
            </CardImageAndTextResponsive>
          ))}
        </CardWrapperTopicPage>
      </Section>
    </>
  );
};

export default TopicDetails;

export const query = graphql`
  query TopicDetails($id: String!) {
    topic: strapiTopic(id: { eq: $id }) {
      name
      fundings {
        display
        url
      }
      image {
        url
      }
      additionalResources {
        display
        url
      }
      description {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      guidelines {
        display
        url
      }
      measures {
        name
        slug
        position
        shortDescription
      }
    }
  }
`;
