const webpack = require('webpack');
const config = require('./webpack/webpack.prod');

webpack(config, (err, stats) => {
  if (err) throw err
  console.log(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }));
  console.log('✨✨✨ Build react with browser');
});