import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询线下门店实时销售信息
export const queryStoreRealtimeSalesInfo = (params = {}) => {
  return http.post(api.queryStoreRealtimeSalesInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询线下门店实时销售详细信息
export const queryStoreRealtimeSalesDetialInfo = (params = {}) => {
  return http.post(api.queryStoreRealtimeSalesDetialInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
