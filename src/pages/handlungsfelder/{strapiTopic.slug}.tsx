import { PageProps, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Breadcrumbs, HelmetSeo, Hero } from '~/components/Layout';
import { Article } from '~/components/Layout/Article';
import { CardImageAndTextResponsive } from '~/components/Layout/CardImageAndTextResponsive';
import { CardWrapper } from '~/components/Layout/CardWrapper';
import { Section } from '~/components/Layout/Section';
import { LinkButtonWithArrow } from '~/components/PageTopic/LinkButtonWithArrow';
import { H2, H3, P } from '~/components/Text';
import { Prose } from '~/components/core/Prose';

const TopicDetails: React.FC<PageProps<Queries.TopicDetailsQuery>> = ({
  data: { topic },
}) => {
  return (
    <>
      <HelmetSeo title={topic.name} />

      <Hero title={topic.name} className="bg-purple-300">
        <Breadcrumbs names={['Wissensspeicher', topic.name]} />
      </Hero>

      <Section className="flex flex-col gap-10 lg:flex-row">
        <Article>
          <Prose>{topic.description.data.description}</Prose>
        </Article>
        <GatsbyImage
          className="h-72 w-72 flex-shrink-0"
          image={getImage(topic.image.localFile as any)}
          alt={`Titelbild ${topic.name}`}
        />
      </Section>

      <Section className="mb-20 flex flex-col  gap-10 sm:flex-row sm:gap-20">
        <div className="flex flex-col items-start gap-5">
          <H3 className="uppercase">Leitfäden</H3>
          <LinkButtonWithArrow href="/">Leitfaden 1</LinkButtonWithArrow>
          <LinkButtonWithArrow href="/">Leitfaden 2</LinkButtonWithArrow>
          {/* TODO ? */}
        </div>
        <div className="flex flex-col items-start gap-5">
          <H3 className="uppercase">weitere Hinweise</H3>
          {topic.additionalResources.map((resource) => (
            <LinkButtonWithArrow href={resource.url}>
              {resource.display}
            </LinkButtonWithArrow>
          ))}
        </div>
      </Section>

      <Section className="bg-green-500">
        <H2>Maßnahmen im Handlungsfeld {topic.name}</H2>
        <P>
          Entdecken Sie die Verschiedenen Maßnahmen, die zu diesem Handlungsfeld
          gehören, dort finden Sie auch viele Praxisbeispiele
        </P>
        <CardWrapper className="mt-12">
          {topic.measures.map((measure) => (
            <CardImageAndTextResponsive
              key={measure.slug}
              link={measure.slug}
              image={getImage(measure.image.image.localFile as any)}
            >
              <H3>{measure.name}</H3>
              <Prose className="line-clamp-4">
                {measure.description.data.description}
              </Prose>
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
          description
        }
      }
      measures {
        name
        slug
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
      }
    }
  }
`;
