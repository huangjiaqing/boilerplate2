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
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [root('client'), root('test')],
        use: ['happypack/loader?id=babel']
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, '../template/index.html'),
      inject: true
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader?cacheDirectory']
    }),
  ],
};