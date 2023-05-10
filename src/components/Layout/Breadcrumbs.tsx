import React from 'react';

import { HomeIcon } from '@heroicons/react/20/solid';
import { Link } from '../core/links/Link';

type Props = { names?: string[]; prefix?: string };

export const Breadcrumbs: React.FC<Props> = ({
  names = [],
  prefix = '../',
}) => {
  const n = names.length;
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex flex-col sm:flex-row sm:items-center">
        <li>
          <div className="flex items-center">
            <Link href="/">
              <HomeIcon
                className="mb-2 mr-2 h-4 w-4 flex-shrink-0 sm:mb-0"
                aria-hidden="true"
              />
              <span className="sr-only">Home</span>
            </Link>
            <svg
              className="h-5 w-5 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
          </div>
        </li>
        {names.map((name, i) => (
          <li key={name}>
            <div className="flex items-center">
              <Link
                className="text-sm no-underline"
                href={prefix + '../'.repeat(n - i - 1)}
              >
                {name}
              </Link>
              <svg
                className="h-5 w-5 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};
