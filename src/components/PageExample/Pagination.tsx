import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React from 'react';
import { P } from '../Text';
import { Link } from '../core/links/Link';

export type PaginationProps = {
  pos: number;
  prevSlug: string;
  nextSlug: string;
  total: number;
  className?: string;
};
export const Pagination: React.FC<PaginationProps> = ({
  pos,
  prevSlug,
  nextSlug,
  total,
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        'flex w-full items-center justify-between bg-white/50 p-5 text-sm lg:px-10'
      )}
    >
      <p className="hidden md:block">Praxisbeispiele blättern</p>
      <div className="flex w-full items-center justify-between gap-3 md:w-auto">
        <Link
          button
          className="flex items-center gap-2 text-sm"
          href={`../${prevSlug}`}
        >
          <ArrowLeftIcon className="h-4" />
          zurück
        </Link>
        {pos + 1}/{total}
        <Link
          button
          className="flex items-center gap-2 text-sm"
          href={`../${nextSlug}`}
        >
          weiter
          <ArrowRightIcon className="h-4" />
        </Link>
      </div>
    </div>
  );
};
