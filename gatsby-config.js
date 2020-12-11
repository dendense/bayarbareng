/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Konfigurasi MetaData */
  siteMetadata: {
    title: `BayarBareng`,
    author: {
      name: `Staff BayarBareng`,
      summary: `Dev BayarBareng Project.`,
    },
    description: `Bareng Bayar, Bayar Bareng`,
    siteUrl: `https://github.com/dendense/bayarbareng`,
    social: {
      instagram: `deny_desu`,
    },
  },
  /* Taruh Plugin Disini */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/product`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `bio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: Put your tracking ID here `UA-74413199-2`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `dendense-github`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 640,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
