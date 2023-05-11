const SEARCH_QUERY = `
  query Search($query: String!) {
    search(query: $query) {
      examples {
        data {
          attributes {
            title
            slug
            measure {
              data {
                attributes {
                  slug
                  topic {
                    data {
                      attributes {
                        slug
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      topics {
        data {
          attributes {
            name
            slug
          }
        }
      }
      measures {
        data {
          attributes {
            name
            slug
            topic {
              data {
                attributes {
                  slug
                }
              }
            }
          }
        }
      }
    }
  }
`;

type searchResult = { name: string; path: string };

function buildPaths({ examples, topics, measures }) {
  // format examples
  const exampleResults: searchResult[] = examples.data.map((x) => {
    const exampleAttributes = x.attributes;
    const measureAttributes = exampleAttributes.measure.data.attributes;
    const topicAttributes = measureAttributes.topic.data.attributes;
    return {
      name: exampleAttributes.title,
      path: [
        topicAttributes.slug,
        measureAttributes.slug,
        exampleAttributes.slug,
      ].join('/'),
    };
  });
  // format measures
  const measureResults: searchResult[] = measures.data.map((x) => {
    const measureAttributes = x.attributes;
    const topicAttributes = measureAttributes.topic.data.attributes;
    return {
      name: measureAttributes.name,
      path: [topicAttributes.slug, measureAttributes.slug].join('/'),
    };
  });
  // format topics
  const topicResults: searchResult[] = topics.data.map((x) => {
    const topicAttributes = x.attributes;
    return {
      name: topicAttributes.name,
      path: topicAttributes.slug,
    };
  });
  return { topicResults, measureResults, exampleResults };
}

export async function getSearchResults(query: string) {
  // TODO: get url from env (had problems with gatsbys wierd env handling)
  const endpoint = `${process.env.GATSBY_BACKEND_URL}/graphql`;
  return fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: SEARCH_QUERY, variables: { query } }),
  })
    .then((data) => data.json())
    .then(({ data: { search } }) => buildPaths(search));
}
