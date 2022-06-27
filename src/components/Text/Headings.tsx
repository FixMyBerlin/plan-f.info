import React, { ReactNode } from 'react';
import { classNames } from '../utils';

type Props = {
  children: ReactNode;
  className?: string;
};

export const H1: React.FC<Props> = ({ className, children }) => {
  return (
    <h1
      className={classNames(
        'font-apercuMono text-[32px] leading-[44px]',
        className
      )}
    >
      {children}
    </h1>
  );
};

export const H2: React.FC<Props> = ({ className, children }) => {
  return (
    <h2
      className={classNames(
        'font-apercu text-[32px] font-bold text-dark-gray',
        className
      )}
    >
      {children}
    </h2>
  );
};

export const H3: React.FC<Props> = ({ className, children }) => {
  return (
    <h3
      className={classNames(
        'font-apercu text-[24px] font-bold text-dark-gray',
        className
      )}
    >
      {children}
    </h3>
  );
};
