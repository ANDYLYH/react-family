import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询门店商品销售平均数信息
export const queryGoodsSellMeanInfo = (params = {}) => {
  return http.post(api.queryGoodsSellMeanInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查看门店商品销售平均数详细信息
export const queryGoodsSellMeanDetialInfo = (params = {}) => {
  return http.post(api.queryGoodsSellMeanDetialInfo,qs.stringify(params),{
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


