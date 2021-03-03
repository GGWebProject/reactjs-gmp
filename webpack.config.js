const path = require('path');
const webpack = require('webpack');

const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const buildFileName = (ext) => (isDev ? `[name]${ext}` : `[name].[contenthash]${ext}`);

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
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
      title: 'Reactjs-GMP',
      template: path.resolve(__dirname, 'src', 'index.html'),
      minify: isProd,
    }),
    new ESLintPlugin({
      fix: true,
      extensions: ['js', 'jsx'],
      overrideConfigFile: path.resolve(__dirname, 'configs/eslint/.eslintrc.json'),
      ignorePath: path.resolve(__dirname, 'configs/eslint/.eslintignore'),
      cache: true,
      cacheLocation: path.resolve(__dirname, 'configs/eslint/_cache/'),
      lintDirtyModulesOnly: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
      },
      {
        test: /.(sa|sc|c)ss$/,

        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",

            options: { sourceMap: true },
          },
          {
            loader: "sass-loader",

            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: { filename: `static/images/${buildFileName('[ext]')}` },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: { filename: `static/fonts/${buildFileName('[ext]')}` },
      },
    ],
  },

  resolve: { extensions: ['.jsx', '.js'] },

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

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: isProd,
    open: true,
    port: 9000,
  },
};
