import { ArrowRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Link } from '../core/links';

type Props = {
  children: ReactNode;
  className?: string;
  href: string;
};

export const LinkButtonWithArrowBlack: React.FC<Props> = ({
  children,
  className,
  href,
}) => {
  return (
    <Link
      className={clsx(className, 'mt-6 flex items-center gap-2')}
      button="black"
      href={href}
    >
      <ArrowRightIcon className="h-5 w-5 " />
      {children}
    </Link>
  );
};
