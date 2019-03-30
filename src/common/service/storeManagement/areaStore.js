import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询地区门店信息
export const queryAreaStoreInfo = (params = {}) => {
  return http.post(api.queryAreaStoreInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}