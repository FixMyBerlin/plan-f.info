import clsx from 'clsx';
import React from 'react';
import Logo from '~/components/Layout/assets/Logo.svg';
import { Link } from '../../core/links/Link';
import { menuItems } from './menuItems';

type Props = { path: string; className?: string };

export const NavigationDesktop: React.FC<Props> = ({ path, className }) => {
  return (
    <nav
      className={clsx(
        className,
        'fixed z-10 flex w-full max-w-[1366px] items-center justify-between gap-8 bg-white px-8 py-3'
      )}
    >
      <Link href="/">
        <Logo className="h-8 w-auto shrink-0" />
      </Link>
      <ul className={clsx('flex flex-row gap-4')}>
        {Object.keys(menuItems).map((key) => (
          <li key={key}>
            <Link
              href={menuItems[key]}
              className={clsx(
                '!text-sm',
                `${menuItems[key]}/` === path
                  ? 'font-bold text-black'
                  : 'text-gray-600 decoration-gray-600'
              )}
            >
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
