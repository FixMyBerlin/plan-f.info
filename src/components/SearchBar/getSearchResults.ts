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

type SearchResult = { title: string; path: string };

function buildPaths({ examples, topics, measures }) {
  const wikiPath = '/wissensspeicher';
  // format examples
  const example: SearchResult[] = examples.data.map((x) => {
    const exampleAttributes = x.attributes;
    const measureAttributes = exampleAttributes.measure.data.attributes;
    const topicAttributes = measureAttributes.topic.data.attributes;
    return {
      title: exampleAttributes.title,
      path: [
        wikiPath,
        topicAttributes.slug,
        measureAttributes.slug,
        exampleAttributes.slug,
      ].join('/'),
    };
  });
  // format measures
  const measure: SearchResult[] = measures.data.map((x) => {
    const measureAttributes = x.attributes;
    const topicAttributes = measureAttributes.topic.data.attributes;
    return {
      title: measureAttributes.name,
      path: [wikiPath, topicAttributes.slug, measureAttributes.slug].join('/'),
    };
  });
  // format topics
  const topic: SearchResult[] = topics.data.map((x) => {
    const topicAttributes = x.attributes;
    return {
      title: topicAttributes.name,
      path: [wikiPath, topicAttributes.slug].join('/'),
    };
  });
  return { topic, measure, example };
}

export async function getSearchResults(query: string, signal: AbortSignal) {
  const endpoint = `${process.env.GATSBY_BACKEND_URL}/graphql`;
  return fetch(endpoint, {
    signal,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: SEARCH_QUERY, variables: { query } }),
  })
    .then((data) => data.json())
    .then(({ data: { search } }) => buildPaths(search));
}
