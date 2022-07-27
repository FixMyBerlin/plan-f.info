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
        apiURL: 'http://0.0.0.0:1337',
        accessToken:
          'a964128e5990bea3eb8ae02b0c687bceeff16e0583ef21841d1586819259f52708a36947fce22ddd80e8b4851afdbea2d13c496c0874991f481dc2b8e9d7ddc22711b51745e2a047f4374212816d80603474b4a7881a5f33e49c890470f564407c7af8409fcfd58c1f2cdc835cf351276fb0de330a7368bbb809b4b02ac33bf4',
        collectionTypes: ['text-block'],
        singleTypes: ['header'],
      },
    },
  ],
};
