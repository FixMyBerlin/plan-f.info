import React from 'react';
import { Footer } from './Footer';

type Props = {
  children?: React.ReactNode;
};
// TODO: Maybe we need to prevent the layout from unmounting, see https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative flex h-full flex-col overflow-x-hidden text-[16px] text-dark-gray">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
