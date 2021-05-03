const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
              // esModule: false,
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
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          esModule: false,
          minimize: false,
      }
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
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
      template: path.resolve(__dirname, 'src/index.html'),
      minify: false
    }),
    new MiniCssExtractPlugin({
      filename: './style.css'
    }),
    new CopyWebpackPlugin ({
      patterns: [
        {from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'dist')}
      ]
    })
  ],

  optimization: optimization()
  ,

  output: {
    filename: '[name].[fullhash] .js',
    path: path.resolve(__dirname, 'dist'),
  },

};
