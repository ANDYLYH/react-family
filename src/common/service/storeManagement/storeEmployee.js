import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询门店员工信息
export const queryStoreEmployeeInfo = (params = {}) => {
  return http.post(api.queryStoreEmployeeInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//添加门店员工信息
export const addStoreEmployeeInfo = (params = {}) => {
  return http.post(api.addStoreEmployeeInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改门店员工信息
export const updateStoreEmployeeInfo = (params = {}) => {
  return http.post(api.updateStoreEmployeeInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//删除门店员工信息
export const delStoreEmployeeInfo = (params = {}) => {
  return http.post(api.delStoreEmployeeInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//根据门店名称模糊匹配门店信息
export const findStoreInfoByStoreName = (params = {}) => {
  return http.post(api.findStoreInfoByStoreName,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询所有门店角色
export const findRoleByType = (params = {}) => {
  return http.post(api.findRoleByType,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//启用/停用门店员工
export const editIsStop = (params = {}) => {
  return http.post(api.editIsStop,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询所有的门店分组 
export const queryStoreGrouping = (params = {}) => {
  return http.post(api.queryStoreGrouping,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//取消团长 
export const cancelGroupLeader = (params = {}) => {
  return http.post(api.cancelGroupLeader,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//批量设置
export const addGroupLeader = (params = {}) => {
  return http.post(api.addGroupLeader,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//批量取消核销员 
export const cancelWriteOffClerk = (params = {}) => {
  return http.post(api.cancelWriteOffClerk,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//批量开启核销员 
export const addWriteOffClerk = (params = {}) => {
  return http.post(api.addWriteOffClerk,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}