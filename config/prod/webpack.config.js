const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('../webpack.common.js');

module.exports = (mode) => {
  return merge(common(mode), {
    plugins: [
      new CleanWebpackPlugin(['../../www/assets/**/*'], {
        root: __dirname,
        verbose: true,
        allowExternal: true,
      }),
      new CopyPlugin({
        patterns: [{ from: 'src/assets/img/', to: '../img/' }],
      }),
      new CompressionPlugin({
        test: /\.js$/,
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: '../../analyzer.html',
      }),
    ],
  });
};
