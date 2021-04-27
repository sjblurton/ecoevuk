exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const results = await graphql(`
    {
      allProductsJson {
        edges {
          node {
            slug
            image {
              src
            }
          }
        }
      }
    }
  `)
  if (results.error) {
    console.log(results.error)
  }
  results.data.allProductsJson.edges.forEach(edge => {
    const product = edge.node
    createPage({
      path: `/chargers/${product.slug}`,
      component: require.resolve("./src/template/charger.js"),
      context: {
        slug: product.slug,
        image: product.image.src,
      },
    })
  })
}
