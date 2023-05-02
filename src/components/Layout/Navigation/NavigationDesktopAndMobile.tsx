import React from 'react';
import { NavigationDesktop } from './NavigationDesktop';
import { NavigationMobile } from './NavigationMobile';

type Props = { path: string };

export const NavigationDesktopAndMobile: React.FC<Props> = ({ path }) => {
  return (
    <>
      <div className="hidden w-full md:block">
        <NavigationDesktop path={path} />
      </div>
      <div className="w-full md:hidden">
        <NavigationMobile path={path} />
      </div>
    </>
  );
};
