import React, { type ReactNode } from 'react'

import { Link } from '../core/links/Link'

export type CardImage = { src: string; copyright?: string }

type Props = {
  link: string
  image?: CardImage
  children: ReactNode
  title: string
  linkExternal?: boolean
  measure?: string
}
export const CardExample: React.FC<Props> = ({
  children,
  link,
  image,
  title,
  linkExternal,
  measure,
}) => {
  return (
    <Link
      external={linkExternal}
      button="card"
      className="flex h-full flex-col rounded-b-3xl bg-white"
      href={link}
    >
      {image?.src && (
        <>
          <img className="h-52 w-full overflow-hidden object-cover" alt="" src={image.src} />
          {image.copyright && (
            <p className="px-5 pt-2 text-right text-xs text-gray-400">
              Abbildung: {image.copyright}
            </p>
          )}
        </>
      )}
      <div className="p-6">
        <h3 className="mb-3 text-lg font-bold text-black md:text-xl">{title}</h3>
        {measure && <p className="mb-3 text-purple-500 uppercase">{measure}</p>}
        {children}
      </div>
    </Link>
  )
}
