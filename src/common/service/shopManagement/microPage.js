import { http, api, httpService } from '@/common/http/index.js';
import qs from 'qs';
let uploadUrl  = '';
//新增
export const webModel_add = (params = {}) => {
	return http.post(api.webModel_add, JSON.stringify(params), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
//优惠券查询
export const getCounponForCreate = (params = {}) => {
	return http.post(api.getCounponForCreate, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//设置商城主页
export const setDefaultWebModel = (params = {}) => {
	return http.post(api.setDefaultWebModel, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//模板详情
export const queryWebModel = (params = {}) => {
	return http.post(api.queryWebModel, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//微页面详情
export const queryEditWebModel = (params = {}) => {
	return http.post(api.queryEditWebModel, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//模板更新
export const webModel_update = (params = {}) => {
	return http.post(api.webModel_update, JSON.stringify(params), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
//模板信息列表
export const webModelQueryWeb = (params = {}) => {
	return http.post(api.webModel_queryWeb, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//模板信息删除
export const webModelDeleteWeb = (params = {}) => {
	return http.post(api.webModel_deleteWeb, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//模板复制
export const webModelCopy = (params = {}) => {
	return http.post(api.webModel_copy, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//商品分组
export const productGroup = (params = {}) => {
	return http.post(api.product_group, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//商品列表
export const productList = (params = {}) => {
	return http.post(api.product_list, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//限时折扣活动
export const discountMicroPage = (params = {}) => {
	return http.post(api.discountMicroPage, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//优惠券查询
export const getCouponPage = (params = {}) => {
	return http.post(api.mGetCouponPage, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}