import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//活动列表
export const fullPromotionList = (params = {}) => {
  return http.post(api.fullPromotionList,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//活动删除
export const fullPromotionDel = (params = {}) => {
  return http.post(api.fullPromotionDel,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
export const fullPromotionAdd = (params = {}) => {
  return http.post(api.fullPromotionAdd,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const fullPromotionDetail = (params = {}) => {
  return http.post(api.fullPromotionDetail,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const fullPromotionUpdateActivity = (params = {}) => {
  return http.post(api.fullPromotionUpdateActivity,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const fullPromotionUpdateStore = (params = {}) => {
  return http.post(api.fullPromotionUpdateStore,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const fullPromotionUpdateProduct = (params = {}) => {
  return http.post(api.fullPromotionUpdateProduct,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const fullPromotionSetStatus = (params = {}) => {
  return http.post(api.fullPromotionSetStatus,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
