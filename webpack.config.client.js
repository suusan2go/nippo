const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    bundle: [
      !isProduction && 'webpack/hot/dev-server',
      'babel-polyfill',
      `${__dirname}/client/javascripts/AppRouter.jsx`,
    ].filter(Boolean),
  },
  output: {
    path: `${__dirname}/public/assets`,
    filename: isProduction ? '[name]-[hash].js' : '[name].js',
    publicPath: isProduction ? '/assets' : 'http://localhost:3500/assets/',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new ManifestPlugin({
      fileName: 'webpack-manifest.json',
    }),
    new ExtractTextPlugin(isProduction ? '[name]-[hash].css' : '[name].css'),
    isProduction && new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: true,
    }),
    isProduction && new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$|\.css$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ].filter(Boolean),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel'],
      },
      {
        test: /global\.(css|scss)/,
        include: [/global/],
        loader: ExtractTextPlugin.extract('style', 'css-loader!sass-loader!'),
      },
      {
        test: /\.(scss|css)$/,
        exclude: [/global/],
        loader: isProduction ? ExtractTextPlugin.extract('style', 'css-loader?modules!sass-loader!') : 'style-loader!css-loader?modules!sass-loader!',
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
  devServer: {
    host: '0.0.0.0',
    headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000', 'Access-Control-Allow-Credentials': 'true' },
  },
};
