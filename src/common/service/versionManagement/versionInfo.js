import { http, api, httpService } from '@/common/http/index.js';
import qs from 'qs';
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
  var  suffix = ''
  if (pos != -1) {
    suffix = filename.substring(pos)
  }
  return suffix;
};
export const  random_string = (len) => {
  var len = len || 32;
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  var maxPos = chars.length;
  var pwd = '';
  for (var i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};

export const getUploadImgSrc = (file) => {
  let content_len = Math.round(file.size * 100 / 1024) / 100;
  let fd = new FormData();
  // let name = 'mallH5/' + random_string(32) + get_suffix(file.name);
  let name = file.name
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


//版本信息上传
export const uploadVersion = (params = {}) => {
  return http.post(api.uploadVersion,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询版本信息
export const getversion = (params = {}) => {
  return http.post(api.getversion,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//版本信息上传
export const addVersion = (params = {}) => {
  return http.post(api.addVersion,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

