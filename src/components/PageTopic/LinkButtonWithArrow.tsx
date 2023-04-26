import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Link, LinkProps } from '../links/Link';

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
      <ArrowUpRightIcon className="mr-2 h-6 w-6" />
      {children}
    </Link>
  );
};
