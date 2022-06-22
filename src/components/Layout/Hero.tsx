import React, { ReactNode } from 'react';
import Logo from './assets/Logo.svg';
import { Content } from './Content';

type Props = {
  title: string;
  children: ReactNode;
};

// TODO: Maybe we need to prevent the layout from unmounting, see https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting
export const Hero: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="bg-gradient-to-b from-lemon-yellow to-lime-green pt-20 pb-12">
      <Content>
        <Logo />
        <div className="mt-6 lg:w-1/2">
          <h1 className="font-apercuMono text-[24px] leading-[33px]">
            {title}
          </h1>
        </div>
        <div className="mt-10">{children}</div>
      </Content>
    </div>
  );
};
