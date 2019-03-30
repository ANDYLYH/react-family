import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';
//骑手配送距离数据统计
export const getDistanceCount = (params = {}) => {
  return http.post(api.getDistanceCount,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
