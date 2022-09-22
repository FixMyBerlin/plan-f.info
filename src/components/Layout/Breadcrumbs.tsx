import React from 'react';
import { Link } from 'gatsby';

type Props = { names: string[]; prefix?: string };

export const Breadcrumbs: React.FC<Props> = ({ names, prefix = './' }) => {
  const n = names.length;
  return (
    <>
      {names.map((name, i) => (
        <Link to={prefix + '../'.repeat(n - i - 1)}>
          {'/ '} {name}
        </Link>
      ))}
    </>
  );
};
