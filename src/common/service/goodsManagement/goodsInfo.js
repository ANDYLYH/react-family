import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询商品信息
export const queryGoodsInfo = (params = {}) => {
  return http.post(api.queryGoodsInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//获取大分类
export const getBigCategory = (params = {}) => {
  return http.post(api.getBigCategory,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//获取分类
export const getlistCategory = (params = {}) => {
  return http.post(api.getlistCategory,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询未发布到有赞的商品
export const queryNoPublishGoodsInfo = (params = {}) => {
  return http.post(api.queryNoPublishGoodsInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询未发布到有赞的商品
export const settingRate = (params = {}) => {
  return http.post(api.settingRate,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询未发布到有赞的商品
export const syncGoods = (params = {}) => {
  return http.post(api.syncGoods,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//获取商品信息及规格
export const getInfoAndSpec = (params = {}) => {
  return http.post(api.getInfoAndSpec,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//保存商品安全比例及规格
export const saveSafeRateAndSpec = (params = {}) => {
  return http.post(api.saveSafeRateAndSpec,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//设置安全比率
export const settingSaferate = (params = {}) => {
  return http.post(api.settingSaferate,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//执行推送到第三方
export const pushProductSku = (params = {}) => {
  return http.post(api.pushProductSku,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//导入excel
export const uploadGoodsInfoExcel = (params = {}) => {
  return http.post(api.uploadGoodsInfoExcel,params,{
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
    uploadGoodsInfoExcel(fd).then(res => {
      resolve(res);
    }).catch(res => {
      reject(res);
    });
  })

  return promise;
};

