import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询商品转换关系
export const queryGoodsTransform = (params = {}) => {
  return http.post(api.queryGoodsTransform,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//添加商品转换关系
export const addGoodsTransform = (params = {}) => {
  return http.post(api.addGoodsTransform,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改商品转换关系
export const updateGoodsTransform = (params = {}) => {
  return http.post(api.updateGoodsTransform,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//删除商品转换关系
export const deleteGoodsTransform = (params = {}) => {
  return http.post(api.deleteGoodsTransform,qs.stringify(params),{
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
//查询商品信息
export const queryGoodsInfo = (params = {}) => {
  return http.post(api.queryGoodsInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//导入excel
export const uploadGoodsTransformExcel = (params = {}) => {
  return http.post(api.uploadGoodsTransformExcel,params,{
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
    fd.append('template',file);
    uploadGoodsTransformExcel(fd).then(res => {
      resolve(res);
    }).catch(res => {
      reject(res);
    });
  })

  return promise;
};
