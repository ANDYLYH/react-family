import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';
//骑手配送数据统计
export const courierDispatchCount = (params = {}) => {
  return http.post(api.courierDispatchCount,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
