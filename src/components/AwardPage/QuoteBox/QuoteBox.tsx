import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  mirror?: boolean;
};

export const QuoteBox: React.FC<Props> = ({ children, mirror = false }) => {
  const style = mirror
    ? 'rounded-tl-[6rem] lg:rounded-tl-[10rem] rounded-tr-sm bg-purple-300 text-right'
    : 'rounded-tr-[6rem] lg:rounded-tr-[10rem] rounded-tl-sm bg-lime-300 text-left';
  return (
    <div
      className={clsx(
        style,
        `mt-8 w-fit min-w-min rounded-b-[6rem] font-mono lg:rounded-b-[10rem]`
      )}
    >
      <p className="p-8 lg:p-16">{children}</p>
    </div>
  );
};
