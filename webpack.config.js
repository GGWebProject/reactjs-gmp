const path = require('path');
const webpack = require('webpack');

/*
 * We've enabled MiniCssExtractPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

const TerserPlugin = require('terser-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ESLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const buildFileName = (ext) => (isDev ? `[name]${ext}` : `[name].[contenthash]${ext}`);

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  devtool: 'inline-source-map',
  output: {
    filename: buildFileName('.js'),
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: `styles/${buildFileName('.css')}` }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Project',
      template: './src/index.html',
    }),
    new ESLintPlugin({
      fix: true,
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      overrideConfigFile: path.resolve(__dirname, 'configs/eslint/.eslintrc.json'),
      ignorePath: path.resolve(__dirname, 'configs/eslint/.eslintignore'),
      cache: true,
      cacheLocation: path.resolve(__dirname, 'configs/eslint/'),
      lintDirtyModulesOnly: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: [/node_modules/],
      },
      {
        test: /.(sa|sc|c)ss$/,

        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',

            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',

            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: { filename: `static/images/${buildFileName('[ext]')}` },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
        generator: { filename: `static/fonts/${buildFileName('[ext]')}` },
      },
    ],
  },

  resolve: { extensions: ['.tsx', '.ts', '.js'] },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    port: 9000,
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: false,
    },
  },
};
