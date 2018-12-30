const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => {
  // console.log(env, argv);

  return {
    entry: ['./src/js/app.js', './src/scss/main.scss'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/bundle.js',
    },
    mode: argv.mode,
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /(node_modules|bower_components|vendors)/,
          loader: 'eslint-loader',
          options: {
            fix: true,
          },
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components|vendors)/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: true,
            removeComments: true,
            collapseWhitespace: true,
          },
        },
        {
          test: /\.(sa|sc)ss$/,
          use: [argv.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          },
        },
        {
          test: /\.(eot|svg|ttf|woff2?|otf)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery',
        Waves: 'node-waves',
        _: 'underscore',
        Promise: 'es6-promise',
      }),
      new MiniCssExtractPlugin({
        filename: argv.mode !== 'production' ? 'css/[name].css' : 'css/[name].[hash].css',
        chunkFilename: argv.mode !== 'production' ? 'css/[id].css' : 'css/[id].[hash].css',
        cssProcessorOptions: {
          safe: true,
          discardComments: {
            removeAll: true,
          },
        },
      }),
      new CopyWebpackPlugin([
        {
          from: '**/*',
          to: 'mdb-addons',
          context: path.resolve(__dirname, 'src', 'vendors', 'mdb', 'mdb-addons'),
        },
      ]),
      new CleanWebpackPlugin('dist', { verbose: true }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimizer: [
        new TerserPlugin({
          parallel: true,
          sourceMap: true,
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    performance: {
      hints: false,
    },
  };
};
