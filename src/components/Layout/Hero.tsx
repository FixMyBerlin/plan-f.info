import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { H2 } from '../Text';
import { Section } from './Section';

type Props = {
  title: string;
  children?: ReactNode;
  className?: string;
};

// TODO: Maybe we need to prevent the layout from unmounting, see https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting
export const Hero: React.FC<Props> = ({ className, title, children }) => {
  return (
    <Section className={clsx('mb-12', className)}>
      <H2 className="mt-20">{title}</H2>
      <div className="mt-10">{children}</div>
    </Section>
  );
};
