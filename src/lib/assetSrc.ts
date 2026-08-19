// Image imports resolve to a URL string (Vite default) or an ImageMetadata object
// (Astro's asset pipeline). This normalizes both to a usable `src` string.
export const assetSrc = (img: string | { src: string }): string =>
  typeof img === 'string' ? img : img.src
