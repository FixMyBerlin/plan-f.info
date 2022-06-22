import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// TODO: Maybe we need to prevent the layout from unmounting, see https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting
export const Content: React.FC<Props> = ({ children }) => {
  return <div className="mx-auto max-w-[1400px] px-layout">{children}</div>;
};
