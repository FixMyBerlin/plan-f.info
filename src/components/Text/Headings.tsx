import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const H1: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="font-apercuMono text-[34px] leading-[44px]">{children}</h1>
  );
};

export const H2: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="font-apercu text-[32px] font-bold text-[#353535]">
      {children}
    </h1>
  );
};
