import clsx from 'clsx';
import React from 'react';
import { Link } from '~/components/core/links/Link';

const legal = [
  { name: 'Kontakt & Impressum', to: '/impressum/' },
  { name: 'Datenschutz', to: '/datenschutz/' },
];

type Props = {
  className?: string;
};

export const FooterLinks: React.FC<Props> = ({ className }) => {
  return (
    <ul className={clsx('flex justify-start gap-4 sm:justify-end', className)}>
      {legal.map((item) => (
        <li key={item.name}>
          <Link href={item.to} className="text-gray-400">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
