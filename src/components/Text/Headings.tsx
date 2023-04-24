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
        'font-mono pb-4 text-[32px] leading-[44px]',
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
        'font-sans pb-2 text-[32px] font-bold text-black',
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
      className={classNames(
        'font-sans pb-1 text-[24px] font-bold text-black',
        className
      )}
    >
      {children}
    </h3>
  );
};
