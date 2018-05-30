var path = require("path")
var webpack = require('webpack')

module.exports = {
  context: __dirname,

  entry: {
    // Add as many entry points as you have container-react-components here
    App1: './reactjs/App1',
    App2: './reactjs/App2',
    Main: './reviews/src/index',
    vendors: ['react'],
  },

  output: {
      path: path.resolve('./locus/static/bundles/local/'),
      filename: "[name]-[hash].js"
  },

  externals: [
  ], // add all vendor libs

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ], // add all common plugins here

  module: {
    loaders: [
        {
            test: /\.(gif|jpe?g|png|ico)$/,
            loader: 'url-loader?limit=10000'
        },
                {
            test: /\.(png|jpg)$/,
            loader: 'file-loader'
        },
    ] // add all common loaders here
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}
