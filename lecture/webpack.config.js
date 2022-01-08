const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

// process.env.NODE_ENV = 'production';

module.exports = {
  name: "wordrelay-setting", //webpack설정이름
  mode: "development", // 실서비스: production
  devtool: "eval", //빠르게 하겠다는 뜻, 실서비스: hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client"],
  }, //입력

  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR"], //browserslist 참고해서 적용.ㄴ
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel", //바벨이 최신문법을 과거로 트랜스파일할 때 핫리로링 기능 추가
          ],
        },
      },
    ],
  },

  plugins: [new RefreshWebpackPlugin()], //플러그인이 된 것. 빌드시 실행됨.

  output: {
    path: path.join(__dirname, "dist"), //실제 경로
    filename: "app.js",
    publicPath: "./dist", //가상의 경로. webpack-dev-server가 사용하는 결과물간의 상대 경로정도? express.static이랑 비슷 > app.use('/dist/, express.static(__dirname, 'dist'))
  }, //출력
  devServer: {
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
