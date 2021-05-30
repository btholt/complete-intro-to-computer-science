module.exports = {
  siteMetadata: {
    title: "Complete Intro to Computer Science",
    subtitle: "Data Structures and Algorithms",
    description: "Come learn the basics to computer science with Brian Holt",
    keywords: [
      "computer science",
      "complete intro",
      "sorts",
      "algorithms",
      "Brian Holt",
      "javascript",
      "node.js",
    ],
  },
  pathPrefix: "/complete-intro-to-computer-science",
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
  ],
};
