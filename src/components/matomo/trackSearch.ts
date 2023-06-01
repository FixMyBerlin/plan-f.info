/* eslint-disable dot-notation */

type Props = {
  searchterm: string;
  category: string;
  results?: number;
};

// Docs https://developer.matomo.org/guides/tracking-javascript-guide#internal-search-tracking
export const trackSearch = ({
  searchterm,
  category,
  results = null,
}: Props) => {
  if (typeof window === 'undefined') return;

  // It is important to use bracket notation here!
  // Otherwise Jest tests will fail since they do not recognize our global type extension.
  window['_paq'] = window['_paq'] || [];
  window['_paq'].push(['trackSiteSearch', searchterm, category, results]);

  if (window['dev'] === true) {
    // eslint-disable-next-line no-console
    console.debug({
      MATOMO: 'trackSiteSearch',
      searchterm,
      category,
      results,
    });
  }
};
