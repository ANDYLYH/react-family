import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//骑手派送统计
export const countHorsemanDelivery = (params = {}) => {
  return http.post(api.countHorsemanDelivery,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//修改间隔时间
export const updateAutoSendConfig = (params = {}) => {
  return http.post(api.updateAutoSendConfig,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//查询自动派单的配置信息
export const findByAutoSendConfig = (params = {}) => {
  return http.post(api.findByAutoSendConfig,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//查询全局配置
export const getGlobalInfo = (params = {}) => {
  return http.get(api.getGlobalInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//保存全局配置
export const saveGlobalInfo = (params = {}) => {
  return http.post(api.saveGlobalInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};