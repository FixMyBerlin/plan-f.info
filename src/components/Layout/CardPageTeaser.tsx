import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { H2, P } from '../Text';
import { LinkButtonWithArrowBlack } from './LinkButtonWithArrowBlack';

type Props = {
  title: string;
  link: string;
  children?: ReactNode;
  className?: string;
};

export const PageTeaserCard: React.FC<Props> = ({
  className,
  link,
  title,
  children,
}) => {
  return (
    <section className={clsx('bg-gray-50 p-5', className)}>
      <H2 className="!mt-0">{title}</H2>
      <P>{children}</P>
      <LinkButtonWithArrowBlack href={link}>
        Weiterlesen
      </LinkButtonWithArrowBlack>
    </section>
  );
};
