module.exports = {
  siteMetadata: {
    title: `ECOEVUK Local car Charging Installation`,
    description: `Car Charging Installation for the home, or the office in the local area. All charge points are installed by Stroma approved engineers, fully qualified installation expert and all work is guaranteed, and insured.`,
    author: `@SimonBluron`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    "gatsby-transformer-json",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EcoEVUK Home Car Charger Installation`,
        short_name: `EcoEVUK`,
        start_url: `/`,
        background_color: `#FAFCFE`,
        theme_color: `#ECF1F4`,
        display: `standalone`,
        icon: `src/assets/icons/ecoev-logo-UK.svg`,
      },
    },

    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
