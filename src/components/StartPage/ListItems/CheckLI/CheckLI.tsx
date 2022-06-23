import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const CheckLI: React.FC<Props> = ({ children }) => {
  return (
    <li className="mt-2 bg-[url('check.png')] bg-[length:16px] bg-left bg-no-repeat pl-8">
      <span className="-translate-y-5">{children}</span>
    </li>
  );
};
