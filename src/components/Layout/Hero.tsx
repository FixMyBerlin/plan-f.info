import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { H2, H3 } from '../Text';

type Props = {
  title?: string;
  children?: ReactNode;
  breadcrumbs?: ReactNode;
  className?: string;
  bgColor?: string;
  subtitle?: string;
};

export const Hero: React.FC<Props> = ({
  breadcrumbs,
  className,
  title,
  subtitle,
  children,
  bgColor = 'bg-white',
}) => {
  return (
    <section
      className={clsx(
        'relative mb-4 flex flex-col justify-center gap-4 rounded-b-3xl px-8 pb-8 pt-36 md:mb-6 md:px-12 md:pb-16',
        className,
        bgColor
      )}
    >
      {breadcrumbs && <div className="hidden md:block">{breadcrumbs}</div>}
      {children && <div>children</div>}
      {(title || subtitle) && (
        <div>
          {title && <H2>{title}</H2>}
          {subtitle && <H3>{subtitle}</H3>}
        </div>
      )}
    </section>
  );
};
