module.exports = {
  pathPrefix: "/guilherme-motta/",
  siteMetadata: {
    title: "guilherme-motta",
    description: "Guilherme Motta | Software Enginner",
    author: "Guilherme Motta",
    siteUrl: "https://evilpuppet.github.io/guilherme-motta",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
