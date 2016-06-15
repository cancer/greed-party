const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './client/src/browser.ts',
    vendor: [
      './node_modules/core-js/client/shim.min.js',
      './node_modules/zone.js/dist/zone.js',
      './node_modules/reflect-metadata/Reflect.js'
    ]
  },
  output: {
    path: './client/dist',
    filename: 'scripts/bundle.js'
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, './client/src/app/')
    },
    extensions: ['', '.ts', '.js'],
    root: path.resolve('../client/src/')
  },
  module: {
    loaders: [
      /*
       * Typescript loader
       */
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      /*
       * CSS loader
       */
      {
        test: /\.css$/,
        loader: 'raw-loader'
      },
      /*
       * HTML loader
       */
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "scripts/vendor.js"),
    new CopyWebpackPlugin([
      { from: './client/src/index.html', to: './' }
    ])
  ],
  devtool: 'source-map'
}
