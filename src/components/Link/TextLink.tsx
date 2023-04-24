import React from 'react';
import clsx from 'clsx';
import { Link, LinkProps } from './Link';

type Props = {
  /** @desc Internal Link, external Link, e-mail-address (will add the `mailto:` automatically) */
  children: React.ReactNode;
} & LinkProps;

const linkStyles = 'underline underline-offset-4';

export const TextLink: React.FC<Props> = ({
  className,
  children,
  ...props
}) => {
  const classes = clsx(className, linkStyles);

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
};
