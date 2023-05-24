import React from 'react';
import { LinkProps } from './Link';
import { selectLinkStyle } from './styles';

type Props = {
  className?: string;
  mailto?: string;
  subject?: string;
  body?: string;
  /** @desc Style Link as Button */
  button?: LinkProps['button'];
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const MailLink: React.FC<Props> = ({
  className,
  mailto,
  subject,
  body,
  button,
  children,
  ...props
}) => {
  const subjectPart = `subject=${encodeURIComponent(subject)}`;
  const bodyPart = `body=${encodeURIComponent(body)}`;
  const fullEmailString = `mailto:${
    mailto || children
  }?${subjectPart}&${bodyPart}`;

  return (
    <a
      href={fullEmailString}
      className={selectLinkStyle(button, className)}
      {...props}
    >
      {children}
    </a>
  );
};
