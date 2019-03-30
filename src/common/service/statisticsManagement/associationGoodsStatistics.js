import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询社群商品统计
export const queryAssociationGoodsStatistics = (params = {}) => {
  return http.post(api.queryAssociationGoodsStatistics,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//查询社群商品统计（柱状图）
export const queryGraphStatistics = (params = {}) => {
  return http.post(api.queryGraphStatistics,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
