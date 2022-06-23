import React from 'react';
import { Link } from 'gatsby';
import { FooterLinkList, SocialMediaLinks } from './FooterLinks';
import LogoNegative from '../assets/LogoNegative.svg';
import { footerLinks } from './const';

export const Footer: React.FC = () => {
  const { pages, legal } = footerLinks;
  return (
    <footer
      className="z-0 bg-dark-gray pb-16 pt-14"
      aria-labelledby="footer-heading"
    >
      <div className="pl-4 sm:pl-[3vw]">
        <div className="flex flex-row">
          <Link className="grow-0" to="/">
            <LogoNegative className="h-[40px] w-[120px] sm:h-[60px] sm:w-[160px]" />
          </Link>
          <FooterLinkList
            linkList={pages}
            className="flex-grow px-4 sm:px-[3vw]"
          />
          <FooterLinkList
            linkList={legal}
            className="ml-auto mr-4 flex-none sm:pr-[12vw]"
          />
        </div>
        <SocialMediaLinks />
      </div>
    </footer>
  );
};
