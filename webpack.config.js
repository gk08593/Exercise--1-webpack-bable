const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
     // Webpack configuration goes here
     mode: 'development', 
     // mode tell webpack this configuration is for development(mode means optimized for speed and development env.)
     // or production(it give set of default values for deploying your application).
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
      
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    open: true
  }
};