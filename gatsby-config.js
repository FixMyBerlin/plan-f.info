module.exports = {
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
      resolve: `gatsby-plugin-layout`,
      options: {
        component: 'src/components/Layout/Layout',
      },
    },
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
        // in ENV verschieben, da pro Dev unterschiedlich
        apiURL: 'https://backend-staging.plan-f.info',
        // in ENV verschieben, da pro Dev unterschiedlich und geheim seien sollte
        accessToken:
          '07c8b96dcb0de371f7c45f3ab47477e9bc93d57c3d048107d1e6cdfac8a37d176db404e8a71ff3d04ecc0833d143d5d3def3441be0382d19f3b220190d39bf3ce68eb1c7093e000169a3c201456053141631c31709aade5ec76a29964315710132a0de2b3ce6f92e70a831ff0ff8227ca67f1c29ebaa20321ac1ccca0a231737',
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
                image: { populate: '*' },
                examples: { populate: '*' },
              },
            },
          },
          {
            singularName: 'measure',
            queryParams: {
              populate: {
                topic: { populate: '*' },
                additionalResources: { populate: '*' },
                examples: { populate: '*' },
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
