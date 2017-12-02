const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.ts"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./www/js/"),
    publicPath: "/js"
  },
  devServer: {
    contentBase: path.resolve("./www"),
    compress: true,
    hot: true,
    port: 5000
  }
};
