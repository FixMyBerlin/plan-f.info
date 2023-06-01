import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment } from 'react';
import Logo from '~/components/Layout/assets/Logo.svg';
import { SearchBar } from '~/components/SearchBar';
import {
  menuLinkActiveStyles,
  menuLinkStylesDefault,
} from '~/components/core/links';
import { wikiPath } from '~/components/utils';
import { Link } from '../../core/links/Link';
import { NavigationDesktopDropdown } from './NavigationDesktopDropdown';
import { menuItems } from './menuItems';

type Props = { path: string; className?: string };

export const NavigationDesktop: React.FC<Props> = ({ path, className }) => {
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
    <nav
      className={clsx(
        className,
        'fixed z-10 flex w-full max-w-[1366px] items-center justify-between gap-8 bg-white px-8 py-3'
      )}
    >
      <Link href="/">
        <Logo className="h-8 w-auto shrink-0" />
      </Link>
      <ul className={clsx('flex flex-row items-center gap-4')}>
        {Object.keys(menuItems).map((key) => (
          <Fragment key={key}>
            {key === 'Wissensspeicher' ? (
              <NavigationDesktopDropdown
                // Inner Disclosure Button
                button={
                  <p
                    className={clsx(
                      'whitespace-nowrap !text-sm',
                      path.startsWith(basePath)
                        ? menuLinkActiveStyles
                        : menuLinkStylesDefault
                    )}
                  >
                    {key}
                  </p>
                }
                menuItems={nodes}
                basePath={menuItems[key]}
              />
            ) : (
              <li key={key}>
                <Link
                  href={menuItems[key]}
                  className={clsx(
                    '!text-sm',
                    path.startsWith(menuItems[key])
                      ? menuLinkActiveStyles
                      : menuLinkStylesDefault
                  )}
                >
                  {key}
                </Link>
              </li>
            )}
          </Fragment>
        ))}
        <SearchBar className="!w-60" />
      </ul>
    </nav>
  );
};
