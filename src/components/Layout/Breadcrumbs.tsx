import React from 'react';

import { HomeIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { Link } from '../core/links/Link';
import { wikilayerColors } from './Navigation/NavigationDesktopAndMobile';

type Props = { names: string[]; prefix?: string };

export const Breadcrumbs: React.FC<Props> = ({ names = [], prefix = './' }) => {
  const n = names.length;
  const wikiColorsArray = Object.values(wikilayerColors);

  // const testLinkDisplays = [
  //   'Radverkehr in Schulen, Kinder- und Jugendclubs und Kindergärten',
  //   'WissensspsMobilitätsbildunFahrradkurse, Fahrradflotten, Ausflügssssddfeicher.',
  //   'Mon, AusflügeMobilitätsbildunFahrradkurse, Fahrradflotten, Ausflüg',
  //   'MobilitätsbildunFahrradkurse, Fahrradflotten, Ausflüge',
  // ];
  return (
    <nav className="" aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-2">
        <li>
          <div className="flex items-center">
            <Link href="/">
              <HomeIcon
                className="mb-2 mr-2 h-4 w-4 flex-shrink-0 sm:mb-0"
                aria-hidden="true"
              />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {names.map((name, i) => (
          <li key={name}>
            <div className="flex items-center gap-2">
              <div
                className={clsx(
                  'h-4 w-[6px] border border-black',
                  wikiColorsArray[i]
                )}
              />
              <Link
                className="max-w-[9rem] truncate text-sm no-underline md:max-w-[12rem] lg:max-w-none"
                href={prefix + '../'.repeat(n - i - 1)}
              >
                {name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};
