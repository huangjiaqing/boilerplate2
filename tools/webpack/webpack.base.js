const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const resolve = require('path').resolve;

const root = (dir='') => resolve(__dirname, `../../${dir}`);

module.exports = {

  context: resolve(__dirname, '../../'), 

  watchOptions: {
    ignored: /node_modules/,
  },

  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      components: root('client/components'),
      constants: root('client/constants'),
      services: root('client/services'),
      assets: root('client/assets'),
      pages: root('client/pages'),
      store: root('client/store'),
      utils: root('client/utils'),
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [root('client'), root('test')],
        use: ['happypack/loader?id=babel']
      },
      {
        test: /\.css/,
        include: [root('node_modules/antd')],
        use: ['happypack/loader?id=antd'],
      },
    ]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, '../template/index.html'),
      inject: true
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader?cacheDirectory']
    }),
    new HappyPack({
      id: 'antd',
      loaders: ['style-loader', 'postcss-loader']
    }),
  ],
};