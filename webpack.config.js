const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");

const config = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      filename: './index.html'
    }),
    new ImageminPlugin({
      bail: false, // Ignore errors on corrupted images
      cache: true,
      imageminOptions: {
        // Lossless optimization with custom option
        // Feel free to experement with options for better result for you
        plugins: [
          imageminGifsicle({
            interlaced: true
          }),
          imageminJpegtran({
            progressive: true
          }),
          imageminOptipng({
            optimizationLevel: 5
          }),
          imageminSvgo({
            removeViewBox: true
          })
        ]
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      { 
        test: /\.pug$/,
        exclude: /node_modules/,
        use: ['pug-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader" // Or `url-loader` or your other loader
          }
        ]
      }
    ]
  }
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {}
  if (argv.mode === 'production') {}

  return config;
}