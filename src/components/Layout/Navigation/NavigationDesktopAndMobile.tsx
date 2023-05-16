import React, { ReactNode } from 'react';
import { NavigationDesktop } from './NavigationDesktop';
import { NavigationMobile } from './NavigationMobile';

type Props = {
  path: string;
  children?: ReactNode;
  bgColor: string;
};

export const NavigationDesktopAndMobile: React.FC<Props> = ({
  path,
  children,
  bgColor,
}) => {
  return (
    <>
      <div className="hidden w-full bg-gray-200 md:block">
        <NavigationDesktop className={bgColor} path={path} />
      </div>
      <div className="w-full md:hidden">
        <NavigationMobile className={bgColor} path={path}>
          {children}
        </NavigationMobile>
      </div>
    </>
  );
};
