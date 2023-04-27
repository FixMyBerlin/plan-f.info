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
        className="z-0 flex flex-col justify-between gap-6 bg-black px-10 py-10 text-sm sm:flex-row sm:px-12"
        aria-labelledby="footer-heading"
      >
        <div className="flex flex-col gap-8">
          <Link href="/">
            <LogoNegative height={48} width={127} />
          </Link>
        </div>
        <div className="flex flex-col gap-8 sm:flex-col-reverse sm:items-end">
          <FooterLinks />
          <SocialMediaLinks />
        </div>
      </footer>
    </>
  );
};
