import React, { ReactNode } from 'react';
import { Logo } from '~/components/Layout/Logo';
import { H1 } from '~/components/Text';

type Props = {
  title: string;
  children: ReactNode;
};

// TODO: Maybe we need to prevent the layout from unmounting, see https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting
export const Hero: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="bg-gradient-to-b from-lemon-yellow to-lime-green px-layout pt-20">
      <Logo />
      <div className="mt-10 w-1/2">
        <H1>{title}</H1>
      </div>
      <div className="mt-12">{children}</div>
    </div>
  );
};
