import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const H1: React.FC<Props> = ({ children }) => {
  return <h1 className="mt-12 text-4xl font-bold">{children}</h1>;
};

export const H2: React.FC<Props> = ({ children }) => {
  return <h1 className="mt-12 text-2xl font-bold">{children}</h1>;
};
