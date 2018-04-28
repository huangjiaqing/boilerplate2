const resolve = require('path').resolve;
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const root = (dir='') => resolve(__dirname, `../../${dir}`);

module.exports = merge(baseConfig, {

  mode: 'production',

  entry: {
    app: [
      './client/index.js'
    ],
  },

  output: {
    path: root('/dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
});