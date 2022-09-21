import React from 'react';
import { Fundings, FoldOut } from '~/components/StartPage';
import {
  Layout,
  Hero,
  Content,
  HelmetSeo,
  Navigation,
} from '~/components/Layout';
import { graphql, PageProps, Link } from 'gatsby';

export const query = graphql`
  query TopicTeasers {
    topics: allStrapiTopic {
      nodes {
        slug
        name
        description {
          data {
            description
          }
        }
      }
    }
  }
`;

const IndexPage: React.FC<PageProps<Queries.TopicTeasersQuery>> = ({
  path,
  data: { topics },
}) => {
  const title = 'Handlungsfelder';
  return (
    <Layout>
      <HelmetSeo title={title} />
      <Hero title={title}>
        <FoldOut previewMode="clamp">
          <p className="mt-6">
            Im Projekt Plan&nbsp;F werden vier Produkte erarbeitet:
          </p>
          <ol className="mt-6 ml-12 list-decimal">
            <li>Ein komprimiertes und übersichtliches Handbuch</li>
            <li>Eine interaktive Webseite</li>
            <li>
              Ein kommunaler Fahrradcheck (Selbstaudit) inkl.
              Maßnahmenempfehlung
            </li>
            <li>
              Ein interaktiver E-Learningkurs zu den Inhalten der
              Systematisierung und Q&amp;A Sessions
            </li>
          </ol>
          <p className="mt-6">
            Plan&nbsp;F ist ein gemeinschaftliches Projekt von AEM Institute und
            FixMyCity und wird vom Bundesministerium für Digitales und Verkehr
            (BMDV) im Rahmen des Nationalen Radverkehrsplan (NRVP) gefördert.
          </p>
        </FoldOut>
      </Hero>
      <Navigation path={path} />
      <section className="pt-1">
        <Content>
          {topics.nodes.map((topic) => (
            <Link to={topic.slug}>
              <div className="pt-6">
                <h1>{topic.name}</h1>
                {topic.description.data.description}
              </div>
            </Link>
          ))}
        </Content>
      </section>
      <div className="object-left pt-28 pb-6">
        <Fundings />
      </div>
    </Layout>
  );
};

export default IndexPage;
