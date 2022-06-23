import React from 'react';
import classNames from 'classnames';
import { Link, LinkProps } from './Link';

type Props = {
  /** @desc Internal Link, external Link, e-mail-address (will add the `mailto:` automatically) */
  children: React.ReactNode;
} & LinkProps;

const linkStyles =
  'underline hover:underline active:underline underline-offset-2';

export const TextLink: React.FC<Props> = ({
  className,
  children,
  ...props
}) => {
  const classes = classNames(className, linkStyles);

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
};
