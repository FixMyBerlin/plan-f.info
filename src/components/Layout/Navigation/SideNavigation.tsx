import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { Link } from '../../core/links/Link';

type Props = { path: string };

export const SideNavigation: React.FC<Props> = ({ path }) => {
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
    <div className="h-full">
      <nav className="flex h-[80vh] min-h-fit items-center">
        {/* Shadow for custom shape https://stackoverflow.com/questions/12855529/css-box-shadow-around-a-custom-shape */}
        {/* TODO maintain the height of teh side nav */}
        {!folded && (
          <ul className={clsx('h-full w-72 bg-gray-100 px-4 py-20')}>
            {nodes.map((topic) => (
              <li key={topic.name}>
                <Link
                  href={`${basePath}/${topic.slug}`}
                  className={clsx(
                    '!text-sm !no-underline',
                    `${basePath}/${topic.slug}/` === path
                      ? 'text-purple-500 before:bg-purple-500'
                      : 'text-black'
                  )}
                >
                  {topic.name}
                </Link>
                <ul className="mt-4 flex flex-col gap-2">
                  {topic.measures.map((measure) => (
                    <li key={measure.name} className="relative">
                      <Link
                        href={`${basePath}/${topic.slug}/${measure.slug}`}
                        className={clsx(
                          'block w-full pl-3.5 !text-sm !no-underline',
                          `${basePath}/${topic.slug}/${measure.slug}/` === path
                            ? 'text-purple-500 before:bg-purple-500'
                            : 'text-black'
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

        <div className="flex flex-col justify-center">
          <button
            className="rounded-br-lg rounded-tr-lg bg-gray-100 py-10 "
            type="button"
            onClick={() => setFolded(!folded)}
          >
            {folded ? (
              <ChevronRightIcon className="h-5 w-5" />
            ) : (
              <ChevronLeftIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};
