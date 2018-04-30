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
      pages: root('client/pages'),
      store: root('client/store'),
      utils: root('client/utils'),
      assets: root('client/assets'),
      services: root('client/services'),
      constants: root('client/constants'),
      components: root('client/components'),
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
        test: /\.css$/,
        include: [root('node_modules/antd')],
        use: ['happypack/loader?id=antd'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        use: ['happypack/loader?id=pic']
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
    new HappyPack({
      id: 'pic',
      loaders: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:7].[ext]'
          }
        }
      ]
    }),
  ],
};