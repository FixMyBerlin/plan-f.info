import React from 'react';
import { PageProps } from 'gatsby';
import { Footer } from './Footer';
import { Navigation } from '.';

type Props = {
  children?: React.ReactNode;
};
// TODO: Maybe find a better way to manipulate the path to the first thre directories
const Layout: React.FC<Props & PageProps> = ({ path, children }) => {
  const dirs = path.split('/');
  return (
    <div className="relative flex h-full flex-col overflow-x-hidden bg-gray-200 text-black">
      <div className="mx-auto w-full max-w-7xl bg-white">
        <div className="flex flex-row">
          <Navigation
            path={`${dirs.slice(0, Math.min(dirs.length - 1, 4)).join('/')}/`}
          />

          <main className="flex-grow">{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
