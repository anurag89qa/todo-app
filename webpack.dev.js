const merge = require('webpack-merge');
const path = require('path');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true
  }
});
