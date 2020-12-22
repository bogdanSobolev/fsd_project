const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const сopy = require('copy-webpack-plugin');

module.exports = {
    //context: path.resolve(__dirname, 'src'),
    resolveLoader: {
        alias: {
            'test-loader': require.resolve('./loaders/testLoader.js'),
            'test-loader-two': require.resolve('./loaders/testLoaderTwo.js'),
            '@components': path.join(__dirname, 'src', 'components'),
        }
    },
  entry: {
    index: path.resolve(__dirname, './src/pages/index/index.js'),
    test: path.resolve(__dirname, './src/pages/test/test.js'),
    ui: path.resolve(__dirname, './src/pages/ui/ui.js'),
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
            // {
            //     test: /\\components\.pug$/,
            //     use: [{
            //         loader: 'bemdecl-to-fs-loader',
            //         // Указываем уровни переопределения и расширения технологий
            //         options: { levels: ['components'], extensions: ['css', 'js', 'pug'] }
            //     },'html2bemdecl-loader', 'pug-html-loader']
            // },
            // {
            //     test: /\\components\.html$/,
            //     use: ['test-loader']
            // },
            // {
            //     test: /\.pug$/,
            //     use: ['html-loader', {
            //         loader: 'bemdecl-to-fs-loader',
            //         // Указываем уровни переопределения и расширения технологий
            //         options: { levels: ['components'], extensions: ['css', 'js', 'pug'] }
            //     },'html2bemdecl-loader', 'pug-html-loader']
            // },
            // {
            //     test: /\.pug$/,
            //     use: ['pug-loader']
            // },
            {
                test: /\.pug$/,
                use: ['html-loader', 'pug-html-loader']
            },
            // {
            //     test: /\.(scss|css)$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader',
            //         {
            //             loader: "resolve-url-loader",
            //             options: {
            //                 //keepQuery: true,
            //                 absolute: true
            //             //removeCR: true // to prevent 'no orphan CR found'
            //             }
            //         }, 
            //         { 
            //             loader : 'sass-loader' , 
            //             options : { 
            //                 sourceMap : true 
            //             }
            //         }
            //     ],
            // },
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
            filename: 'index.html', // название выходного файла
            chunks: ['index'],
            template: path.resolve(__dirname, './src/pages/index/index.pug'), // шаблон
            //template: require('!html-loader!pug-html-loader!./src/pages/index/index.pug')
        }),
        new HtmlWebpackPlugin({
            filename: 'test.html', // шаблон
            chunks: ['test'],
            template: path.resolve(__dirname, './src/pages/test/test.pug'), // название выходного файла
        }),
        new HtmlWebpackPlugin({
            filename: 'ui.html', // шаблон
            chunks: ['ui'],
            template: path.resolve(__dirname, './src/pages/ui/ui.pug'), // название выходного файла
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'index.html', // название выходного файла
        //     chunks: ['index'],
        //     template: path.resolve(__dirname, './src/pages/index/index.html'), // шаблон
        // }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: path.join('style', '[name].css'),
            chunkFilename: '[id].css'
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