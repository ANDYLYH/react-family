import { http, api, httpService } from '@/common/http/index.js';
import qs from 'qs';


export const complaintInfo = (params = {}) => {
	return http.post(api.complaintInfo, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}

export const complaintList = (params = {}) => {
	return http.post(api.complaintList, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}

export const complaintDel = (params = {}) => {
	return http.post(api.complaintDel, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
export const complaintSave = (params = {}) => {
	return http.post(api.complaintSave, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}

export const complaintSendMsg = (params = {}) => {
	return http.post(api.complaintSendMsg, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}

export const mallstoreSearch = (params = {}) => {
	return http.post(api.mallstoreSearch, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
