/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Watheq Website`,
    titleAr: "موقع واثق",
    author: `Watheq Alshowaiter`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        langKeyForNull: "en",
        useLangKeyLayout: true, // for RTL we should make it true
        prefixDefault: false,
        postPage: 'src/templates/kb-post.js',
        markdownRemark: {
          postPage: require.resolve("./src/templates/blog.js"),
          query: `
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug,
                    langKey
                  }
                }
              }
            }
          }
          `,
        },
      },
    },
  ],
}
