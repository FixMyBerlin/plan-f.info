import clsx from 'clsx';
import React from 'react';
import { Link } from '../core/links/Link';

export type PaginationProps = {
  sectionPosition: 'top' | 'bottom';
  pos: number;
  prevSlug: string;
  nextSlug: string;
};
export const Pagination: React.FC<PaginationProps> = ({
  pos,
  prevSlug,
  nextSlug,
  sectionPosition,
}) => {
  return (
    <div
      className={clsx(
        sectionPosition === 'top' ? 'rounded-t-3xl' : 'rounded-b-3xl',
        'w-full bg-gray-50 p-2 text-sm'
      )}
    >
      <Link button href={`../${prevSlug}`}>
        {' '}
        Prev
      </Link>
      <Link button href={`../${nextSlug}`}>
        {' '}
        Next
      </Link>
      Seite: {pos + 1}
    </div>
  );
};
