const path = require('path')
const remove = require('lodash/remove')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

const DEV = process.env.NODE_ENV === 'development'
const PROD = process.env.NODE_ENV === 'production'

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['regenerator-runtime/runtime', '.'],
  output: {
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/',
    filename: '[hash].js',
  },
  plugins: remove([
    new HtmlPlugin({template: 'index.ejs'}),
    new webpack.EnvironmentPlugin('NODE_ENV'),
    new ExtractTextPlugin('[contenthash].css', {disable: DEV}),
    new webpack.optimize.OccurenceOrderPlugin(),
    PROD && new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {warnings: false},
    }),
  ]),
  debug: DEV,
  devtool: DEV && 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?cacheDirectory',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules!postcss'),
        exclude: /node_modules/,
      },
      {
        test: /\.(ttf|eot|png|jpg|svg|woff2?)$/,
        loader: 'url?limit=5000',
      },
    ],
  },
  postcss: () => [
    require('autoprefixer')({browsers: ['last 2 Chrome versions']}),
  ],
}
