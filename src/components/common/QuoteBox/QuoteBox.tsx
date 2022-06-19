import classNames from 'classnames';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  color: 'pastel-purple' | 'lime-green';
  mirror?: boolean;
};

export const QuoteBox: React.FC<Props> = ({
  children,
  color,
  mirror = false,
}) => {
  const style = mirror
    ? 'rounded-tr-full rounded-tl-md'
    : 'rounded-tl-full rounded-tr-md';
  return (
    <div
      className={classNames(
        style,
        `mt-8 bg-${color} rounded-b-full text-center text-xl`
      )}
    >
      <p className="p-8">{children}</p>
    </div>
  );
};
