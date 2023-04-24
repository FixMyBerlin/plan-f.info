import React, { ReactNode } from 'react';
import { classNames } from '../utils';

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export const H1: React.FC<Props> = ({ id, className, children }) => {
  return (
    <h1
      id={id}
      className={classNames(
        'text-[28px] font-bold md:text-4xl lg:text-[42px]',
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
      className={classNames(
        'font-mono text-xl font-normal md:text-2xl',
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
      className={classNames('text-base font-bold md:text-xl', className)}
    >
      {children}
    </h3>
  );
};
