import React from 'react';
import { LinkProps } from './Link';
import { selectLinkStyle } from './styles';

type Props = {
  className?: string;
  tel?: string;
  /** @desc Style Link as Button */
  button?: LinkProps['button'];
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const TelLink: React.FC<Props> = ({
  className,
  tel,
  button,
  children,
  ...props
}) => {
  const cleanTel = `${tel || children}`.replace(/[^0-9+]/g, '');
  return (
    <a
      href={`tel:${cleanTel}`}
      className={selectLinkStyle(button, className)}
      {...props}
    >
      {children}
    </a>
  );
};
