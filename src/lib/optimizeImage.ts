import type { ImageMetadata } from 'astro'
import { getImage } from 'astro:assets'

import PlaceholderImage from '~/components/CommunityEntries/assets/planf-placeholder.jpg'

/** Resolve an ImageMetadata to an optimized URL string (server-only — import from `.astro` routes). */
export async function optimizedSrc(src: ImageMetadata, width: number) {
  if (src.format === 'svg') {
    return (await getImage({ src })).src
  }
  const img = await getImage({ src, width, format: 'webp' })
  return img.src
}

export async function optimizedPlaceholder(width: number) {
  return optimizedSrc(PlaceholderImage, width)
}

/** Award logos may be SVG — Sharp skips rasterization; still resolve via getImage. */
export async function optimizedAwardLogo(src: ImageMetadata) {
  if (src.format === 'svg') {
    return (await getImage({ src })).src
  }
  return optimizedSrc(src, 200)
}
