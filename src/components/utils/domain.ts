// Canonical site origin. On the client we prefer the live origin (so absolute URLs
// also work on preview/deploy domains); during SSR/SSG we fall back to production.
const SITE_URL = 'https://plan-f.info'

export const domain = () => {
  const browserDomain = typeof window !== 'undefined' && window.location.origin
  return browserDomain || SITE_URL
}
