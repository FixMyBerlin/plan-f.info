import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};
export const Section: React.FC<Props> = ({ children, className }) => {
  return (
    <section
      className={clsx('my-5 rounded-b-3xl px-5 md:my-10 md:px-10', className)}
    >
      {children}
    </section>
  );
};
