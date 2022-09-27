import React from 'react';
import { PageProps } from 'gatsby';
import { Footer } from './Footer';
import { Navigation } from '.';

type Props = {
  children?: React.ReactNode;
};
// TODO: Maybe we need to prevent the layout from unmounting, see https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting
const Layout: React.FC<Props & PageProps> = ({ path, children }) => {
  return (
    <div className="relative flex h-full flex-col overflow-x-hidden text-[16px] text-dark-gray">
      <Navigation path={path.split('/').slice(0, 4).join('/')} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
