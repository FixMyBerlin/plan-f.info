import React from 'react';
import { NavigationDesktop } from './NavigationDesktop';
import { NavigationMobile } from './NavigationMobile';

type Props = { path: string };

export const NavigationDesktopAndMobile: React.FC<Props> = ({ path }) => {
  const wikilayerColors = {
    3: 'bg-purple-100', // wissensspeicher
    4: 'bg-purple-300', // topic
    5: 'bg-green-500', // measure
    6: 'bg-lime-300', // example
  };

  // nav bg color
  let bgClassName = '';
  if (path.split('/').length >= 3 && path.split('/')[1] === 'handlungsfelder') {
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
        <NavigationMobile className={bgClassName} path={path} />
      </div>
    </>
  );
};
