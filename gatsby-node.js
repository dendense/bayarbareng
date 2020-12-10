const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  /* Taruh Template Dibawah Ini */
  // const postTemplate = path.resolve("src/templates/postTemplate.js")
  // const bioTemplate = path.resolve("src/templates/bioTemplate.js")

  /* Query Utama */
  var data_graphql = await graphql(`
    query BoilerplateNetlifyCMS {
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

/* Fixing react-hot-router warning while develop locally, if you won't add this hook, just remove react-dom instead & keep @hot-loader/react-dom depedency*/
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    };
  }
};
