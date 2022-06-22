import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const H1: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="font-apercuMono text-[32px] leading-[44px]">{children}</h1>
  );
};

export const H2: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="font-apercu text-[32px] font-bold text-dark-gray">
      {children}
    </h1>
  );
};

export const H3: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="font-apercu text-[24px] font-bold text-dark-gray">
      {children}
    </h1>
  );
};
