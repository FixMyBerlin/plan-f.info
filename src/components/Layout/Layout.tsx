import { PageProps } from 'gatsby';
import React from 'react';
import { Footer } from './Footer';
import { NavigationDesktopAndMobile } from './Navigation/NavigationDesktopAndMobile';
import { SideNavigation } from './Navigation/SideNavigation';
import { ScrollTopLink } from './ScrollTopLink';

type Props = {
  children?: React.ReactNode;
};
// TODO: Maybe find a better way to manipulate the path to the first thre directories
const Layout: React.FC<Props & PageProps> = ({ path, children }) => {
  const truncatedPath = `/${path
    .slice(1, -1) // omit leading and trailing slash (we add them after depth limit)
    .split('/')
    .slice(0, 3) // limit the path depth to 3
    .join('/')}/`;
  return (
    <div className="relative flex h-full flex-col overflow-x-hidden bg-gray-200">
      <div className="relative mx-auto w-full max-w-7xl bg-white">
        <ScrollTopLink />
        <NavigationDesktopAndMobile path={path} />

        <div className="mx-auto w-full bg-white">
          <div className="flex w-full flex-row">
            <div className="hidden xl:block">
              <SideNavigation path={truncatedPath} />
            </div>
            <div className="flex-grow">
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
