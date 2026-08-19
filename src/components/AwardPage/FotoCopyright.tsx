import React from 'react'

import { assetSrc } from '~/lib/assetSrc'

type Props = { data: { src: any; copyright: string }; preload?: boolean }

export const FotoCopyright: React.FC<Props> = ({ data: { src, copyright }, preload = true }) => {
  return (
    <div className="prose-figcaption:text-gray-400 prose-figcaption:mt-3 py-4">
      <img src={assetSrc(src)} alt={copyright} loading={preload ? 'eager' : 'lazy'} />
      <figcaption>Foto:&nbsp;&copy;&nbsp;{copyright}</figcaption>
    </div>
  )
}
