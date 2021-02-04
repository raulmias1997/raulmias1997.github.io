module.exports = {
  siteMetadata: {
    description: "Personal page of Rahul Mistri",
    locale: "en",
    title: "Rahul Mistri",
    pathPrefix: "/raulmias1997.github.io"
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "blue",
      },
    },
  ],
}