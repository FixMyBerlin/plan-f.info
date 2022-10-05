import React from 'react';
import { Fundings } from '~/components/StartPage';
import { Hero, Content, HelmetSeo, Breadcrumbs } from '~/components/Layout';
import { graphql, Link, PageProps } from 'gatsby';

const TopicDetails: React.FC<PageProps<Queries.TopicDetailsQuery>> = ({
  data: { topic },
}) => {
  return (
    <>
      <HelmetSeo title={topic.name} />
      <Hero title={topic.name}>
        <Breadcrumbs names={['Handlungsfelder', topic.name]} />
      </Hero>
      <section className="pt-1">
        <Content>
          <div className="relative bg-pastel-purple  px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="relative mx-auto max-w-7xl">
              <div className="text-left">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Maßnahmen im Handlungsfeld {topic.name}
                </h2>
                <p className="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                  Entdecken Sie die Verschiedenen Maßnahmen, die zu diesem
                  Handlungsfeld gehören, dort finden Sie auch viele
                  Praxisbeispiele
                </p>
              </div>
              <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                {topic.measures.map((measure) => (
                  <div
                    key={measure.name}
                    className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                  >
                    <div className="flex-shrink-0">
                      <Link to={measure.slug}>
                        <img
                          className="h-48 w-full object-cover"
                          src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                      <div className="flex-1">
                        <Link to={measure.slug} className="mt-2 block">
                          <p className="text-xl font-semibold text-gray-900">
                            {measure.name}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {measure.description.data.description}
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
