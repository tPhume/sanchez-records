const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Webpack configurations
module.exports = {
  entry: "./src/App.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.html$/, loader: "html-loader" },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new webpack.DefinePlugin({
      RICK_AND_MORTY_API: {
        base: "https://rickandmortyapi.com/api/",
        characters: "https://rickandmortyapi.com/api/location",
        locations: "https://rickandmortyapi.com/api/location",
        episodes: "https://rickandmortyapi.com/api/episode",
      },
    }),
  ],
  devServer: {
    port: 10000,
  },
};
