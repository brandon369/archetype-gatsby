
const dotenv = require("dotenv")
dotenv.config({ path: "./env/.env.development" })


module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "title",
    author: `@brandonarrieta.dev`,
    locale: "es-CO",
    description: 'description'
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     accessToken: "",
    //     spaceId: "",
    //   },
    // },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `name`,
        short_name: `name`,
        start_url: `/`,
        background_color: `#94573A`,
        theme_color: `#94573A`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png` // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
