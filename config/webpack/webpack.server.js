const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');
const ManifestPlugin = require('webpack-manifest-plugin');

const root = (path) => resolve(`.${path}`);

module.exports = {

  mode: 'production',

  entry: './client/app.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    libraryTarget: 'commonjs2',
    filename: 'bundle_server.js',
    path: root('/dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: root('/node_modules'),
      },
      {
        test: /.css$/,
        use: ['ignore-loader'],
      },
    ],
  },

  devtool: 'source-map',

  plugins: [
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    })
  ],
};