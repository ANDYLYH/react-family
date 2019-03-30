import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询操作记录信息
export const queryOperationRecordsInfo = (params = {}) => {
  return http.post(api.queryOperationRecordsInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
