import React from 'react';
import { Footer } from './Footer';
import { HelmetSeo, Props as HelmetProps } from './Helmet/HelmetSeo';

type Props = {
  children?: React.ReactNode;
} & HelmetProps;

// TODO: Maybe we need to prevent the layout from unmounting, see https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting
export const Layout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div className="relative flex h-full flex-col overflow-x-hidden text-[16px] text-dark-gray">
      <HelmetSeo {...props} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
