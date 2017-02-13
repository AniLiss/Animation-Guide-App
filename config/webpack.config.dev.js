var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
var getClientEnvironment = require('./env');
var paths = require('./paths');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var url = require('file-loader?emitFile=false!./file.png');

var publicPath = '/';
var publicUrl = '';

var env = getClientEnvironment(publicUrl);

module.exports = {
  devtool: 'cheap-module-source-map',

  entry: [

  require.resolve('react-dev-utils/webpackHotDevClient'),


  require.resolve('./polyfills'),

    // Finally, this is your app's code:

    paths.appIndexJs

    ],
    output: {

      path: paths.appBuild,

      pathinfo: true,

      filename: 'static/js/bundle.js',

      publicPath: publicPath
    },
    resolve: {

      fallback: paths.nodePaths,

      extensions: ['.js', '.json', '.jsx', ''],
      alias: {

        'react-native': 'react-native-web'
      }
    },

    module: {

      preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: paths.appSrc,
      }
      ],
      loaders: [
      {
        exclude: [
        /\.html$/,
        /\.(js|jsx)$/,
        /\.css$/,
        /\.json$/,
        /\.svg$/,
        /\.png$/,
        /\.gif$/,
        /\.jpe?g$/
        ],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },

      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: 'babel',
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.svg$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1!postcss')
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$/,
        loader: 'file-loader'
      },
      {
        test   : /\.(png|ico|gif|jpe?g)$/,
        include: /\/node_modules\//,
        loader : 'file?name=[1].[ext]?[hash:6]&regExp=node_modules/(.*)'
      },
      {
        test   : /\.(png|ico|gif|jpe?g)$/,
        exclude: /\/node_modules\//,
        loader : 'file?name=[path][name].[ext]?[hash:6]'
      }
      ]
    },

  // We use PostCSS for autoprefixing only.
  postcss: function() {
    return [
    autoprefixer({
      browsers: [
      '>1%',
      'last 4 versions',
      'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
          ]
        }),
    ];
  },
  plugins: [
  new ExtractTextPlugin('style.css', {
    allChunks: true
  }),
    // Makes the public URL available as %PUBLIC_URL% in index.html, e.g.:
    // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    // In development, this will be an empty string.
    new InterpolateHtmlPlugin({
      PUBLIC_URL: publicUrl
    }),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
    new webpack.DefinePlugin(env),
    // This is necessary to emit hot updates (currently CSS only):
    new webpack.HotModuleReplacementPlugin(),
    // Watcher doesn't work well if you mistype casing in a path so we use
    // a plugin that prints an error when you attempt to do this.
    // See https://github.com/facebookincubator/create-react-app/issues/240
    new CaseSensitivePathsPlugin(),
    // If you require a missing module and then `npm install` it, you still have
    // to restart the development server for Webpack to discover it. This plugin
    // makes the discovery automatic so you don't have to restart.
    // See https://github.com/facebookincubator/create-react-app/issues/186
    new WatchMissingNodeModulesPlugin(paths.appNodeModules)
    ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
