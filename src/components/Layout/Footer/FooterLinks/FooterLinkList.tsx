import classNames from 'classnames';
import React from 'react';
import { TextLink } from '~/components/Link';
import { FooterMenuItem } from '../const/footerLinks.const';

type Props = {
  linkList: FooterMenuItem[];
  className?: string;
};

export const FooterLinkList: React.FC<Props> = ({ linkList, className }) => {
  return (
    <ul className={classNames('space-y-3', className)}>
      {linkList.map((item) => (
        <li key={item.name}>
          <TextLink
            to={item.to}
            external={item.external}
            className="block font-apercuMono text-[14px] leading-5 text-white no-underline decoration-white decoration-1 "
          >
            {item.name}
          </TextLink>
        </li>
      ))}
    </ul>
  );
};
