import clsx from 'clsx';
import React from 'react';
import { Link } from '~/components/links/Link';
import { FooterMenuItem } from '../const/footerLinks.const';

type Props = {
  linkList: FooterMenuItem[];
  className?: string;
};

export const FooterLinkList: React.FC<Props> = ({ linkList, className }) => {
  return (
    <ul className={clsx('flex justify-start gap-4 sm:justify-end', className)}>
      {linkList.map((item) => (
        <li key={item.name}>
          <Link href={item.to} className="text-gray-400">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
