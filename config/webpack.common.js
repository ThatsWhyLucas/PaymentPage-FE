const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  resolve: {
    fallback: {
      fs: false,
      util: false,
      https: require.resolve('https')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.yml$/,
        use: 'js-yaml-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  output: {
    path: path.join(__dirname, '..', 'dist'),
    assetModuleFilename: `[path][name][ext]`,
    filename: 'bundle.js',
    clean: true,
    publicPath: '/'
  }
};
