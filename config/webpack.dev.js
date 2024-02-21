const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config.js");

module.exports = merge(webpackConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    open: true,
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
});
