const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  //This property defines where the application starts
  entry: "./src/index.tsx",

  //This property defines the file path and the file name which will be used for deploying the bundled file
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },

  // Extension resolutions
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    alias: {
      react: path.join(__dirname, "node_modules", "react"),
    },
    extensions: [".tsx", ".ts", ".js"],
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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
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
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: "url-loader",
        // loader: "file-loader",
        // options: {
        //   name: "[name].[ext]",
        // },
      },
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
