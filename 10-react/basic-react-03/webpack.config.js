const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "./src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    hot: true,
    port: 8090,
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      //   inject: true,
      //   template: "./src/index.html",
      //   filename: "./index.html",
    }),
  ],
};
