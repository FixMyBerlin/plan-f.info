import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Caption } from '../Text';

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
      <Caption>{`Copyright: ${copyright}`}</Caption>
    </div>
  );
};
