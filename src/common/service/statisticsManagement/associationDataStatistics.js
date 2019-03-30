import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询门店信息
export const queryAssociationDatastatistics = (params = {}) => {
  return http.post(api.queryAssociationDatastatistics,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


