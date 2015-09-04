var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/mole-redux.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'mole-redux.js',
    publicPath: '/dist/',
    libraryTarget: 'var',
    library: 'Mole'

  },
  externals: {
    'mole-reporter': 'mole-reporter'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};