import classNames from 'classnames';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  mirror?: boolean;
};

export const QuoteBox: React.FC<Props> = ({ children, mirror = false }) => {
  const style = mirror
    ? 'rounded-tl-[10rem] rounded-tr-sm bg-pastel-purple'
    : 'rounded-tr-[10rem] rounded-tl-sm bg-lime-green';
  return (
    <div
      className={classNames(
        style,
        `mt-8 min-w-min rounded-b-[10rem] font-apercuMono text-[16px]`
      )}
    >
      <p className="p-16">{children}</p>
    </div>
  );
};
