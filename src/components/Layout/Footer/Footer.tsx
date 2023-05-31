import clsx from 'clsx';
import React, { Fragment } from 'react';
import { Fundings } from '~/components/StartPage';
import { Link } from '~/components/core/links/Link';
import { menuItems, menuItemsWithChildren } from '../Navigation/menuItems';
import LogoNegative from '../assets/LogoNegative.svg';
import { FooterLinks } from './FooterLinks/FooterLinks';
import { SocialMediaLinks } from './SocialMediaLinks/SocialMediaLinks';

export const Footer: React.FC = () => {

  return (
    <>
      <Fundings />
      <footer
        className="z-0 bg-black p-10 sm:px-12"
        aria-labelledby="footer-heading"
      >
        <ul
          className={clsx(
            'grid grid-cols-2 gap-10 pb-6 text-sm text-gray-400 sm:grid-cols-3 md:flex md:flex-row md:justify-between'
          )}
        >
          {Object.keys(menuItems).map((key) => (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <Fragment key={key}>
              {key === 'Wissensspeicher' ? (
                // Inner Disclosure
                <div className="flex flex-col gap-3">
                  {/* First Link: Wissensspeicher */}
                  <p className="text-sm uppercase text-gray-400">{key}</p>
                  <Link href={menuItems[key]} className={clsx('!text-sm')}>
                    Handlungsfelder
                  </Link>
                  <Link href="/" className={clsx('!text-sm')}>
                    Suche
                  </Link>
                </div>
              ) : (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <>
                  {key in menuItemsWithChildren ? (
                    <div className="flex flex-col gap-3">
                      <p className="!text-sm uppercase !text-gray-400">{key}</p>
                      {/* List of all children */}
                      {Object.keys(menuItemsWithChildren[key]).map(
                        (childKey) => (
                          <li
                            className="max-w-[150px] list-none !truncate"
                            key={menuItemsWithChildren[key][childKey]}
                          >
                            <Link
                              href={`${menuItems[key]}${menuItemsWithChildren[key][childKey]}`}
                              className={clsx(' !text-sm')}
                            >
                              {childKey}
                            </Link>
                          </li>
                        )
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <p className="!text-sm uppercase !text-gray-400">{key}</p>
                      <Link
                        href={menuItems[key]}
                        className="!text-sm !text-gray-400"
                      >
                        {key}
                      </Link>
                    </div>
                  )}
                </>
              )}
            </Fragment>
          ))}
        </ul>
        <div className="flex flex-col justify-between gap-8 border-t border-gray-400 pt-8 text-sm sm:flex-row">
          <div className="flex flex-col justify-between gap-8">
            <Link href="/">
              <LogoNegative height={35} width={100} />
            </Link>
            <SocialMediaLinks />
          </div>
          <div className="flex flex-col justify-end gap-6 sm:items-end">
            <FooterLinks />
          </div>
        </div>
      </footer>
    </>
  );
};
