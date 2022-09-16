module.exports = {
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
          'a4b1e09b99c7ad0a47ce29492b2b480b3831bf492e9a2081fee7b0ddbc8d3a93279888dc132d3e4c07f332bd31ca03e190d06d91c7cb749b45c8ebc09c1da0f5b1e258cd05f6533bcd403c26187bb3a9a41c44a3e06c4a363981cd3dd775b83b2b9502dccf0aa73e3b0ad10b31915cd6e92d3e63520d78fbbaccc2259ad36bd8',
        // Hier die Content types angeben, die wir in Gatsby verfügbar haben wollen.
        // collection = array, signle = ein object
        collectionTypes: ['text-block'],
        singleTypes: ['header'],
      },
    },
  ],
};
