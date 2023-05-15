import React, { ReactNode } from 'react';
import { NavigationDesktop } from './NavigationDesktop';
import { NavigationMobile } from './NavigationMobile';

type Props = { path: string; children: ReactNode };

export const NavigationDesktopAndMobile: React.FC<Props> = ({
  path,
  children,
}) => {
  const wikilayerColors = {
    3: 'bg-purple-100', // wissensspeicher
    4: 'bg-purple-300', // topic
    5: 'bg-green-500', // measure
    6: 'bg-lime-300', // example
  };

  // nav bg color
  let bgClassName = '';
  if (path.split('/').length >= 3 && path.split('/')[1] === 'wissensspeicher') {
    bgClassName = wikilayerColors[path.split('/').length];
  } else {
    bgClassName = 'bg-white';
  }

  return (
    <>
      <div className="hidden w-full md:block">
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
