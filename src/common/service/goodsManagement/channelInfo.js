import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询仓信息
export const queryChannelInfo = (params = {}) => {
  return http.post(api.queryChannelInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//导入excel
export const uploadMallProductLibraryInfoExcel = (params = {}) => {
  return http.post(api.uploadChannelInfoExcel,params,{
    headers:{
      'Content-Type': 'multipart/form-data'
    }
  });
}
export const getUploadExcel = (file) => {
  let fd = new FormData();
  let promise = new Promise(function(resolve, reject){
    var _token = localStorage.getItem('code') ? localStorage.getItem('code') : '';
    var _platform = localStorage.getItem('platform') ? localStorage.getItem('platform') : '';
    fd.append('accessToken',_token);
    fd.append('platform',_platform);
    fd.append('file',file);
    uploadMallProductLibraryInfoExcel(fd).then(res => {
      resolve(res);
    }).catch(res => {
      reject(res);
    });
  })

  return promise;
};

//查询商品溢价列表数据
export const queryGoodsRateInfo = (params = {}) => {
  return http.post(api.queryGoodsRateInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//保存商品溢价列表数据
export const saveGoodsRateInfo = (params = {}) => {
  return http.post(api.saveGoodsRateInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


//清空导入临时表数据
export const cleartmp = (params = {}) => {
  return http.post(api.cleartmp,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
