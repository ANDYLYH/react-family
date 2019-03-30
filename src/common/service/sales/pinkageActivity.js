import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询包邮活动列表信息
export const queryPinkageActivityInfo = (params = {}) => {
  return http.post(api.queryPinkageActivityInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//删除包邮活动信息
export const deletePinkageActivityInfo = (params = {}) => {
  return http.post(api.deletePinkageActivityInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//添加包邮活动信息
export const addPinkageActivity = (params = {}) => {
  return http.post(api.addPinkageActivity,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//修改包邮活动信息
export const updatePinkageActivity = (params = {}) => {
  return http.post(api.updatePinkageActivity,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//包邮活动有效状态设置
export const handleOpeStatus = (params = {}) => {
  return http.post(api.handleOpeStatus,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


//查询网点列表信息
export const queryNetStoreInfo = (params = {}) => {
  return http.post(api.queryNetStoreInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//查询活动设置信息
export const queryPinkageActivityBaseInfo = (params = {}) => {
  return http.post(api.queryPinkageActivityBaseInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//保存活动设置信息
export const handelSavePinkageActivityBaseInfo = (params = {}) => {
  return http.post(api.handelSavePinkageActivityBaseInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//查询选择门店信息
export const queryPinkageActivityStoreInfo = (params = {}) => {
  return http.post(api.queryPinkageActivityStoreInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//保存选择门店信息
export const handelSavePinkageActivityStoreInfo = (params = {}) => {
  return http.post(api.handelSavePinkageActivityStoreInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
