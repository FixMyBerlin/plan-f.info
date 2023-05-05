import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};
export const Section: React.FC<Props> = ({ children, className }) => {
  return (
    <section className={clsx('rounded-b-3xl p-5 md:p-10', className)}>
      {children}
    </section>
  );
};
