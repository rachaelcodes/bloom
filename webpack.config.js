var path = require ('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        alias: {
          'masonry': 'masonry-layout',
          'isotope': 'isotope-layout'
        }
      },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};