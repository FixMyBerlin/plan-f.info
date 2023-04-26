import { PageProps, graphql } from 'gatsby';
import React from 'react';
import { Breadcrumbs, HelmetSeo, Hero } from '~/components/Layout';
import { Article } from '~/components/Layout/Article';
import { CardIconAndText } from '~/components/Layout/CardIconAndText';
import { CardWrapper } from '~/components/Layout/CardWrapper';
import { Section } from '~/components/Layout/Section';
import { icons } from '~/components/StartPage';
import { H2, H3, P } from '~/components/Text';
import { Prose } from '~/components/links/core/Prose';

export const query = graphql`
  query TopicTeasers {
    topics: allStrapiTopic {
      nodes {
        slug
        name
        description {
          s
          data {
            description
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
        <Breadcrumbs names={[title]} />
      </Hero>
      {/* <Link button="black" href="https://tailwindcss.com/docs/ring-width">
        Hallo Test
      </Link> */}
      <Section>
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
            <CardIconAndText
              link={topic.slug}
              icon={<icons.governance className="h-24 w-24 flex-shrink-0" />} // TODO dynamisieren
            >
              <H3>{topic.name}</H3>
              <div className="line-clamp-4">
                <Prose>
                  <p>{topic.description.data.description}</p>
                </Prose>
              </div>
            </CardIconAndText>
          ))}
        </CardWrapper>
      </Section>
    </>
  );
};

export default IndexPage;
