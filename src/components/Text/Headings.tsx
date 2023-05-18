import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export const H1: React.FC<Props> = ({ id, className, children }) => {
  return (
    <h1
      id={id}
      className={clsx(
        'mb-3 text-3xl font-bold text-black md:mb-6 md:text-4xl',
        className
      )}
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
        'mb-3 mt-0.5 font-mono text-xl font-normal text-black md:mb-6 md:mt-1 md:text-3xl',
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
        'mb-3 mt-2 text-lg font-bold text-black md:mb-6 md:mt-4 md:text-xl ',
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
        'mb-2 mt-1 text-sm leading-relaxed text-gray-700 md:mb-3 md:mt-2 md:text-base',
        className
      )}
    >
      {children}
    </p>
  );
};
export const Caption: React.FC<Props> = ({ id, className, children }) => {
  return (
    <p
      id={id}
      className={clsx(
        'mb-2 mt-1 text-xs leading-relaxed text-gray-700 md:mb-3 md:mt-2',
        className
      )}
    >
      {children}
    </p>
  );
};
