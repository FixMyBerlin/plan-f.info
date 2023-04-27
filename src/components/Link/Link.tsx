import clsx from 'clsx';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

export type LinkProps = {
  to: string;
  className?: string;
  newWindow?: boolean;
  external?: boolean;
  children: React.ReactNode;
};

// TODO: Refactor all those link components to share more logic
export const Link: React.FC<LinkProps> = ({
  to,
  className,
  newWindow = false,
  external = false,
  children,
}) => {
  if (newWindow || external) {
    return (
      <a
        href={to}
        className={clsx('hover:underline', className)}
        target={newWindow && '_blank'}
        rel={newWindow && 'noopener noreferrer'}
      >
        {children}
      </a>
    );
  }

  return (
    <GatsbyLink to={to} className={clsx('hover:underline', className)}>
      {children}
    </GatsbyLink>
  );
};
