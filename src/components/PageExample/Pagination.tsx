import React from 'react';
import { Link } from '../core/links/Link';

type Props = {
  pos: number;
  prevSlug: string;
  nextSlug: string;
};
export const Pagination: React.FC<Props> = ({ pos, prevSlug, nextSlug }) => {
  return (
    <div className="w-full bg-gray-50 p-2 text-sm">
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
