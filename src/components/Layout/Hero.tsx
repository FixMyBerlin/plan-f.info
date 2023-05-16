import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { H2 } from '../Text';

type Props = {
  title: string;
  children?: ReactNode;
  breadcrumbs?: ReactNode;
  className?: string;
  bgColor?: string;
};

export const Hero: React.FC<Props> = ({
  breadcrumbs,
  className,
  title,
  children,
  bgColor = 'bg-white',
}) => {
  return (
    <section
      className={clsx(
        'relative mb-12 flex flex-col justify-center gap-6 rounded-b-3xl px-5 pb-8 pt-32 md:gap-12 md:pb-16 md:pl-8 lg:px-10',
        className,
        bgColor
      )}
    >
      {breadcrumbs && <div className="hidden md:block">{breadcrumbs}</div>}
      <div>{children}</div>
      <H2>{title}</H2>
    </section>
  );
};
