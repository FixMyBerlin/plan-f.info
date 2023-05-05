import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { H2 } from '../Text';

type Props = {
  title: string;
  children?: ReactNode;
  className?: string;
};

// TODO: Maybe we need to prevent the layout from unmounting, see https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting
export const Hero: React.FC<Props> = ({ className, title, children }) => {
  return (
    <section
      className={clsx(
        'relative mb-12 flex flex-col justify-center gap-6 rounded-b-3xl px-5 pb-8 pt-24 md:gap-12 md:pb-16 md:pl-8 md:pt-32 lg:px-10',
        className
      )}
    >
      <div className="">{children}</div>
      <H2 className="">{title}</H2>
    </section>
  );
};
