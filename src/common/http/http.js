import axios from 'axios';
import * as api from './api.js';
let httpService = '';
var currentHost = location.host;
if(currentHost == '172.16.0.109:3000') {
	
	httpService = '//sitadminapi.qdama.cn'; //测试环境
	
} else if(currentHost == 'sitadminweb.qdama.cn') { //测试
	
	httpService = '//sitadminapi.qdama.cn';
	
} else if(currentHost == 'adminweb.qdama.cn') {//生产
	
	httpService = '//adminapi.qdama.cn'; 
	
}

let http = axios.create({
	baseURL: httpService,
	timeout: 30000,
});
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

http.interceptors.request.use(function(config) {
	// Do something before request is sent
	var _accessToken = localStorage.getItem('code')
	let params = {
		accessToken: _accessToken
	};
	config.params = Object.assign(config.params || {}, params);
	return config;
});

http.interceptors.response.use(function(response) {
	let data = response.data || {};

	if(data.code == '0') {

		return response.data.data || response.data || response;

	} else if(data.code == '10086') {
		return response.data
	} else if(!data.code) {
		return response
	} else if(data.code == '40014') {
		let _tipMessage = {
			code: data.code,
			message: "登录失效，请重新登录！"
		}
		
		return Promise.reject(_tipMessage);
	} else {
		let tipMessage = {
			code: data.code,
			message: data.message
		}
		return Promise.reject(tipMessage);
	}

}, function(error) {
	var originalRequest = error.config;
	if(error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1 && !originalRequest._retry) {
		let tipMessage = {
			code: '-1',
			message: '请求超时'
		}
		return Promise.reject(tipMessage)
	} else {
		let tipMessage = {
			code: '-1',
			message: '网络或系统错误'
		}
		return Promise.reject(tipMessage);
	}
});
export default http;

export {
	api,
	http,
	httpService,
	currentHost,
};