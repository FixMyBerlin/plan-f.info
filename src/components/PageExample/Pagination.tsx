import clsx from 'clsx';
import React from 'react';
import { Link } from '../core/links/Link';
import { P } from '../Text';

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
        'flex w-full items-center justify-between bg-gray-100 p-4 text-sm'
      )}
    >
      <P>Blättern</P>
      <div className="flex items-center gap-2">
        <Link button className="" href={`../${prevSlug}`}>
          zurück
        </Link>
        {total} / {pos + 1}
        <Link button href={`../${nextSlug}`}>
          weiter
        </Link>
      </div>
    </div>
  );
};
