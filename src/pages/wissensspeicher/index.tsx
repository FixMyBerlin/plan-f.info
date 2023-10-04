import { HeadFC, PageProps, graphql } from 'gatsby';
import React from 'react';
import { Breadcrumbs, Content, MetaTags, Hero } from '~/components/Layout';
import { CardTopic } from '~/components/WissensspeicherStartPage/CardTopic';
import { CardWrapperWissensspeicherStartPage } from '~/components/WissensspeicherStartPage/CardWrapperWissensspeicherStartPage';
import { H2, P } from '~/components/Text';
import { wikiColors } from '~/components/utils';
import { Section } from '~/components/Layout/Section';

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

const title = 'Wissensspeicher';

const IndexPage: React.FC<PageProps<Queries.TopicTeasersQuery>> = ({
  data: { topics },
}) => {
  return (
    <>
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
        <CardWrapperWissensspeicherStartPage className="mt-10">
          {topics &&
            topics.nodes.map((topic) => (
              <CardTopic
                title={topic.name}
                key={topic.slug}
                link={topic.slug}
                image={topic.image && topic.image.url}
              >
                {topic.shortDescription && (
                  <p className="text-sm text-gray-700 md:text-base">
                    {topic.shortDescription}
                  </p>
                )}
              </CardTopic>
            ))}
        </CardWrapperWissensspeicherStartPage>
      </Section>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <MetaTags title={title} />;
