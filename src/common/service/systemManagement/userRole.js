import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询角色信息
export const queryUserRoleInfo = (params = {}) => {
  return http.post(api.queryUserRoleInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//添加角色信息
export const addUserRoleInfo = (params = {}) => {
  return http.post(api.addUserRoleInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改角色信息
export const updateUserRoleInfo = (params = {}) => {
  return http.post(api.updateUserRoleInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//删除角色信息
export const deleteUserRoleInfo = (params = {}) => {
  return http.post(api.deleteUserRoleInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询所有系统菜单
export const findSystemMenu = (params = {}) => {
  return http.post(api.findSystemMenu,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//根据id查询角色权限
export const findById = (params = {}) => {
  return http.post(api.findById,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
