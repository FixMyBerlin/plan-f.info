import React, { ReactNode } from 'react';
import { NavigationDesktop } from './NavigationDesktop';
import { NavigationMobile } from './NavigationMobile';

type Props = {
  path: string;
  children?: ReactNode;
  isWiki?: boolean;
  layer?: string;
};

export const wikilayerColors = {
  topics: 'bg-purple-100',
  topic: 'bg-purple-300',
  measure: 'bg-green-500',
  example: 'bg-lime-300',
};

export const NavigationDesktopAndMobile: React.FC<Props> = ({
  path,
  children,
  isWiki,
  layer,
}) => {
  // // nav bg color
  // let bgClassName = '';
  // if (path.split('/').length >= 3 && path.split('/')[1] === 'wissensspeicher') {
  //   bgClassName = wikilayerColors[path.split('/').length];
  // } else {
  //   bgClassName = 'bg-white';
  // }
  let bgClassName = '';

  bgClassName = isWiki ? wikilayerColors[layer] : 'bg-white';

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
