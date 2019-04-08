const merge = require('webpack-merge');
const path = require('path');
const utils = require('./utils');
const config = require('../config');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config.js');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const env = require('../config/dev.env')

const devConfig = {
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
		rules: [{
			test: /\.css$/,
			use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]", "postcss-loader", "sass-loader"]
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
	    new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': env
		}),
	],
	//服务配置
	devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, '../dist'),
		host: config.dev.host,
		port: config.dev.port, // 端口
		quiet: true, // 如果使用webpack-dev-server，需要设为true，禁止显示devServer的console信息
		overlay: true, // 编译出现错误时，将错误直接显示在页面上
	},

};
const devWebpackConfig = merge({
	customizeArray(a, b, key) {
		/*entry.app不合并，全替换*/
		if(key === 'entry.app') {
			return b;
		}
		return undefined;
	}
})(commonConfig, devConfig);

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})