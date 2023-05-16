import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Link, LinkProps } from '../core/links/Link';

type Props = {
  children?: ReactNode;
  className?: string;
} & LinkProps;

export const LinkButtonWithArrow: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Link className={clsx(className, 'pr-3')} {...props} button="black">
      <ArrowUpRightIcon className="mr-2 h-6 w-6 flex-shrink-0" />
      <div className="max-w-[150px] truncate">{children}</div>
    </Link>
  );
};
