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
        apiURL:
          'https://plan-f-staging.tiummk647p9vk.eu-central-1.cs.amazonlightsail.com',
        // in ENV verschieben, da pro Dev unterschiedlich und geheim seien sollte
        accessToken:
          '265ea8e28817d4f4272ae2c61c39b19e18c4fc964db5941b114d9726dde7d08555523e92e90b87578f597c0f7637d95c648bd87274bf70f16db6c7d8e1479aebf8c6e5a78776d5d9d79be2c8f489f6d685284d7c4592245f9d626e4f75a78b687ee0ed5593401b7c0443d85f94966780048292b144e4ae1b27f7faca2592a7f0',
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
                image: { populate: '*' },
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
  ],
};
