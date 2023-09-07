import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
};

const leadingClassName = 'leading-[1.8] md:leading-[1.8]';

export const H1: React.FC<Props> = ({ id, className, children }) => {
  return (
    <h1
      id={id}
      className={clsx(
        'mb-5 text-3xl font-bold text-black md:mb-10 md:text-4xl',
        className,
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
        '!leading:snug mb-2 mt-8 font-mono text-xl font-normal text-black md:mb-5 md:mt-10 md:text-3xl md:!leading-normal',
        className,
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
        'mb-4 mt-8 text-lg font-bold text-black md:mb-6 md:mt-10 md:text-xl',
        className,
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
        'mb-4 mt-4 text-sm text-gray-700 md:mb-6 md:mt-6 md:text-base',
        leadingClassName,
        className,
      )}
    >
      {children}
    </p>
  );
};
export const Caption: React.FC<Props> = ({ id, className, children }) => {
  return (
    <figcaption
      id={id}
      className={clsx(
        'mt-3 text-xs text-gray-400',
        leadingClassName,
        className,
      )}
    >
      {children}
    </figcaption>
  );
};
