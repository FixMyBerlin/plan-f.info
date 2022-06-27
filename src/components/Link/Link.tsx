import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { classNames } from '../utils';

export type LinkProps = {
  to: string;
  className?: string;
  newWindow?: boolean;
  external?: boolean;
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
        className={classNames('hover:underline', className)}
        target={newWindow && '_blank'}
        rel={newWindow && 'noopener noreferrer'}
      >
        {children}
      </a>
    );
  }

  return (
    <GatsbyLink to={to} className={classNames('hover:underline', className)}>
      {children}
    </GatsbyLink>
  );
};
