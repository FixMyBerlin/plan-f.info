import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode; // image
  copyright: string;
  className?: string;
};
export const ImageWithCopyright: React.FC<Props> = ({
  children,
  className,
  copyright,
}) => {
  return (
    <div className={clsx(className, '')}>
      {children}
      <p className="mt-1 text-sm text-gray-400">{`Copyright: ${copyright}`}</p>
    </div>
  );
};
