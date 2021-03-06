const path = require('path');
//压缩文件
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var CleanWebpackPlugin = require('clean-webpack-plugin');
//将css生成具体文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var merge = require('webpack-merge');
var commonConfig = require('./webpack.common.config.js');
const publicConfig = {
	devtool: 'cheap-module-source-map',
	/**
	 * src文件夹下面的以.js结尾的文件，要使用babel解析
	 * cacheDirectory是用来缓存编译结果，下次编译加速
	 */
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: ["css-loader?modules&localIdentName=[local]-[hash:base64:5]", "postcss-loader"]
			})
		}]
	},
	plugins: [
		//清理文件夹
		new CleanWebpackPlugin(),
		/**
		 * 文件压缩
		 */
		new UglifyJSPlugin(),

		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		//将css生成具体文件
		new ExtractTextPlugin({
			filename: '[name].[contenthash:5].css',
			allChunks: true
		}),
	]
};
module.exports = merge(commonConfig, publicConfig);