import React from 'react';
import { footerLinks } from './const';
import { FooterLinkList } from './FooterLinks/FooterLinkList';
import LogoNegative from '../assets/LogoNegative.svg';

export const Footer: React.FC = () => {
  const { pages, legal } = footerLinks;
  return (
    <footer
      className="z-0 bg-dark-gray pb-20 pt-14"
      aria-labelledby="footer-heading"
    >
      <div className="flex flex-row">
        <div className="px-[3vw]">
          <LogoNegative />
        </div>
        <FooterLinkList linkList={pages} className="flex-grow px-[3vw]" />
        <FooterLinkList
          linkList={legal}
          className="ml-auto flex-none pr-[15vw]"
        />
      </div>
    </footer>
  );
};
