require('dotenv').config({
  path: `.env`,
});

module.exports = {
  // Allows the use of JSX without having to import React
  // Docs https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#jsxruntime
  jsxRuntime: 'automatic',

  graphqlTypegen: true,
  // Required by 'gatsby-plugin-sitemap' Plugin
  siteMetadata: {
    title: 'Plan F',
    siteUrl: 'https://plan-f.info',
    description:
      'Plan F unterstützt Kommunen bei der Förderung des Radverkehrs. Dafür strukturieren wir bestehendes Wissen, Praxisbeispiele, Maßnahmen und Leitfäden zur Fahrradmobilität und zeigen notwendige Handlungsfelder auf.',
  },

  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)

  plugins: [
    // Docs https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/
    // Test with `npm run build && npm run serve` to validate server side rendering (with rehydration)
    'gatsby-plugin-react-helmet',
    // Docs https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
    // TailwindCSS needs PostCSS, https://tailwindcss.com/docs/guides/gatsby
    'gatsby-plugin-postcss',
    {
      // Docs https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/
      // https://plan-f.info/sitemap-index.xml
      // https://plan-f.info/sitemap-0.xml
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/impressum/', '/datenschutz/'],
      },
    },
    {
      // Docs https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          // include: /\.inline\.svg$/,
          // Remove SVG props that fail conversion to dom
          omitKeys: ['xmlnsSerif', 'serifId'],
        },
      },
    },
    {
      // Docs https://www.gatsbyjs.com/plugins/gatsby-plugin-matomo/
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '10',
        matomoUrl: 'https://s.fixmycity.de',
        siteUrl: 'https://plan-f.info',
        disableCookies: true,
        respectDnt: false, // We track very privacy friendly, so the tiny bits we are tracking, we actually want to track
        // dev: true,
      },
    },
    {
      // Docs https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Plan F – Impulse für die fahrradfreundliche Kommune',
        short_name: 'Plan F',
        start_url: '/',
        background_color: 'white',
        theme_color: '#fff8e8',
        display: 'minimal-ui', // https://developer.mozilla.org/en-US/docs/Web/Manifest/display#values
        icon: 'src/assets/planf_icon.png',
        legacy: false,
        lang: 'de-DE', // https://developer.mozilla.org/en-US/docs/Web/Manifest/lang
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_BACKEND_URL,
        accessToken: process.env.STRAPI_TOKEN,
        // Hier die Content types angeben, die wir in Gatsby verfügbar haben wollen.
        // collection = array, single = ein object
        collectionTypes: [
          {
            singularName: 'award',
            queryParams: {
              populate: {
                logo: { populate: '*' },
              },
            },
          },
          {
            singularName: 'topic',
            queryParams: {
              populate: {
                measures: { populate: '*' },
                additionalResources: { populate: '*' },
                guidelines: { populate: '*' },
                fundings: { populate: '*' },
                image: { populate: '*' },
              },
            },
          },
          {
            singularName: 'measure',
            queryParams: {
              populate: {
                topic: { populate: '*' },
                image: { populate: '*' },
                additionalResources: { populate: '*' },
                guidelines: { populate: '*' },
                fundings: { populate: '*' },
                examples: { populate: '*' },
                communityEntries: { populate: '*' },
              },
            },
          },
          {
            singularName: 'example',
            queryParams: {
              populate: {
                links: { populate: '*' },
                measure: { populate: '*' },
                image: { populate: '*' },
                awards: { populate: '*' },
                relatedTopic: { populate: '*' },
              },
            },
          },
          {
            singularName: 'community-entry',
            queryParams: {
              populate: {
                image: { populate: '*' },
                description: { populate: '*' },
                website: { populate: '*' },
              },
            },
          },
        ],
        singleTypes: [],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://plan-f.info`,
        stripQueryString: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
  ],
};
