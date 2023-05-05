import { PageProps, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Breadcrumbs, HelmetSeo, Hero } from '~/components/Layout';
import { Article } from '~/components/Layout/Article';
import { CardImageAndTextResponsive } from '~/components/Layout/CardImageAndTextResponsive';
import { CardWrapper } from '~/components/Layout/CardWrapper';
import { Section } from '~/components/Layout/Section';
import { H2, H3, P } from '~/components/Text';
import { Prose } from '~/components/core/Prose';

export const query = graphql`
  query TopicTeasers {
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

const IndexPage: React.FC<PageProps<Queries.TopicTeasersQuery>> = ({
  data: { topics },
}) => {
  const title = 'Wissensspeicher';
  return (
    <>
      <HelmetSeo title={title} />
      <Hero title={title} className="bg-purple-100">
        <Breadcrumbs names={[]} />
      </Hero>
      <Section className="mb-12">
        <Article>
          <P>
            Kommunikation und Öffentlichkeitsarbeit sind ein zentrales
            Handlungsfeld der Radverkehrsförderung, welches insbesondere
            Personen, die (noch) nicht Fahrrad fahren, adressiert und erreichen
            möchte. Neben Maßnahmen im Bereich #Marketing und Kommunikation
            können auch #Innovationen und #Modellprojekte einen wichtigen
            Beitrag dazu leisten, dass das Fahrrad als Mobilitätsmittel beworben
            und die Bevölkerung zum Radfahren motiviert wird. Darüber hinaus ist
            es wichtig, dass Kommunen selbst als #Vorbild auftreten und den
            Radverkehr in der eigenen Verwaltung fördern. Ein positives Framing
            des Fahrradfahrens durch gute Öffentlichkeitsarbeit zielt darauf ab,
            das Fahrrad als Alltagsverkehrsmittel zu „normalisieren“.
            Gleichzeitig ist die Verbreitung wichtiger Informationen, zum
            Beispiel über radverkehrsbezogene Angebote und Möglichkeiten in
            Ihrer Kommune, ein wichtiger Baustein, um mehr Menschen das
            Radfahren zugänglich zu machen. Gute Praxisbeispiele zeigen auf, wie
            verschiedene Maßnahmen aus dem Handlungsfeld Kommunikation und
            Öffentlichkeitsarbeit in den Kommunen umgesetzt wurden und dazu
            beitragen, den Radverkehr zu fördern. Wichtige Leitfäden und
            Literaturtipps unterstützen Sie in der Umsetzung.
          </P>
        </Article>
      </Section>
      <Section className="bg-purple-300">
        <H2>Handlungsfelder</H2>
        <P>
          Entdecken Sie die verschiedenen Handlungsfelder. Dort finden Sie
          Maßnahmen und deren zugehörigen Praxisbeispiele
        </P>
        <CardWrapper className="mt-10">
          {topics.nodes.map((topic) => (
            <CardImageAndTextResponsive
              key={topic.slug}
              link={topic.slug}
              image={topic.image && getImage(topic.image.localFile as any)}
            >
              <H3>{topic.name}</H3>
              {topic.description?.data?.childMarkdownRemark.html && (
                <Prose
                  className="line-clamp-4"
                  markdownHTML={topic.description.data.childMarkdownRemark.html}
                />
              )}
            </CardImageAndTextResponsive>
          ))}
        </CardWrapper>
      </Section>
    </>
  );
};

export default IndexPage;
