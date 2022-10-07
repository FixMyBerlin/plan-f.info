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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    // TailwindCSS needs PostCSS, https://tailwindcss.com/docs/guides/gatsby
    'gatsby-plugin-postcss',
    'gatsby-transformer-sharp',
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
        apiURL: 'http://0.0.0.0:1337',
        // in ENV verschieben, da pro Dev unterschiedlich
        accessToken:
          'ed46610f6cb4fa63786e98b1a436c5605084a4a6328204fd1be6ae77cc6ada11d4bfba51c43c1c72f4a48129a265a558c710c7f18c3eef6cce0abf2ffbdc21e6b498d4073798fbb4c9af75f274225ddf876f801b1d2c1f34a9a7ce598fbd4bc86725a59e4d904b82ffecb3867f72da3d041da83640989c8bf10ba8c140aaf079',
        // Hier die Content types angeben, die wir in Gatsby verfügbar haben wollen.
        // collection = array, single = ein object
        collectionTypes: [
          'measure',
          'topic',
          {
            singularName: 'example',
            queryParams: {
              populate: {
                evaluation: { populate: '*' },
                links: { populate: '*' },
                measure: { populate: '*' },
                image: { populate: '*' },
              },
            },
          },
        ],
        singleTypes: [],
      },
    },
  ],
};
