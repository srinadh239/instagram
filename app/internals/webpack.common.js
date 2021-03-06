const path = require('path');
require('@babel/register');
const CleanWebpackPlugin = require('clean-webpack-plugin');
console.log(path.resolve(__dirname, '../../dist'));
module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  context: path.resolve(__dirname, '../../app'),
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}
