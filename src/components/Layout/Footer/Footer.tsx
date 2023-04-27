import { Link } from 'gatsby';
import React from 'react';
import { Fundings } from '~/components/StartPage';
import LogoNegative from '../assets/LogoNegative.svg';
import { FooterLinkList, SocialMediaLinks } from './FooterLinks';
import { footerLinks } from './const';

export const Footer: React.FC = () => {
  const { legal } = footerLinks;
  return (
    <>
      <Fundings />

      <footer
        className="z-0 flex flex-col justify-between gap-6 bg-black py-10 px-10 text-sm sm:flex-row sm:px-12"
        aria-labelledby="footer-heading"
      >
        <div className="ga flex flex-col gap-8">
          <Link className="" to="/">
            <LogoNegative height={48} width={127} />
          </Link>
          <p className="hidden text-gray-400 sm:block">© 2022 plan GmbH</p>
        </div>
        <div className="flex flex-col gap-8 sm:flex-col-reverse sm:items-end">
          <FooterLinkList linkList={legal} />
          <SocialMediaLinks />
          <p className="text-gray-400  sm:hidden">© 2022 plan GmbH</p>
        </div>
      </footer>
    </>
  );
};
