import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};
export const Section: React.FC<Props> = ({ children, className }) => {
  return (
    <section className={clsx('rounded-b-3xl p-8 md:p-12', className)}>
      {children}
    </section>
  );
};
