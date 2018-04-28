const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {

  mode: 'development',

  entry: {
    app: [
      'webpack-hot-middleware/client',
      './client/app.js'
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: 'source-map',
  
});