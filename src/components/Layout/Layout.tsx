import React from 'react';
import { PageProps } from 'gatsby';
import { Footer } from './Footer';
import { SideNavigation } from './Navigation/SideNavigation';
import { NavigationDesktop } from './Navigation/NavigationDesktop';
import { NavigationMobile } from './Navigation/NavigationMobile';

type Props = {
  children?: React.ReactNode;
};
// TODO: Maybe find a better way to manipulate the path to the first thre directories
const Layout: React.FC<Props & PageProps> = ({ path, children }) => {
  const dirs = path.split('/');
  return (
    <div className="relative flex h-full flex-col overflow-x-hidden">
      <div className="hidden w-full md:block">
        <NavigationDesktop
          path={`${dirs.slice(0, Math.min(dirs.length - 1, 4)).join('/')}/`}
        />
      </div>
      <div className="w-full md:hidden">
        <NavigationMobile
          path={`${dirs.slice(0, Math.min(dirs.length - 1, 4)).join('/')}/`}
        />
      </div>

      <div className="mx-auto w-full bg-white">
        <div className="flex w-full flex-row">
          <div className="hidden md:block">
            <SideNavigation
              path={`${dirs.slice(0, Math.min(dirs.length - 1, 4)).join('/')}/`}
            />
          </div>

          <main className="flex-grow">{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
