import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Link } from '../core/links/Link';

type Props = {
  link: string;

  children: ReactNode;
  className?: string;
  title: string;
};
export const CardMeasure: React.FC<Props> = ({
  className,
  children,
  link,

  title,
}) => {
  return (
    <Link
      button="card"
      className={clsx(
        'flex h-full flex-col gap-3 rounded-b-3xl bg-white p-6 sm:flex-row sm:items-start sm:gap-6',
        className
      )}
      href={link}
    >
      <div>
        <h3 className="text-blackmd:text-xl mb-2 text-lg font-bold">{title}</h3>
        {children}
      </div>
    </Link>
  );
};
