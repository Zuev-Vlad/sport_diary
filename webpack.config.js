const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

const entry = {
  index: "./src/index.tsx"
};

const plugins = [
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.ejs",
    favicon: "./src/favicon.ico",
    filename: `[name].html`,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
  })
];

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode,
  target,
  plugins,
  devtool: "source-map",
  entry,
  devServer: {
    static: "./src/",
    historyApiFallback: true,
    hot: true,
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[hash:8].js",
    assetModuleFilename: "[fragment]/assets/[hash][ext][query]",
    chunkFilename: '[id].[hash:8].js',
    clean: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json']
  },

  module: {
    rules: [
      { test: /\.(html)$/, use: ["html-loader"] },
      {
        test: /\.s?css$/i,
        use: [
          mode === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === "production" ? "asset" : "asset/resource",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};



// for (let key in entry) {
//   plugins.push(
//     new HtmlWebpackPlugin({
//       template: "./src/" + key + "/index.ejs",
//       favicon: "./src/" + key + "/favicon.ico",
//       filename: `[name]/index.html`,
//       inject: true,
//       chunks: [key],
//       templateParameters: {
//         assets: {
//           js: [`[name]/index.js`]
//         }
//       },
//       minify: {
//         removeComments: true,
//         collapseWhitespace: true,
//         removeRedundantAttributes: true,
//         useShortDoctype: true,
//         removeEmptyAttributes: true,
//         removeStyleLinkTypeAttributes: true,
//         keepClosingSlash: true,
//         minifyJS: true,
//         minifyCSS: true,
//         minifyURLs: true,
//       },
//     })
//   );
// }
