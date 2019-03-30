import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

export const financial = (params = {}) => {
  return http.post(api.financial,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}



