import { PageProps, graphql } from 'gatsby';
import React from 'react';
import { Breadcrumbs, Content, HelmetSeo, Hero } from '~/components/Layout';
import { CardImageAndTextResponsive } from '~/components/Layout/CardImageAndTextResponsive';
import { CardWrapperWissensspeicherPage } from '~/components/Layout/CardWrapperWissensspeicherPage';
import { Section } from '~/components/Layout/Section';
import { H2, P } from '~/components/Text';
import { Prose } from '~/components/core/Prose';
import { wikiColors } from '~/components/utils';

export const query = graphql`
  query TopicTeasers {
    topics: allStrapiTopic(sort: { position: ASC }) {
      nodes {
        slug
        name
        image {
          url
        }
        shortDescription
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
      <Hero
        title={title}
        bgColor={wikiColors.root}
        breadcrumbs={<Breadcrumbs names={['Wissensspeicher']} />}
      />
      <Section>
        <Content>
          <P>
            Das Herzstück von Plan F ist die Systematisierung von
            Praxisbeispielen, Leitfäden, Fördermöglichkeiten und weitere
            Hinweise. Diese sind in dem Wissensspeicher strukturiert
            aufbereitet.
          </P>
          <P>
            Der Wissensspeicher ist einfach zu bedienen und schafft eine
            strukturierte Übersicht zu Handlungsmöglichkeiten der kommunalen
            Radverkehrsförderung. Der Wissensspeicher ist nach neun
            Handlungsfeldern gegliedert, welche verschiedene Maßnahmen und
            Praxisbeispiele enthalten. Relevante Leitfäden, Fördermöglichkeiten,
            weitere Hinweise sind den Handlungsfeldern und Maßnahmen zugeordnet.
            <br />
            Es ist möglich, sich durch die verschiedenen Handlungsfelder zu
            klicken, um die verschiedenen Informationen zu erhalten. Darüber
            hinaus bietet die Suchfunktion einen schnellen Zugang zu den
            Handlungsfeldern, verschiedenen Maßnahmen und Praxisbeispielen.
          </P>
          <P>
            Für eine ganzheitliche Radverkehrsförderung ist es notwendig,
            Maßnahmen in verschiedenen Handlungsfeldern umzusetzen. Ein schlauer
            und passgenauer Maßnahmenmix trägt dazu bei, den Radverkehrsanteil
            in deutschen Kommunen zu steigern.
          </P>
        </Content>
      </Section>
      <Section className="bg-purple-300">
        <H2>Handlungsfelder</H2>
        <P>
          Entdecken Sie die verschiedenen Handlungsfelder. Dort finden Sie
          Maßnahmen und deren zugehörigen Praxisbeispiele
        </P>
        <CardWrapperWissensspeicherPage className="mt-10">
          {topics &&
            topics.nodes.map((topic) => (
              <CardImageAndTextResponsive
                title={topic.name}
                key={topic.slug}
                link={topic.slug}
                image={topic.image && topic.image.url}
              >
                {topic.shortDescription && (
                  <Prose markdownHTML={topic.shortDescription} />
                )}
              </CardImageAndTextResponsive>
            ))}
        </CardWrapperWissensspeicherPage>
      </Section>
    </>
  );
};

export default IndexPage;
