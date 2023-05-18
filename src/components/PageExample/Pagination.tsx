import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React from 'react';
import { P } from '../Text';
import { Link } from '../core/links/Link';

export type PaginationProps = {
  sectionPosition: 'top' | 'bottom';
  pos: number;
  prevSlug: string;
  nextSlug: string;
  total: number;
};
export const Pagination: React.FC<PaginationProps> = ({
  pos,
  prevSlug,
  nextSlug,
  sectionPosition,
  total,
}) => {
  return (
    <div
      className={clsx(
        sectionPosition === 'top' ? 'rounded-t-3xl' : 'rounded-b-3xl',
        'flex w-full items-center justify-center bg-gray-100 p-4 text-sm md:justify-between'
      )}
    >
      <P className="hidden md:block">Blättern</P>
      <div className="flex items-center gap-3">
        <Link
          button
          className="flex items-center gap-2 text-sm"
          href={`../${prevSlug}`}
        >
          <ArrowLeftIcon className="h-4" />
          zurück
        </Link>
        {total} / {pos + 1}
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
