import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询门店商品销售汇总信息
export const queryGoodsSaleSummaryInfo = (params = {}) => {
  return http.post(api.queryGoodsSaleSummaryInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询门店商品销售汇总详细信息
export const queryGoodsSaleSummaryDetialInfo = (params = {}) => {
  return http.post(api.queryGoodsSaleSummaryDetialInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
