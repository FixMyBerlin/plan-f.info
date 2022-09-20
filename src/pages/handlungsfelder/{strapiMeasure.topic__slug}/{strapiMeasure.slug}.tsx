import React from 'react';
import {
  Profile,
  ProfileGrid,
  QuoteBox,
  Fundings,
  FoldOut,
  CheckLI,
  CountLI,
  CEO,
  jury,
} from '~/components/StartPage';
import { Layout, Hero, Content, HelmetSeo } from '~/components/Layout';
import { H1, H2, H3 } from '~/components/Text';
import { graphql, Link, PageProps } from 'gatsby';

export const query = graphql`
  query MeasureDetails($id: String!) {
    measure: strapiMeasure(id: { eq: $id }) {
      name
      description {
        data {
          description
        }
      }
      examples {
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

const IndexPage: React.FC<PageProps<Queries.MeasureDetailsQuery>> = ({
  data: { measure },
}) => {
  return (
    <Layout>
      <HelmetSeo title={measure.name} />
      <Hero title={measure.name}>
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
      <section className="pt-1">
        <Content>
          {measure.examples.map((example) => (
            <Link to={example.slug}>
              <div className="pt-6">
                <h1>{example.name}</h1>
                {example.description.data.description}
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
