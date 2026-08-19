import React from 'react'

import { Breadcrumbs } from './Breadcrumbs'
import { Hero } from './Hero'

// Thin wrapper so the wiki `.astro` routes can render the <Hero> (which needs a <Breadcrumbs>
// React element as a prop) by passing plain serializable props. Mirrors the per-page
// `<Hero breadcrumbs={<Breadcrumbs names={…} />} …/>` of the original Gatsby templates.
type Props = {
  breadcrumbNames: string[]
  title?: string
  subtitle?: string
  bgColor?: string
  className?: string
}

export const WikiHero: React.FC<Props> = ({
  breadcrumbNames,
  title,
  subtitle,
  bgColor,
  className,
}) => (
  <Hero
    title={title}
    subtitle={subtitle}
    bgColor={bgColor}
    className={className}
    breadcrumbs={<Breadcrumbs names={breadcrumbNames} />}
  />
)
