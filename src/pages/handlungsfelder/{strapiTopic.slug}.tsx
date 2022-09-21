import React from 'react';
import { Fundings, FoldOut } from '~/components/StartPage';
import {
  Layout,
  Hero,
  Content,
  HelmetSeo,
  Navigation,
} from '~/components/Layout';
import { graphql, Link, PageProps } from 'gatsby';

const TopicDetails: React.FC<PageProps<Queries.TopicDetailsQuery>> = ({
  path,
  data: { topic },
}) => {
  return (
    <Layout>
      <HelmetSeo title={topic.name} />
      <Hero title={topic.name}>
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
          {topic.measures.map((measure) => (
            <Link to={measure.slug}>
              <div className="pt-6">
                <h1>{measure.name}</h1>
                {measure.description.data.description}
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

export default TopicDetails;

export const query = graphql`
  query TopicDetails($id: String!) {
    topic: strapiTopic(id: { eq: $id }) {
      name
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
      }
    }
  }
`;
