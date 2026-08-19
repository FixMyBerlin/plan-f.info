import type { ImageMetadata } from 'astro'

export type ProfileData = {
  name: string
  description: string
  quote: string
  foto: {
    // Either an imported image (ImageMetadata) or a URL string — normalize with `assetSrc`.
    src: ImageMetadata | string
    attribution?: string
  }
}
