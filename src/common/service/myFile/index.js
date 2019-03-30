import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';
let uploadUrl  = '';
//图片列表查询
export const pictureQuery = (params = {}) => {
  return http.post(api.pictureQuery,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//图片添加
export const pictureAdd = (params = {}) => {
  return http.post(api.pictureAdd,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//图片删除  
export const pictureDelete = (params = {}) => {
	return http.post(api.pictureDelete, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//获取图片分组  
export const pictureGroupQuery = (params = {}) => {
	return http.post(api.pictureGroupQuery, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//图片更新
export const pictureUpdate = (params = {}) => {
	return http.post(api.pictureUpdate, qs.stringify(params), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
//添加图片分组
export const pictureGroupAdd = (params = {}) => {
  return http.post(api.pictureGroupAdd,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    } 
  });
}; 
//分组名称修改 
export const pictureGroupUpdate = (params = {}) => {
  return http.post(api.pictureGroupUpdate,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//删除分组 
export const pictureGroupDelete = (params = {}) => {
  return http.post(api.pictureGroupDelete,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//批量修改分组
export const batchEditGroup = (params = {}) => {
  return http.post(api.batchEditGroup,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};

//上传图片接口 
export const getUploadImg = (params = {}) => {
	return http.post(uploadUrl, params, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	});
}
// 获取签名
export const policySign = (params = {}) => {
	return http.get(api.UploadImg_sign,{params});
};

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
			let data = res.data;
			uploadUrl = data.host;
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
		 .catch((res)=>{
		 	reject(res);
		 })

	});
	return promise;
};