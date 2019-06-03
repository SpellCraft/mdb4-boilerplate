/**
 * Webpack Plugins
 */
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

/**
 * HRM plugin for HTML files for webpack-dev-server
 */
let devServer;
function reloadHtml() {
  const cache = {};
  const plugin = { name: 'CustomHtmlReloadPlugin' };

  this.hooks.compilation.tap(plugin, (compilation) => {
    compilation.hooks.htmlWebpackPluginAfterEmit.tap(plugin, (data) => {
      const orig = cache[data.outputName];
      const html = data.html.source();

      // Emit only on new changes
      if (orig && orig !== html) {
        devServer.sockWrite(devServer.sockets, 'content-changed');
      }

      // Push updated content to dev-server
      cache[data.outputName] = html;
    });
  });
}

/**
 * Webpack Configuration
 */
module.exports = (_, argv) => {
  // Are we building the project for production?
  const production = argv.mode === 'production';

  return {
    entry: [path.resolve(__dirname, 'src', 'app.js'), path.resolve(__dirname, 'src', 'scss', 'style.scss')],
    output: {
      filename: 'assets/js/[name].[hash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: production ? 'production' : 'development',
    devtool: 'source-map',
    target: 'web',
    devServer: {
      compress: true,
      hot: true,
      inline: true,
      open: true,
      contentBase: path.join(__dirname, 'dist'),
      before(app, server) {
        devServer = server;
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/, /lib/],
          use: [
            'babel-loader',
            {
              loader: 'eslint-loader',
              options: {
                fix: true,
              },
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [production ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          exclude: [/font/, /fonts/],
          loader: 'file-loader',
          options: {
            name: './assets/images/[folder]/[name].[ext]',
            publicPath: '../../',
            /**
             * Note: Assets are loaded from the same path as the generated CSS-files
             *       Adjust publicPath{publicPath} accordingly if you change css paths
             */
          },
        },
        {
          test: /\.(eot|svg|ttf|woff2?|otf)$/,
          exclude: [/img/, '/images/'],
          loader: 'file-loader',
          options: {
            name: './assets/fonts/[folder]/[name].[ext]',
            publicPath: '../../',
            /**
             * Note: Assets are loaded from the same path as the generated CSS-files
             *       Adjust publicPath{publicPath} accordingly if you change css paths
             */
          },
        },
        {
          test: /\.(html)$/,
          loader: 'html-loader',
        },
      ],
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: path.join(__dirname, 'dist', 'index.html'),
        template: path.join(__dirname, 'src', 'html', 'index.html'),
        minify: production,
      }),
      new MiniCssExtractPlugin({
        filename: `assets/css/${production ? '[name].[chunkhash].css' : '[name].css'}`,
        chunkFilename: `assets/css/${production ? '[id].[chunkhash].css' : '[id].css'}`,
      }),
      reloadHtml,
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery',
      }),
      new CopyWebpackPlugin([
        {
          from: '**/*',
          to: 'mdb-addons',
          context: path.resolve(__dirname, 'src', 'lib', 'mdb', 'mdb-addons'),
        },
      ]),
      new CleanWebpackPlugin(),
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          extractComments: false,
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          },
          canPrint: true,
        }),
      ],
    },
    performance: {
      // hints: false,
    },
  };
};
