import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询商品信息
export const queryMember = (params = {}) => {
  return http.post(api.queryMember,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询地址信息
export const queryAdress = (params = {}) => {
  return http.post(api.queryAdress,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//加入/解除黑名单
export const changeBlacklist = (params = {}) => {
  return http.post(api.changeBlacklist,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
