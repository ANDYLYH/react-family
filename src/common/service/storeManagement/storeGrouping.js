import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询门店分组列表
export const queryStoreGrouping = (params = {}) => {
  return http.post(api.queryStoreGrouping,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//删除门店分组列表
export const delStoreGrouping = (params = {}) => {
  return http.post(api.delStoreGrouping,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询所有门店列表
export const queryStoreInfo = (params = {}) => {
  return http.post(api.queryStoreInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//添加门店分组列表
export const addStoreGrouping = (params = {}) => {
  return http.post(api.addStoreGrouping,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改门店分组列表
export const updateStoreGrouping = (params = {}) => {
  return http.post(api.updateStoreGrouping,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询编辑的信息
export const getEditStoreGroupInfo = (params = {}) => {
  return http.post(api.getEditStoreGroupInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}



