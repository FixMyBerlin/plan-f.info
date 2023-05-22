import { Link as GatsbyLink } from 'gatsby';
import React, { forwardRef } from 'react';
import { selectLinkStyle } from './styles';

export type LinkProps = {
  href: string;
  className?: string;
  activeClassName?: string;
  classNameOverwrites?: string;
  /** @default `false` */
  blank?: boolean;
  /** @desc Style Link as Button */
  button?: true | 'white' | 'black' | 'card';
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export const Link: React.FC<LinkProps> = forwardRef<
  HTMLAnchorElement,
  LinkProps
>(
  (
    {
      href,
      className,
      activeClassName,
      classNameOverwrites,
      children,
      blank = false,
      button,
      ...props
    },
    ref
  ) => {
    // external link
    if (href.startsWith('http')) {
      return (
        <a
          ref={ref}
          href={href}
          className={classNameOverwrites || selectLinkStyle(button, className)}
          rel="noopener noreferrer"
          {...{ target: blank ? '_blank' : undefined }}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <GatsbyLink
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={ref}
        to={href}
        {...{ target: blank ? '_blank' : undefined }}
        className={classNameOverwrites || selectLinkStyle(button, className)}
        activeClassName={activeClassName}
        {...props}
      >
        {children}
      </GatsbyLink>
    );
  }
);
