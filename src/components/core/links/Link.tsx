import React, { forwardRef } from 'react'

import { selectLinkStyle } from './styles'

export type LinkProps = {
  href: string
  external?: boolean
  className?: string
  activeClassName?: string
  classNameOverwrites?: string
  /** @default `false` for internal links, @default `true` for external links */
  blank?: boolean
  /** @desc Style Link as Button */
  button?: true | 'white' | 'black' | 'card'
  children: React.ReactNode
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

/**
 * Replaces the Gatsby `<Link>`. Internal links are plain `<a>` tags (Astro handles
 * routing). `activeClassName` is applied when the current pathname matches `href` —
 * evaluated on the client, so it lights up inside hydrated islands (the navigation).
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      className,
      activeClassName,
      classNameOverwrites,
      children,
      external,
      blank = undefined,
      button,
      ...props
    },
    ref,
  ) => {
    const isExternal = external || href.startsWith('http')
    const baseClass = classNameOverwrites || selectLinkStyle(button, className)

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          className={baseClass}
          rel="noopener noreferrer"
          {...{ target: blank === false ? undefined : '_blank' }}
          {...props}
        >
          {children}
        </a>
      )
    }

    const isActive =
      typeof window !== 'undefined' && activeClassName != null && window.location.pathname === href
    const finalClass = isActive ? `${baseClass} ${activeClassName}` : baseClass

    return (
      <a ref={ref} href={href} className={finalClass} {...props}>
        {children}
      </a>
    )
  },
)

Link.displayName = 'Link'
