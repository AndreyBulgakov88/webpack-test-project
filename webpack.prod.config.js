const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /^((?!base64).)*(png|jpg)$/,
        use: [
          {
            loader: 'img-loader',
            options: {
              plugins: [
                require('imagemin-mozjpeg')({
                  progressive: true,
                  arithmetic: false
                }),
                require('imagemin-pngquant')({
                  floyd: 0.5,
                  speed: 2
                }),
              ]
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js'
  },
});