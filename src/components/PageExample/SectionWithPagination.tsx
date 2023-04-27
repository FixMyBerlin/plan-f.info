import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};
export const SectionWithPagination: React.FC<Props> = ({
  children,
  className,
}) => {
  return (
    <section className={clsx(className, 'rounded-3xl p-5 lg:p-10')}>
      {children}
    </section>
  );
};
