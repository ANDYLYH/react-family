import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询社群高级设置
export const queryCommunitySetting = (params = {}) => {
	return http.post(api.queryCommunitySetting,qs.stringify(params),{
		headers:{
			'Content-Type':'application/x-www-form-urlencoded'
		}
	});
}

//保存社群高级设置
export const saveCommunitySetting = (params = {}) => {
	return http.post(api.saveCommunitySetting,qs.stringify(params),{
		headers:{
			'Content-Type':'application/x-www-form-urlencoded'
		}
	});
}
