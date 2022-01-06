const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval", //production에서는 hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"],
  }, //resolve를 작성해줌으로서 entry부분에서 확장자 생략가능

  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
  },
};
