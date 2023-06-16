import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Link, LinkProps } from '../core/links/Link';

type Props = {
  children?: ReactNode;
  className?: string;
  truncate?: boolean;
} & LinkProps;

export const LinkButtonWithArrow: React.FC<Props> = ({
  children,
  className,
  truncate = true,
  ...props
}) => {
  return (
    <Link className={clsx(className, 'flex pr-5')} {...props}>
      <ArrowUpRightIcon className="mr-2 h-6 w-6 flex-shrink-0" />
      <span className={clsx('whitespace-nowrap', truncate && 'truncate')}>
        {children}
      </span>
    </Link>
  );
};
