import React from 'react';
import { Link } from 'gatsby';
import { HomeIcon } from '@heroicons/react/20/solid';

type Props = { names: string[]; prefix?: string };

export const Breadcrumbs: React.FC<Props> = ({ names, prefix = './' }) => {
  const n = names.length;
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <Link to="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {names.map((name, i) => (
          <li key={name}>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                to={prefix + '../'.repeat(n - i - 1)}
                className="font-medium ml-4 text-sm text-gray-500 hover:text-gray-700"
              >
                {name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};
