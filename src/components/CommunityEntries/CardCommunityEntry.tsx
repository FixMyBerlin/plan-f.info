import clsx from 'clsx'
import React, { type ReactNode } from 'react'

import { Link } from '../core/links/Link'

type Props = {
  link: string | null
  /** Optimized image URL from the Astro parent. */
  image: string
  children: ReactNode
  className?: string
  title: string
}

const cardImageClass =
  'overflow-hidden sm:w-[300px] sm:shrink-0 sm:rounded-bl-3xl lg:w-[400px] xl:w-[450px]'

export const CardCommunityEntry: React.FC<Props> = ({
  className,
  children,
  link,
  image,
  title,
}) => {
  if (!link)
    return (
      <div className="flex h-full flex-col gap-3 rounded-b-3xl bg-white sm:flex-row sm:gap-6">
        <img
          className="w-full overflow-hidden object-cover sm:h-72 sm:w-1/3 sm:shrink-0 sm:rounded-bl-3xl"
          alt=""
          src={image}
        />
        <div className="p-6 sm:pl-0">{children}</div>
      </div>
    )
  return (
    <Link
      blank
      button="card"
      className={clsx(
        'flex h-full flex-col items-stretch gap-1 rounded-b-3xl bg-white sm:flex-row sm:gap-6',
        className,
      )}
      href={link}
    >
      <img className={clsx(cardImageClass, 'object-cover')} alt="" src={image} />
      <div className="p-6 sm:pl-0">
        <h3 className="mb-3 text-lg font-bold text-black md:text-xl">{title}</h3>
        {children}
      </div>
    </Link>
  )
}
