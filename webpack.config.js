const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_, argv) => {
  const production = argv.mode === 'production';

  return {
    entry: [
      'core-js/stable',
      'regenerator-runtime/runtime',
      path.resolve(__dirname, 'src', 'scss', 'vendor', 'main.scss'),
      path.resolve(__dirname, 'src', 'scss', 'app.scss'),
      path.resolve(__dirname, 'src', 'js', 'vendor', 'main.js'),
      path.resolve(__dirname, 'src', 'js', 'app.js'),
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.bundle.js',
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      open: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      overlay: {
        warnings: false,
        errors: true,
      },
      before(app, server) {
        server._watch(`src/**/**`);
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery',
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'src', 'templates', 'index.html'),
        favicon: path.resolve(__dirname, 'src', 'images', 'favicon.png'),
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader', { loader: 'eslint-loader', options: { fix: true } }],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          exclude: [/font/, /fonts/],
          loader: 'file-loader',
          options: {
            outputPath: 'assets/images',
            name: '[name].[ext]',
            esModule: false,
          },
        },
        {
          test: /\.(eot|svg|ttf|woff?2?|otf)$/,
          exclude: [/img/, /images/],
          loader: 'file-loader',
          options: {
            outputPath: 'assets/webfonts',
            name: '[name].[ext]',
            esModule: false,
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [production ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(html)$/,
          loader: 'html-loader',
          options: {
            esModule: false,
          },
        },
      ],
    },
  };
};
