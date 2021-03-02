const path = require('path'),
  webpack = require('webpack'),
  merge = require('webpack-merge'),
  common = require('../webpack.common.js');

module.exports = (mode) => {
  return merge(common(mode), {
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
      contentBase: path.join(__dirname, '../../../www/'),
      index: 'index.html',
      compress: true,
      open: true,
      port: 9090,
      hot: true,
      historyApiFallback: true,
    },
  });
};
