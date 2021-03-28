const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { LoaderOptionsPlugin } = require('webpack');

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  };
  return config;
};

module.exports = {
  mode: 'development',
  entry: {
    app: "./js/app.js",
  },
  context: path.resolve(__dirname, 'src'),
  devServer: {
    compress: true,
    open: true,
    port: 9000,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',

            options: {
              name: '[path][name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/',
              emitFile: true,
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          limit: 10000,
          name: "[name].[ext]",
          outputPath: 'font/'
        },
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {

              // hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './style.css'
    })
  ],

  optimization: optimization()
  ,

  output: {
    filename: '[name].[fullhash] .js',
    path: path.resolve(__dirname, 'dist'),
  },

};
