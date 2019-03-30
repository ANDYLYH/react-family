import { http, api, httpService } from '@/common/http/index.js';
import qs from 'qs';

//删除
export const deleteActivity = (params = {}) => {
	return http.post(api.deleteActivity, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//查询
export const listarticleActivity = (params = {}) => {
	return http.post(api.listarticleActivity, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//更改排序
export const changeorderActivity = (params = {}) => {
	return http.post(api.changeorderActivity, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//修改
export const updateActivity = (params = {}) => {
	return http.post(api.updateActivity, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//新增
export const addActivity = (params = {}) => {
	return http.post(api.addActivity, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//获取签名
export const policySign = (params = {}) => {
	return http.get(api.policySign, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//上传图片接口
let uploadUrl = "";
export const getUploadImg = (params = {}) => {
	return http.post(uploadUrl, params, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	});
}
export const get_suffix = (filename) => {
	var pos = filename.lastIndexOf('.')
	var suffix = ''
	if(pos != -1) {
		suffix = filename.substring(pos)
	}
	return suffix;
};
export const random_string = (len) => {
	var len = len || 32;
	var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
	var maxPos = chars.length;
	var pwd = '';
	for(var i = 0; i < len; i++) {
		pwd += chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return pwd;
};

export const getUploadImgSrc = (file) => {
	let content_len = Math.round(file.size * 100 / 1024) / 100;
	let fd = new FormData();
	let name = 'mallH5/' + random_string(32) + get_suffix(file.name);
	let promise = new Promise(function(resolve, reject) {
		policySign().then((res) => {
			//			console.log(res)
			let data = res;
			uploadUrl = res.host;
			fd.append('Content-Length', content_len);
			fd.append('key', name);
			fd.append('policy', data.policy);
			fd.append('OSSAccessKeyId', data.accessid);
			fd.append('success_action_status', '200');
			fd.append('signature', data.signature);
			fd.append('expire', data.expire);
			fd.append('file', file);
			getUploadImg(fd).then(res => {
				let imgSrc = uploadUrl + '/' + name;
				resolve(imgSrc);
			}).catch(res => {
				reject(res);
			});
		})
		//		.catch((res) => {
		//
		//			reject(res);
		//		})

	});
	return promise;
};

//获取轮播图管理列表
export const queryBannerInfo = (params = {}) => {
	return http.post(api.queryBannerInfo, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//添加banner管理列表信息
export const addBannerInfo = (params = {}) => {
	return http.post(api.addBannerInfo, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//修改banner管理列表信息
export const updateBannerInfo = (params = {}) => {
	return http.post(api.updateBannerInfo, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//删除banner管理列表信息
export const deleteBannerInfo = (params = {}) => {
	return http.post(api.deleteBannerInfo, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//banner管理列表信息排序
export const bannerInfoChangeorder = (params = {}) => {
	return http.post(api.bannerInfoChangeorder, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
