import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
  // breakpoint?: 'md:grid-cols-2' | 'lg:grid-cols-2'; // breakpoint - for 2 cols
};
export const CardWrapper: React.FC<Props> = ({
  children,
  className,
  // breakpoint = 'md:grid-cols-2',
}) => {
  return (
    <div
      className={clsx(
        className,
        // breakpoint || 'md:grid-cols-2',
        'grid grid-cols-1 gap-5 md:grid-cols-2'
      )}
    >
      {children}
    </div>
  );
};
