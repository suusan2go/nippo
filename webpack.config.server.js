const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    ServerRouter: `${__dirname}/client/javascripts/ServerRouter.jsx`,
  },
  target: 'node',
  output: {
    path: 'hypernova/dist',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new ExtractTextPlugin('styles.css'),
  ].filter(Boolean),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel'],
      },
      {
        test: /global\.(css|scss)$/,
        include: [/global/],
        loader: ExtractTextPlugin.extract('style', 'css-loader!sass-loader!'),
      },
      {
        test: /\.(scss|css)$/,
        exclude: [/global/],
        loader: ExtractTextPlugin.extract('style', 'css-loader?modules!sass-loader!'),
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=image/svg+xml',
      },
      {
        test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=application/font-woff',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=application/font-woff',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader?name=[path][name]-[hash].[ext]',
      },
    ],
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './client/stylesheets')],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.js.jsx', '.css', '.scss'],
    root: [
      path.resolve(__dirname, 'client/javascripts'),
      path.resolve(__dirname, 'client'),
    ],
  },
};
