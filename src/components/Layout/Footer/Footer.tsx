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
      <div className="flex flex-row">
        <div className="pl-4 md:pl-[3vw]">
          <Link to="/">
            <LogoNegative />
          </Link>
          <SocialMediaLinks />
        </div>

        <FooterLinkList linkList={pages} className="flex-grow px-[3vw]" />
        <FooterLinkList
          linkList={legal}
          className="ml-auto flex-none pr-4 md:pr-[12vw]"
        />
      </div>
    </footer>
  );
};
