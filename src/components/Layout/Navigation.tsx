import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import clsx from 'clsx';

type Props = { path: string };

export const Navigation: React.FC<Props> = ({ path }) => {
  const basePath = '/handlungsfelder';
  const {
    nestedMeasures: { nodes },
  }: Queries.TopicMeasureTreeQuery = useStaticQuery(graphql`
    query TopicMeasureTree {
      nestedMeasures: allStrapiTopic {
        nodes {
          name
          slug
          measures {
            name
            slug
          }
        }
      }
    }
  `);
  const [folded, setFolded] = useState(true);
  return (
    <nav className="bg-white text-base lg:text-sm">
      <button type="button" onClick={() => setFolded(!folded)}>
        show
      </button>
      {!folded && (
        <ul className="space-y-9">
          {nodes.map((topic) => (
            <li key={topic.name}>
              <Link
                to={`${basePath}/${topic.slug}`}
                className={clsx(
                  'font-display font-medium',
                  `${basePath}/${topic.slug}/` === path
                    ? 'font-semibold text-sky-500 before:bg-sky-500'
                    : 'text-slate-900'
                )}
              >
                {topic.name}
              </Link>
              <ul className="border-slate-100 lg:border-slate-200 mt-2 space-y-2  border-l-2 lg:mt-4 lg:space-y-4">
                {topic.measures.map((measure) => (
                  <li key={measure.name} className="relative">
                    <Link
                      to={`${basePath}/${topic.slug}/${measure.slug}`}
                      className={clsx(
                        'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                        `${basePath}/${topic.slug}/${measure.slug}/` === path
                          ? 'font-semibold text-sky-500 before:bg-sky-500'
                          : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 before:hidden hover:before:block'
                      )}
                    >
                      {measure.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
