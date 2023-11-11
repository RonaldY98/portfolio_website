const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  //This property defines where the application starts
  entry: "./src/index.js",

  //This property defines the file path and the file name which will be used for deploying the bundled file
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },

  // Pathname resolutions
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    alias: {
      react: path.join(__dirname, "node_modules", "react"),
    },
  },

  // Setup loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },

  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
