import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import Logo from '~/components/Layout/assets/Logo.svg';
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
    <div className="fixed z-20 h-screen">
      <nav className="flex h-full items-center">
        {!folded ? (
          <ul
            className={clsx('shadow-r h-full w-72 bg-gray-100 px-4 py-3 pr-8')}
          >
            <li className="mb-16 px-4">
              <Link href="/">
                <Logo className="h-8 w-auto shrink-0" />
              </Link>
            </li>
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
                  {Boolean(topic.measures?.length) &&
                    topic.measures.map((measure) => (
                      <li key={measure.name} className="relative">
                        <Link
                          href={`${basePath}/${topic.slug}/${measure.slug}`}
                          className={clsx(
                            'block w-full pl-3.5 !text-sm !no-underline',
                            `${basePath}/${topic.slug}/${measure.slug}/` ===
                              path
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
        ) : (
          <div className="shadow-r h-full w-[6px] bg-gray-100" />
        )}

        <div className="flex flex-col justify-center">
          <button
            className="shadow-r rounded-br-lg rounded-tr-lg bg-gray-100 py-10"
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
