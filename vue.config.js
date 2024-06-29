const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

// vue.config.js
module.exports = {
  configureWebpack: {
    output: {
      filename: "[name].[hash].js",
      chunkFilename: "[name].[hash].js",
    },
  },
  css: {
    extract: {
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[name].[hash].css",
    },
  },
};

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/web_app/" : "/",
};
