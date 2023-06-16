import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};
export const CardWrapperTopicsLandingPage: React.FC<Props> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        'grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'
      )}
    >
      {children}
    </div>
  );
};
