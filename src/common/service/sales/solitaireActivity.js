import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询社群活动列表
export const querySolitaireActivityInfo = (params = {}) => {
  return http.post(api.querySolitaireActivityInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询社群活动小区信息列表
export const queryActivityStoreInfo = (params = {}) => {
  return http.post(api.queryActivityStoreInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//查询社群活动小区信息列表
export const queryActivityAllStore = (params = {}) => {
  return http.post(api.queryActivityAllStore,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//社群门店
export const queryAssociationGoods = (params = {}) => {
  return http.post(api.queryAssociationGoods,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//新建接龙活动 
export const socialActivityAdd = (params = {}) => {
  return http.post(api.socialActivityAdd,qs.stringify(params),{
  	headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//个性化设置
export const listProductStore = (params = {}) => {
  return http.post(api.listProductStore,qs.stringify(params),{
  	headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//编辑-获取基本信息
export const getActivityBase = (params = {}) => {
  return http.post(api.getActivityBase,qs.stringify(params),{
  	headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//编辑-获取商品信息  
export const listProduct = (params = {}) => {
  return http.post(api.listProduct,qs.stringify(params),{
  	headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//编辑-保存活动信息  
export const activityEditSave = (params = {}) => {
  return http.post(api.activityEditSave,qs.stringify(params),{
  	headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//接龙活动上下线  
export const toggleActivityStatusBatch = (params = {}) => {
  return http.post(api.toggleActivityStatusBatch,qs.stringify(params),{
  	headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}