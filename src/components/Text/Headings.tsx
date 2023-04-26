import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
};

// p & heading configuaretions here should be always in sync with Prose.tsx

export const H1: React.FC<Props> = ({ id, className, children }) => {
  return (
    <h1
      id={id}
      className={clsx('mb-3 text-[28px] font-bold lg:mb-6', className)}
    >
      {children}
    </h1>
  );
};

export const H2: React.FC<Props> = ({ id, className, children }) => {
  return (
    <h2
      id={id}
      className={clsx(
        'mt-0.5 mb-3 font-mono text-xl font-normal lg:mt-1 lg:mb-6',
        className
      )}
    >
      {children}
    </h2>
  );
};

export const H3: React.FC<Props> = ({ id, className, children }) => {
  return (
    <h3
      id={id}
      className={clsx(
        'mt-2 mb-3 text-base font-bold md:text-xl lg:mt-4 lg:mb-6 ',
        className
      )}
    >
      {children}
    </h3>
  );
};
export const P: React.FC<Props> = ({ id, className, children }) => {
  return (
    <p id={id} className={clsx('mt-1 mb-1 lg:mt-2 lg:mb-2', className)}>
      {children}
    </p>
  );
};
