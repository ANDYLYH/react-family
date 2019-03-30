import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询门店实时剩余库存信息
export const queryStoreRealtimeInventoryInfo = (params = {}) => {
  return http.post(api.queryStoreRealtimeInventoryInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改门店实时剩余库存信息
export const updateStoreRealtimeInventoryInfo = (params = {}) => {
  return http.post(api.updateStoreRealtimeInventoryInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询大分类
export const getBigCategory = (params = {}) => {
  return http.post(api.getBigCategory,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询二级分类
export const getlistCategory = (params = {}) => {
  return http.post(api.getlistCategory,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询门店分组信息
export const queryStoreGrouping = (params = {}) => {
  return http.post(api.queryStoreGrouping,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//批量更新库存
export const batchUpdate = (params = {}) => {
  return http.post(api.batchUpdate,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//导出门店实时剩余库存报表
export const exportStoreRealtimeInventoryReport = (params = {}) => {
  return http.post(api.exportStoreRealtimeInventoryReport,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
