const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.js',],
        alias: {
            '@components': path.join(__dirname, 'src', 'components'),
        },
    },
  entry: {
    index: path.resolve(__dirname, './src/pages/index/index.js'),
    ui: path.resolve(__dirname, './src/pages/ui/ui.js'),
    registration: path.resolve(__dirname, './src/pages/registration/registration.js'),
    sign_in: path.resolve(__dirname, './src/pages/sign_in/sign_in.js'),
    search_room: path.resolve(__dirname, './src/pages/search_room/search_room.js'),
    room_details: path.resolve(__dirname, './src/pages/room_details/room_details.js'),
  },
  output: {
	path: path.resolve(__dirname, 'dist'),
	publicPath: '/',
    filename: 'js/[name].bundle.js',
   
  },
  module: {
    rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.pug$/,
                use: ['html-loader', 'pug-html-loader']
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                        },
                    },
                    'postcss-loader',
                    {
                        loader: "resolve-url-loader",
                        options: {
                            //keepQuery: true,
                            absolute: true
                        //removeCR: true // to prevent 'no orphan CR found'
                        }
                    }, 
                    { 
                        loader : 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: './src/scss/resources.scss'
                        }
                    }
                ],
            },
			{
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				loader: 'file-loader',
				options:{
					name: '[name].[ext]',
					outputPath :  'img/',
					esModule: false,
				  }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                loader: 'file-loader',
				options:{
					name: '[name].[ext]',
					outputPath :  'fonts/',
					esModule: false,
				  }
            },
        ],
    },
    optimization: {
        splitChunks: {
          chunks: "all",
          minSize: 1,
          minChunks: 2
        }
    },
  plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: path.resolve(__dirname, './src/pages/index/index.pug'),
        }),
        new HtmlWebpackPlugin({
            filename: 'ui.html',
            chunks: ['ui'],
            template: path.resolve(__dirname, './src/pages/ui/ui.pug'),
        }),
        new HtmlWebpackPlugin({
            filename: 'registration.html',
            chunks: ['registration'],
            template: path.resolve(__dirname, './src/pages/registration/registration.pug'),
        }),
        new HtmlWebpackPlugin({
            filename: 'sign_in.html',
            chunks: ['sign_in'],
            template: path.resolve(__dirname, './src/pages/sign_in/sign_in.pug'),
        }),
        new HtmlWebpackPlugin({
            filename: 'search_room.html',
            chunks: ['search_room'],
            template: path.resolve(__dirname, './src/pages/search_room/search_room.pug'),
        }),
        new HtmlWebpackPlugin({
            filename: 'room_details.html',
            chunks: ['room_details'],
            template: path.resolve(__dirname, './src/pages/room_details/room_details.pug'),
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: path.join('style', '[name].css'),
            chunkFilename: '[id].css',
            ignoreOrder: true,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
  ],
  devServer: {
	contentBase: path.resolve(__dirname, './src/pages'),
    port: 8080,
    //hot: true,
    open: false,
  },
  
}