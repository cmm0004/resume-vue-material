const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      },
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"]
      }
    ]
  },
  plugins: [new VuetifyLoaderPlugin()]
};
