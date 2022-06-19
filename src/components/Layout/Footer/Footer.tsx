import React from 'react';
import { LogoNegative } from '~/components/Layout/Logo';
import { footerLinks } from './const';
import { FooterLinkList } from './FooterLinks/FooterLinkList';

export const Footer: React.FC = () => {
  const { pages, legal } = footerLinks;
  return (
    <footer
      className="z-0 bg-dark-gray pt-6 pb-12"
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
