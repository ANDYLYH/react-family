
import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//get 请求
//export const getOrderCode = (params = {}) => {
//return http.get(api.orderCode, {params});
//}

//post 请求
//export const updateinvoice = (params = {}) => {
// 	return http.post(api.updateinvoice,params);
//}
//post 请求需要另外设置Content-Type的



//export const updateinvoice = (params = {}) => {
// 	return http.post(api.updateinvoice,qs.stringify(params),{
//		headers:{
//			'Content-Type':'application/x-www-form-urlencoded'
//		}
//	});
//}