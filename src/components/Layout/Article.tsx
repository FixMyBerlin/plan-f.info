import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};
export const Article: React.FC<Props> = ({ children, className }) => {
  return <article className={clsx(className, 'max-w-3xl')}>{children}</article>;
};
