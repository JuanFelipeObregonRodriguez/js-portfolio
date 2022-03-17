const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    assetModuleFilename: "assets/images/[hash][ext][query]",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css|\.styl$/i,
        use: [MiniCssExtractPlugin.loader, 
          'css-loader',
        
        ],

      },
      {
        test:/\.png/,
        type:'asset/resource'
      },
      {
        test:/\.(woff|woff2)$/,
        use:{
          loader: 'url-loader',
          options:{
            limit:10000,
            mimeType:'aplication/font-woff',
            name:"[name].[ext]",
            output:"./assets/fonts",
            publicPath:"./assets/fonts",
            esModule: false
          }
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html ',
    }),
    new MiniCssExtractPlugin(
      {
        filename:"assets/[name].[contenthash].css"
      },
    ),
    new CopyPlugin({
      patterns:[{

         from: path.resolve(__dirname, "src", "assets/images"),
         to:"assets/images",
      }]
    }),
    new Dotenv(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize:true,
    minimizer:[
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  },
};