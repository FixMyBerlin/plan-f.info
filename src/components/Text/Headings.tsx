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
      className={clsx('mb-3 text-3xl font-bold md:mb-6 md:text-4xl', className)}
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
        'mb-3 mt-0.5 font-mono text-xl font-normal md:mb-6 md:mt-1 md:text-2xl',
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
        'mb-3 mt-2 text-lg font-bold uppercase md:mb-6 md:mt-4 md:text-xl ',
        className
      )}
    >
      {children}
    </h3>
  );
};
export const P: React.FC<Props> = ({ id, className, children }) => {
  return (
    <p
      id={id}
      className={clsx(
        'mb-2 mt-1 text-sm leading-relaxed md:mb-3 md:mt-2 md:text-base',
        className
      )}
    >
      {children}
    </p>
  );
};
