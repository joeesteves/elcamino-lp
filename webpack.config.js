var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      { test: /\.(png|jpg)/, loader: ["file-loader?name=assets/images/[hash].[ext]"] },
      { test: /\.s(ass|css)$/, loader: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.pug$/, loader: "pug-loader" },
      { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000&name=assets/fonts/[hash].[ext]' }

    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      jquery: "jquery"
    })
  ]
}

