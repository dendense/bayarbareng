exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  /* Taruh Template Dibawah Ini */
  // const postTemplate = path.resolve("src/templates/postTemplate.js")
  // const bioTemplate = path.resolve("src/templates/bioTemplate.js")

  /* Query Utama */
  var data_graphql = await graphql(`
    query MainBayarBareng {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
        distinct(field: frontmatter___tags)
      }
    }
  `);

  for (let edge of data_graphql.data.allMarkdownRemark.edges) {
    let { node } = edge;
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
    });
  }
};
