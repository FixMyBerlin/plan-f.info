import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

type Props = {
  to: string;
  className?: string;
  newWindow?: boolean;
  small?: boolean;
  large?: boolean;
};

const buttonStyle =
  'inline-flex items-center justify-center rounded-full py-2 px-4 text-[16px] bg-dark-green font-bold';

// TODO: Refactor all those link components to share more logic
export const ButtonLink: React.FC<Props> = ({
  to,
  className,
  newWindow = false,
  small = false,
  large = false,
  children,
}) => {
  const styles = classNames(
    className,
    buttonStyle,
    { 'px-12 py-4': large },
    { 'px-4 py-2': small }
  );

  if (newWindow) {
    return (
      <a href={to} className={styles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={styles}>
      {children}
    </Link>
  );
};
