import React, { ReactNode } from 'react';
import { isWiki, wikiLevel } from '~/components/utils';
import { NavigationDesktop } from './NavigationDesktop';
import { NavigationMobile } from './NavigationMobile';

type Props = {
  path: string;
  children?: ReactNode;
};

export const wikilayerColors = {
  topics: 'bg-purple-100', // wiki/wissensspeicher
  topic: 'bg-purple-300',
  measure: 'bg-green-500',
  example: 'bg-lime-300',
};

export const NavigationDesktopAndMobile: React.FC<Props> = ({
  path,
  children,
}) => {
  const bgClassName = isWiki(path)
    ? wikilayerColors[wikiLevel(path)]
    : 'bg-white';
  return (
    <>
      <div className="hidden w-full bg-gray-200 md:block">
        <NavigationDesktop className={bgClassName} path={path} />
      </div>
      <div className="w-full md:hidden">
        <NavigationMobile className={bgClassName} path={path}>
          {children}
        </NavigationMobile>
      </div>
    </>
  );
};
