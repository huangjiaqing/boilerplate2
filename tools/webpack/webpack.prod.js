const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const resolve = require('path').resolve;
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const root = (dir='') => resolve(__dirname, `../../${dir}`);

module.exports = merge(baseConfig, {

  mode: 'production',

  entry: {
    app: [
      'normalize.css',
      './client/utils/customize.css',
      './client/index.js'
    ],
  },

  output: {
    path: root('/dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.css/,
        include: [root('client'), root('node_modules/normalize.css')],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              module: true,
              camelCase: true,
              localIdentName: '[name]__[local]__[hash:base64:8]'
            },
          },
          'postcss-loader'
        ],
      }
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ],
});