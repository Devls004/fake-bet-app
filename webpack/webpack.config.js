//This file will serve us later, DO NOT DELETE!

const path = require('path')

module.exports = {
  entry: '../src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx','.ts', '.tsx','.scss'],
  },

  //Pluggin to set our variables.
}