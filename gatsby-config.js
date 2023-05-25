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
    siteUrl: 'https://plan-f.de',
    description: 'TODO siteMeta.description',
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
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/kontakt/', '/datenschutz/'],
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
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '10',
        matomoUrl: 'https://s.fixmycity.de',
        siteUrl: 'https://plan-f.info',
      },
    },
    {
      // Docs https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Plan-F.info',
        short_name: 'Plan-F.info',
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
