import React from 'react';
import classNames from 'classnames';
import { Link, LinkProps } from './Link';

type Props = {
  small?: boolean;
  large?: boolean;
} & LinkProps;

const buttonStyle =
  'inline-flex items-center justify-center rounded-full py-2 px-4 bg-green-500 font-bold';

// TODO: Refactor all those link components to share more logic
export const ButtonLink: React.FC<Props> = ({
  small = false,
  large = false,
  children,
  ...props
}) => {
  const style = classNames(
    buttonStyle,
    { 'px-12 py-4': large },
    { 'px-4 py-2': small }
  );

  return (
    <Link {...props} className={style}>
      {children}
    </Link>
  );
};
