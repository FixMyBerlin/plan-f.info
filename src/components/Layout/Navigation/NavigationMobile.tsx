import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Logo from '~/components/Layout/assets/Logo.svg';
import { Link } from '../../core/links/Link';
import { menuItems } from './menuItems';

type Props = { path: string; className?: string };

// base: 'simple' from https://tailwindui.com/components/application-ui/navigation/navbars

export const NavigationMobile: React.FC<Props> = ({ path, className }) => {
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
  return (
    <Disclosure as="nav" className={clsx(className, 'fixed z-10 w-full')}>
      {({ open }) => (
        <>
          <div
            className={clsx('mx-auto px-4 sm:px-6 lg:px-8', open && 'bg-white')}
          >
            <div className="flex h-16 justify-between">
              <Link className="flex flex-col justify-center" href="/">
                <Logo className="h-8 w-auto shrink-0" />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-9 w-9 rounded-full bg-black p-1 text-white active:ring-0"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-9 w-9 rounded-full bg-black p-2 text-white"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="flex flex-col gap-2 bg-white px-4 py-10">
              {Object.keys(menuItems).map((key) => (
                <Disclosure.Button
                  as="a"
                  key={key}
                  href={menuItems[key]}
                  className={clsx(
                    '!text-sm !no-underline',
                    `${menuItems[key]}/` === path
                      ? 'text-purple-500 before:bg-purple-500'
                      : 'text-black'
                  )}
                >
                  {key}
                  {key === 'Wissensspeicher' &&
                    nodes.map((topic) => (
                      <li className="list-none pl-3.5" key={topic.name}>
                        <Link
                          href={`${menuItems[key]}/${topic.slug}`}
                          className={clsx(
                            '!text-sm !no-underline',
                            `/${topic.slug}/` === path
                              ? 'text-purple-500 before:bg-purple-500'
                              : 'text-black'
                          )}
                        >
                          {topic.name}
                        </Link>
                      </li>
                    ))}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
