import React, { ReactNode } from 'react';

type Props = {
  value: number;
  children: ReactNode;
};

export const CountLI: React.FC<Props> = ({ value, children }) => {
  return (
    <li className="mt-2 flex flex-row">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-green font-apercuMono text-[10px] font-bold">
        {value}
      </div>
      <p className="pl-8">{children}</p>
    </li>
  );
};
