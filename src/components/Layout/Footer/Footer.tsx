import clsx from 'clsx';
import React from 'react';
import { Fundings } from '~/components/StartPage';
import { Link } from '~/components/core/links/Link';
import { menuItems } from '../Navigation/menuItems';
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
            'grid grid-cols-2 gap-6 pb-6 text-sm sm:grid-cols-3 md:flex md:flex-row md:justify-between'
          )}
        >
          {Object.keys(menuItems).map((key) => (
            <li key={key}>
              <Link href={menuItems[key]} className="uppercase text-gray-400">
                {key}
              </Link>
            </li>
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
