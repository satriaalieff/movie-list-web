const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    watchFiles: ["./src/**/*"],
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
