const path = require("path");

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
