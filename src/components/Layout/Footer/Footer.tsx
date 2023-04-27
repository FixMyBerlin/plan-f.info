import React from 'react';
import { Fundings } from '~/components/StartPage';
import { Link } from '~/components/core/links/Link';
import LogoNegative from '../assets/LogoNegative.svg';
import { FooterLinks } from './FooterLinks/FooterLinks';
import { SocialMediaLinks } from './SocialMediaLinks/SocialMediaLinks';

export const Footer: React.FC = () => {
  return (
    <>
      <Fundings />
      <footer
        className="z-0 flex flex-col justify-between gap-8 bg-black px-10 py-10 text-sm sm:flex-row sm:px-12"
        aria-labelledby="footer-heading"
      >
        <div className="flex flex-col justify-between gap-6 gap-8">
          <Link href="/">
            <LogoNegative height={48} width={127} />
          </Link>
          <p className="hidden text-sm text-gray-400 sm:block">
            © 2022 plan GmbH
          </p>
        </div>
        <div className="flex flex-col justify-between gap-6 sm:items-end">
          <SocialMediaLinks />
          <FooterLinks />
          <p className="text-sm text-gray-400 sm:hidden">© 2022 plan GmbH</p>
        </div>
      </footer>
    </>
  );
};
