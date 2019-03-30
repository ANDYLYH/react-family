import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询商城通用设置
export const queryMallSetting = (params = {}) => {
	return http.post(api.queryMallSetting,qs.stringify(params),{
		headers:{
			'Content-Type':'application/x-www-form-urlencoded'
		}
	});
}

//保存商城通用设置
export const saveMallSetting = (params = {}) => {
	return http.post(api.saveMallSetting,qs.stringify(params),{
		headers:{
			'Content-Type':'application/x-www-form-urlencoded'
		}
	});
}
