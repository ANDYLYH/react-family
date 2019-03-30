import {http, api,httpService} from '../../http/index.js';
import  qs from 'qs';

//登录
export const login = (params = {}) => {
  return http.post(api.login,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//退出登录
export const logout = (params = {}) => {
  return http.post(api.logout,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改密码
export const updatePassword = (params = {}) => {
  return http.post(api.updatePassword,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
