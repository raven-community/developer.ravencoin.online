module.exports = {
  siteMetadata: {
    title: 'developer.ravencoin.online',
    siteUrl: 'http://developer.ravencoin.online',
  },
  plugins: [
    `gatsby-plugin-flow`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'developer-ravencoin-online',
        short_name: 'developer.ravencoin.online',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#fab915',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-5N6TL56',
        includeInDevelopment: false,
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          `gatsby-remark-component`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-transformer-sharp`,
          `gatsby-plugin-sharp`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
  ],
}
