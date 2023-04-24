import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};
export const Section: React.FC<Props> = ({ children, className }) => {
  return (
    <section className={clsx(className, 'lg:p-15 rounded-b-3xl p-10')}>
      {children}
    </section>
  );
};
