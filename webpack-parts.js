/* eslint-disable no-undef */

var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var  ExtractTextPlugin = require('extract-text-webpack-plugin');

var autoprefixer = require('autoprefixer');
var postcssSimpleVars = require("postcss-simple-vars")
var postcssNested = require("postcss-nested")
var postcssImport = require("postcss-import")
var stylelint = require('stylelint')

exports.devServer = function(options) {
   return {
      devServer: {
         // Enable history API fallback so HTML5 History API based
         // routing works. This is a good default that will come
         // in handy in more complicated setups.
         historyApiFallback: true,

         // Unlike the cli flag, this doesn't set
         // HotModuleReplacementPlugin!
         hot: true,
         inline: true,
         contentBase: "../build/",
         // Display only errors to reduce the amount of output.
         stats: 'errors-only',

         // Parse host and port from env to allow customization.
         //
         // If you use Vagrant or Cloud9, set
         // host: options.host || '0.0.0.0';
         //
         // 0.0.0.0 is available to all network devices
         // unlike default `localhost`.
         host: options.host, // Defaults to `localhost`
         port: options.port // Defaults to 8080
      },
      plugins: [
         // Enable multi-pass compilation for enhanced performance
         // in larger projects. Good default.
         new webpack.HotModuleReplacementPlugin({
            multiStep: true
         })
      ]
   };
};

exports.minifyJS = function() {
   return {
      plugins: [
         new webpack.optimize.UglifyJsPlugin( {
            compress: {
               warnings: false
            },

            mangle: {
               except: ['webpackJsonp']
            }
         })
      ]
   }
};

exports.extractBundle = function(options) {
   const entry = [];
   entry[options.name] = options.entries;

   return {
      entry: entry,
      plugins: [
         // Extract bundle and manifest files. Manifest is
         // needed for reliable caching.
         new webpack.optimize.CommonsChunkPlugin({
            names: [options.name, 'manifest']
         })
      ]
   }
};

exports.clean = function(path) {
   return {
      plugins: [
         new CleanWebpackPlugin([path], {
            // Without `root` CleanWebpackPlugin won't point to our
            // project and will fail to work.
            root: process.cwd(),
            "verbose": true
         })
      ]
   };
};

exports.extractCSS = function(paths) {
   return {
      module: {
         loaders: [
            // Extract CSS during build
            {
               test: /(scss|css)$/,
               loader: ExtractTextPlugin.extract(
                  'style',
                  'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]',
                  'post-css'
               ),
               include: paths
            },
            {
               test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
               loader : 'file-loader?name=fonts/[name].[hash].[ext]',
               include: paths
            }
         ]
      },
      plugins: [
         // Output extracted CSS to a file
         new ExtractTextPlugin('[name].css', {
            allChunks: true
         })
      ]
   };



};

exports.setupCSS = function(paths) {

   return {
      module: {
         preLoaders: [
            {
               test: /\.css$/,
               loaders: ['postcss'],
               include: PATHS.app
            },

         ],
         loaders: [
            {
               test: /(scss|css)$/,
               loaders: [
                  'style',
                  'css-loader?modules=true&sourceMap=true&localIdentName=[name]__[local]___[hash:base64:5]',
                  'postcss'

               ],
               include: paths
            },
            {
               test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
               loader : 'file-loader?name=fonts/[name].[hash].[ext]',
               include: paths
            }
         ],
      },

      postcss: function(paths, webpack)  {

         return [
            stylelint,
            autoprefixer({
               browsers: ['last 2 versions']
            }),

            postcssImport ({
               path: paths,
               addDependencyTo: webpack
            }),

            postcssSimpleVars,
            postcssNested
         ]

      }



   }

}

/* eslint-enable no-undef */