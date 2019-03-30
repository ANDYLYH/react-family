import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询商城商品分类信息的表格数据
export const queryMallProductClassifyInfo = (params = {}) => {
  return http.post(api.queryMallProductClassifyInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//修改是否展示分类
export const showClassify = (params = {}) => {
  return http.post(api.showClassify,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//删除商城商品分类信息的表格数据
export const deleteMallProductClassifyInfo = (params = {}) => {
  return http.post(api.deleteMallProductClassifyInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//添加商品分类
export const addMallProductClassifyInfo = (params = {}) => {
  return http.post(api.addMallProductClassifyInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//修改商品分类
export const updateMallProductClassifyInfo = (params = {}) => {
  return http.post(api.updateMallProductClassifyInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
