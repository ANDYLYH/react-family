const path = require('path');

//将js插入指定模板里面
var HtmlWebpackPlugin = require('html-webpack-plugin');
const utils = require('./utils');
const config = require('../config');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

 const commonConfig = {
	//入口
	entry: {
		app: [
			"babel-polyfill",
			path.join(__dirname, '../src/index.js')
		],
		vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
	},
	//输出文件  
	//每次编译添加hash值，避免缓存
	output: {
		path: config.build.assetsRoot,
		filename: 'js/[name].[chunkhash].js',
		chunkFilename: 'js/[name].[chunkhash].js',
		publicPath: process.env.NODE_ENV === 'production'
			        ? config.build.assetsPublicPath
			        : config.dev.assetsPublicPath
	},
	/**
	 * src文件夹下面的以.js结尾的文件，要使用babel解析
	 * cacheDirectory是用来缓存编译结果，下次编译加速
	 */
	module: {
		rules: [{
				test: /\.js$/,
				use: ['babel-loader?cacheDirectory=true'],
				include: path.join(__dirname, '../src')
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192
					}
				}]
			}
		]
	},
	plugins: [
		/**
		 * 这个插件，每次会自动把js插入到你的模板index.html里面去。
		 */
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
      inject: true
		}),
		new webpack.HashedModuleIdsPlugin(),
		/**
		 * 提取公共代码 ，将不会改变的代码块放到具体某一个文件里面，减少带宽的浪费（加载速度）
		 */
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		//
		new webpack.optimize.CommonsChunkPlugin({
			name: 'runtime'
		}),
	],
	//别名
	resolve: {
	    alias: {
	      '@': resolve('src'),
	    }
	},
};
module.exports = commonConfig;