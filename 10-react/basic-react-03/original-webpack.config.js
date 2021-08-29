const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJson = require("./package.json");

module.exports = {
  //   entry: path.join(__dirname, "./src", "index.js"),
  entry: {
    main: path.join(__dirname, "./src", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    libraryTarget: "system",
    uniqueName: packageJson.name,
    filename: `index.js`,
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
    port: 8090,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  module: {
    rules: [
      //   {
      //     parser: {
      //       system: false,
      //     },
      //   },
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
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       template: path.join(__dirname, "src", "index.html"),
  //       //   inject: true,
  //       //   template: "./src/index.html",
  //       //   filename: "./index.html",
  //     }),
  //   ],
  externals: ["single-spa"],
};
