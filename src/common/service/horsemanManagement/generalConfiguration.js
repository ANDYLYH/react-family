import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//自动配送全局配置查询
export const queryGeneralConfiguration = (params = {}) => {
  return http.post(api.queryGeneralConfiguration,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//保存自动配送全局配置
export const saveGeneralConfiguration = (params = {}) => {
  return http.post(api.saveGeneralConfiguration,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

