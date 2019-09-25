module.exports = {
  siteMetadata: {
    title: `Crebutton`,
    description: `Create button app`,
    author: `@reisyun`,
    image: `/static/favicon.ico`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      // Source filesystem
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      // Manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: `crebutton`,
        name: `Create button app`,
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
        ],
        start_url: `/`,
        display: `standalone`,
        theme_color: `#2f3542`,
        background_color: `#2f3542`,
      },
    },
    {
      // Styled components
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        transpileTemplateLiterals: false,
      },
    },
  ],
};
