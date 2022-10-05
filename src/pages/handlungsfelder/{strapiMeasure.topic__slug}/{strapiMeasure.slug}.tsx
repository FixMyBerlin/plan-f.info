import React from 'react';
import { Fundings } from '~/components/StartPage';
import { Hero, Content, HelmetSeo, Breadcrumbs } from '~/components/Layout';
import { graphql, Link, PageProps } from 'gatsby';

const MeasureDetails: React.FC<PageProps<Queries.MeasureDetailsQuery>> = ({
  data: { measure },
}) => {
  return (
    <>
      <HelmetSeo title={measure.name} />
      <Hero title={measure.name}>
        <Breadcrumbs
          names={['Handlungsfelder', measure.topic.name, measure.name]}
        />
      </Hero>
      <section className="pt-1">
        <Content>
          <div className="relative bg-dark-green  px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="relative mx-auto max-w-7xl">
              <div className="text-left">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Praxisbeispiele
                </h2>
                <p className="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                  Schau was andere Kommunen zu diesem Thema bereits für
                  Maßnahmen umgesetzt haben.
                </p>
              </div>
              <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                {measure.examples.map((example) => (
                  <div
                    key={example.name}
                    className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                  >
                    <div className="flex-shrink-0">
                      <Link to={example.slug}>
                        <img
                          className="h-48 w-full object-cover"
                          src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                      <div className="flex-1">
                        <Link to={example.slug} className="mt-2 block">
                          <p className="text-xl font-semibold text-gray-900">
                            {example.name}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {example.description.data.description}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Content>
      </section>
      <div className="object-left pt-28 pb-6">
        <Fundings />
      </div>
    </>
  );
};

export default MeasureDetails;

export const query = graphql`
  query MeasureDetails($id: String!) {
    measure: strapiMeasure(id: { eq: $id }) {
      name
      description {
        data {
          description
        }
      }
      topic {
        name
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
