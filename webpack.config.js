/* eslint-disable no-undef */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./webpack-parts');

const PATHS = {
   app: path.join(__dirname, 'app'),
   build: path.join(__dirname, 'build')
};

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
   template: PATHS.app + '/index.html',
   filename: 'index.html',
   inject: 'body'
});

const common = {
   entry: {
      app: PATHS.app

   },

   output: {
      path: PATHS.build,
      filename: '[name].js'

   },

   module: {
      preLoaders: [
         {
            test: /\.jsx?$/,
            loaders: ['eslint'],
            include: PATHS.app
         }
      ],
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
         },


      ]
   },

   plugins: [HTMLWebpackPluginConfig]

};

var config;

switch(process.env.npm_lifecycle_event) {
   case 'build': //build
      config = merge(
         common,
         {
            devtool: 'source-map',
            output: {
               path: PATHS.build,
               filename: '[name].[chunkhash].js',
               // This is used for require.ensure. The setup
               // will work without but this is useful to set.
               chunkFilename: '[chunkhash].js'
            }
         },
         parts.clean(PATHS.build),
         parts.extractBundle({
            name: 'vendor',
            entries: ['react']
         }),

         parts.minifyJS(),
         parts.extractCSS(PATHS.app)
      );
      break;
   default: // dev server
      config = merge(
         common,
         parts.setupCSS(PATHS.app),
         {
            devtool: 'eval-source-map'
         },
         parts.devServer({
            // Customize host/port here if needed
            host: process.env.HOST,
            port: process.env.PORT
         })
      );
      break;
}

module.exports = validate(config);

/* eslint-enable no-undef */