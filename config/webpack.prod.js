const { merge } = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const common = require("./webpack.common.js");

// To show progress bar
const chalk = require("chalk");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

// To show speed by plugin
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

// To reduce css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const seed = new Date().getTime();

const config = {
  plugins: [
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 4900, // Minimum number of characters
      entryChunkMultiplicator: 49,
    }),
    new LodashModuleReplacementPlugin({ collections: true, paths: true }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { modules: false, targets: { node: 4 } }], "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all",
      maxInitialRequests: 8,
      minSize: 200000,
      maxSize: 500000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            let packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);

            if (packageName) {
              packageName = packageName[1].replace("@", "");
            } else {
              packageName = "";
            }

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName}`;
          },
        },
      },
    },
    minimize: true,
    minimizer: [
      (compiler) => {
        const TerserPlugin = require("terser-webpack-plugin");
        new TerserPlugin({
          parallel: true,
          extractComments: true,
          terserOptions: {
            ecma: undefined,
            parse: {},
            compress: {},
            mangle: true, // Note `mangle.properties` is `false` by default.
            module: false,
            // Deprecated
            output: null,
            format: null,
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_classnames: undefined,
            keep_fnames: false,
            safari10: false,
          },
        }).apply(compiler);
      },
      new UglifyJsPlugin({
        extractComments: "all",
        cache: false,
        parallel: true,
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
        },
      }),
    ],
  },
  output: {
    path: path.join(__dirname, "../", "dist"),
    assetModuleFilename: `[path][name]-${seed}[ext]`,
    filename: "[name].[fullhash:8].js",
    sourceMapFilename: "[name].[fullhash:8].map",
    chunkFilename: "chunk.[name].[chunkhash:8].js",
    clean: true,
    publicPath: "/",
  },
};

const configWithTimeMeasures = new SpeedMeasurePlugin().wrap(config);
configWithTimeMeasures.plugins.push(
  new MiniCssExtractPlugin({
    filename: "[name].[chunkhash:8].css",
    chunkFilename: "[id].[chunkhash:8].css",
    ignoreOrder: true,
  })
);

module.exports = merge(common, {
  mode: "production",
  ...configWithTimeMeasures,
});
