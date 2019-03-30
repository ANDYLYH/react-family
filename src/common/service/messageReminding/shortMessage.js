import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//添加短信
export const addShortMessage = (params = {}) => {
  return http.post(api.addShortMessage,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};

//查询已发送短信
export const queryShortMessageInfo = (params = {}) => {
  return http.post(api.queryShortMessageInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};

//批量添加短信
export const batchAddShortMessage = (params = {}) => {
  return http.post(api.batchAddShortMessage,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};

//导入excel
export const uploadShortMessageExcel = (params = {}) => {
  return http.post(api.uploadShortMessageExcel,params,{
    headers:{
      'Content-Type': 'multipart/form-data'
    }
  });
}
export const getUploadExcel = (file) => {
  let fd = new FormData();
  let promise = new Promise(function(resolve, reject){
    var _token = localStorage.getItem('code') ? localStorage.getItem('code') : '';
    fd.append('accessToken',_token);
    fd.append('file',file);
    uploadShortMessageExcel(fd).then(res => {
      resolve(res);
    }).catch(res => {
      reject(res);
    });
  })

  return promise;
};
