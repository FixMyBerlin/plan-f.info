import { graphql, PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Prose } from '~/components/core/Prose';
import { Breadcrumbs, HelmetSeo, Hero } from '~/components/Layout';
import { CardImageAndTextResponsive } from '~/components/Layout/CardImageAndTextResponsive';
import { CardWrapper } from '~/components/Layout/CardWrapper';
import { LinkListBlackButton } from '~/components/Layout/LinkListBlackButton';
import { PageHeaderTextAndImage } from '~/components/Layout/PageHeaderTextAndImage';
import { Section } from '~/components/Layout/Section';
import { LinkButtonWithArrow } from '~/components/PageTopic/LinkButtonWithArrow';
import { H2, H3, P } from '~/components/Text';

const TopicDetails: React.FC<PageProps<Queries.TopicDetailsQuery>> = ({
  data: { topic },
}) => {
  return (
    <>
      <HelmetSeo title={topic.name} />

      <Hero title={topic.name} className="bg-purple-300">
        <Breadcrumbs names={['Wissensspeicher', topic.name]} />
      </Hero>

      <PageHeaderTextAndImage
        image={topic.image && getImage(topic.image.localFile as any)}
        markdownHTML={topic.description.data.childMarkdownRemark.html}
      />

      <Section className="mb-20 flex flex-col  gap-10 sm:flex-row sm:gap-20">
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-5">
            <H3 className="uppercase">Leitfäden (nicht in Daten)</H3>
            <LinkButtonWithArrow href="/">Leitfaden 1</LinkButtonWithArrow>
            <LinkButtonWithArrow href="/">Leitfaden 2</LinkButtonWithArrow>
          </div>
        </div>

        {topic.additionalResources && (
          <LinkListBlackButton
            links={topic.additionalResources}
            title="weitere Hinweise"
          />
        )}
      </Section>

      <Section className="bg-green-500">
        <H2>Maßnahmen im Handlungsfeld {topic.name}</H2>
        <P>
          Entdecken Sie die Verschiedenen Maßnahmen, die zu diesem Handlungsfeld
          gehören, dort finden Sie auch viele Praxisbeispiele
        </P>
        <CardWrapper className="mt-12">
          {topic.measures &&
            topic.measures.map((measure) => (
              <CardImageAndTextResponsive
                key={measure.slug}
                link={measure.slug || '/'} // This is only quick fix - slug should be Pflichtfpeld
              >
                <H3>{measure.name}</H3>
                <Prose
                  className="line-clamp-4"
                  markdownHTML={
                    measure.description.data.childMarkdownRemark.html
                  }
                />
              </CardImageAndTextResponsive>
            ))}
        </CardWrapper>
      </Section>
    </>
  );
};

export default TopicDetails;

export const query = graphql`
  query TopicDetails($id: String!) {
    topic: strapiTopic(id: { eq: $id }) {
      name
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
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
        description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
