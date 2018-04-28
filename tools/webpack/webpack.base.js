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
      {
        test: /\.css$/,
        include: [root('client'), root('node_modules/normalize.css')],
        use: ['happypack/loader?id=css']
      }
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
    new HappyPack({
      id: 'css',
      loaders: [
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
};