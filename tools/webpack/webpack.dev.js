const HappyPack = require('happypack');
const webpack = require('webpack');
const merge = require('webpack-merge');
const resolve = require('path').resolve;
const FriendlyError = require('friendly-errors-webpack-plugin');
const baseConfig = require('./webpack.base');

const root = (dir='') => resolve(__dirname, `../../${dir}`);

module.exports = merge(baseConfig, {

  mode: 'development',

  entry: {
    app: [
      'webpack-hot-middleware/client',
      'normalize.css',
      './client/utils/customize.css',
      './client/index.js'
    ]
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        include: [root('client'), root('node_modules/normalize.css')],
        use: ['happypack/loader?id=css']
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyError(),
    new HappyPack({
      id: 'css',
      loaders: [
        'css-hot-loader',
        'style-loader',
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
    }),
  ],

  devtool: 'source-map',
});