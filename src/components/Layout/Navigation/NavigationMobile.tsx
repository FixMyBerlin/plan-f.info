import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment, ReactNode } from 'react';
import Logo from '~/components/Layout/assets/Logo.svg';
import { SearchBar } from '~/components/SearchBar';
import { wikiPath } from '~/components/utils';
import { Link } from '../../core/links/Link';
import { NavigationMobileDisclosure } from './NavigationMobileDisclosure';
import { menuItems, menuItemsWithChildren } from './menuItems';

type Props = { path: string; className?: string; children?: ReactNode };

// base: 'simple' from https://tailwindui.com/components/application-ui/navigation/navbars

export const NavigationMobile: React.FC<Props> = ({
  children,
  path,
  className,
}) => {
  const basePath = `/${wikiPath}`;
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
    <Disclosure
      as="nav"
      className={clsx(className, 'fixed z-10 w-full bg-white')}
    >
      {({ open }) => (
        <>
          <div className={clsx('mx-auto px-4 pb-2 sm:px-6 lg:px-8')}>
            <div className="flex h-16 justify-between">
              <Link className="flex flex-col justify-center" href="/">
                <Logo className="h-8 w-auto shrink-0" />
              </Link>
              <div className="-mr-2 flex items-center">
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
            {children}
          </div>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel>
              <div className="flex flex-col divide-y border bg-white px-4 py-4 font-bold">
                <SearchBar className="mb-4 w-full" />
                {Object.keys(menuItems).map((key) => (
                  // eslint-disable-next-line react/jsx-no-useless-fragment
                  <Fragment key={key}>
                    {key === 'Wissensspeicher' ? (
                      // Inner Disclosure
                      <NavigationMobileDisclosure
                        // Inner Disclosure Button
                        button={
                          <p
                            className={clsx(
                              'whitespace-nowrap',
                              '!text-sm  !no-underline',
                              path.startsWith(basePath)
                                ? 'text-purple-500'
                                : 'text-black'
                            )}
                          >
                            {key}
                          </p>
                        }
                      >
                        {/* children: Inner Disclosure Panel */}
                        {/* First Link: Wissensspeicher */}
                        <Link
                          href={menuItems[key]}
                          className={clsx(
                            '!text-sm  !no-underline',
                            menuItems[key] === path
                              ? 'text-purple-500'
                              : 'text-gray-500'
                          )}
                        >
                          {key}
                        </Link>
                        {/* List of all topics */}
                        {nodes.map((topic) => (
                          <li className="list-none" key={topic.name}>
                            <Link
                              href={`${menuItems[key]}${topic.slug}`}
                              className={clsx(
                                '!text-sm !no-underline',
                                path === `${menuItems[key]}${topic.slug}/`
                                  ? 'text-purple-500'
                                  : 'text-gray-500'
                              )}
                            >
                              {topic.name}
                            </Link>
                          </li>
                        ))}
                      </NavigationMobileDisclosure>
                    ) : (
                      // End of Inner Disclosure
                      // eslint-disable-next-line react/jsx-no-useless-fragment
                      <>
                        {key in menuItemsWithChildren ? (
                          <NavigationMobileDisclosure
                            // Inner Disclosure Button
                            button={
                              <p
                                className={clsx(
                                  'whitespace-nowrap',
                                  '!text-sm  !no-underline',
                                  path.startsWith(`${menuItems[key]}/`)
                                    ? 'text-purple-500'
                                    : 'text-black'
                                )}
                              >
                                {key}
                              </p>
                            }
                          >
                            {/* children: Inner Disclosure Panel */}
                            {/* List of all children */}
                            {Object.keys(menuItemsWithChildren[key]).map(
                              (childKey) => (
                                <li
                                  className="list-none"
                                  key={menuItemsWithChildren[key][childKey]}
                                >
                                  <Link
                                    href={`${menuItems[key]}${menuItemsWithChildren[key][childKey]}`}
                                    className={clsx(
                                      '!text-sm !no-underline',
                                      path ===
                                        `${menuItems[key]}${menuItemsWithChildren[key][childKey]}`
                                        ? 'text-purple-500'
                                        : 'text-gray-500'
                                    )}
                                  >
                                    {childKey}
                                  </Link>
                                </li>
                              )
                            )}
                          </NavigationMobileDisclosure>
                        ) : (
                          <Link
                            href={menuItems[key]}
                            className={clsx(
                              'py-3 !text-sm !no-underline',
                              `${menuItems[key]}` === path
                                ? 'text-purple-500'
                                : 'text-black'
                            )}
                          >
                            {key}
                          </Link>
                        )}
                      </>
                    )}
                  </Fragment>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
