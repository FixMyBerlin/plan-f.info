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
      <footer className="z-0 " aria-labelledby="footer-heading">
        <div className="flex flex-col justify-between gap-8 bg-black px-10 py-10 text-sm sm:flex-row sm:px-12">
          <div className="flex flex-col justify-between gap-8">
            <Link href="/">
              <LogoNegative height={48} width={127} />
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
