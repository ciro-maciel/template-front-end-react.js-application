const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

// const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;

module.exports = ({ mode }) => {
  return {
    // https://webpack.js.org/configuration/devtool/
    // devtool: 'source-map',
    mode: mode === 'dev' ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, '../www', 'assets/js/'),
      filename: '[contenthash:12].js',
      // https://stackoverflow.com/questions/34620628/htmlwebpackplugin-injects-relative-path-files-which-breaks-when-loading-non-root
      publicPath: mode === 'dev' ? '/' : 'assets/js/',
      chunkFilename: '[chunkhash:12].js',
    },
    performance: { hints: false },
    optimization: {
      // https://webpack.js.org/plugins/split-chunks-plugin/
      splitChunks: {
        chunks: 'async',
        maxSize: 600000,
        minChunks: 5,
        maxAsyncRequests: 19,
        maxInitialRequests: 19,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 50000,
            },
          },
        },
        {
          test: /\.(png|jp(e*)g|svg|gif|md)$/,
          use: [
            {
              loader: 'url-loader',
            },
            {
              loader: ImageMinimizerPlugin.loader,
              options: {
                severityError: 'warning',
                minimizerOptions: {
                  plugins: [
                    ['optipng', { optimizationLevel: 5 }],
                    [
                      'svgo',
                      {
                        plugins: [
                          {
                            removeViewBox: false,
                          },
                        ],
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: mode === 'dev' ? 'index.html' : '../../index.html',
        showErrors: true,
        chunksSortMode: 'auto',
        minify: {
          removeComments: false,
          collapseWhitespace: true,
          useShortDoctype: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /pt-br/),
      new Dotenv({
        path: path.join(__dirname, `/${mode}/.env`),
        safe: true,
        systemvars: true,
      }),
      new ProgressBarPlugin({
        format: 'Build [:bar] :percent (:elapsed seconds)',
        clear: false,
      }),
    ],
    // https://webpack.js.org/configuration/resolve/#resolvealias
    resolve: {
      alias: {
        components: path.resolve(__dirname, '../src/components/index.js'),
        containers: path.resolve(__dirname, '../src/containers/index.js'),
        providers: path.resolve(__dirname, '../src/providers/index.js'),
      },
    },
  };
};
