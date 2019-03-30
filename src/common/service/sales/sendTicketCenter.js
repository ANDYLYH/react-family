import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';


export const getCounponForCreate = (params = {}) => {
  return http.post(api.getCounponForCreate,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


export const counponCenterAdd = (params = {}) => {
  return http.post(api.counponCenterAdd,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


export const getNewGiftAndCenterPage = (params = {}) => {
  return http.post(api.getNewGiftAndCenterPage,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const getDirectedCouponPage = (params = {}) => {
  return http.post(api.getDirectedCouponPage,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
export const enableCoupon = (params = {}) => {
  return http.post(api.enableCoupon,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
export const centerDeleteActivity = (params = {}) => {
  return http.post(api.centerDeleteActivity,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const getNewGiftAndCenterDetail = (params = {}) => {
  return http.post(api.getNewGiftAndCenterDetail,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
export const getDirectedDetail = (params = {}) => {
  return http.post(api.getDirectedDetail,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
