/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'hello gatsby',
    author: 'fhh'
  },
  /* Your site config here */
  plugins: [
    // 把json文件夹的数据添加到数据层中
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "json",
        path: `${__dirname}/json/`
      }
    },
    "gatsby-transformer-json",
    "gatsby-plugin-sharp",
  ],
}
