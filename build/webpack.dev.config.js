const merge = require('webpack-merge');
const path = require('path');
const config = require('../config');
const commonConfig = require('./webpack.common.config.js');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const devConfig  = {
	devtool: 'inline-source-map',
	//入口
	entry: {
		app: [
			'babel-polyfill',
			'react-hot-loader/patch',
			path.join(__dirname, '../src/index.js')
		]
	},

	//输出文件
	output: {
		/*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
	},
	
	/**
	 * src文件夹下面的以.js结尾的文件，要使用babel解析
	 * cacheDirectory是用来缓存编译结果，下次编译加速
	 */
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]","postcss-loader","sass-loader"]
			}
		]
	},
	plugins: [
//		new CopyWebpackPlugin([
//	      {
//	        from: path.resolve(__dirname, '../static'),
//	        to: config.dev.assetsSubDirectory,
//	        ignore: ['.*']
//	      }
//	    ])
	],
	//服务配置
	devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, '../dist'),
		host: config.dev.host,
		port: config.dev.port,// 端口
	},
	  
};
module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);