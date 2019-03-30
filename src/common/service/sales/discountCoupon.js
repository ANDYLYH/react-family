import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//活动列表
export const getCouponPage = (params = {}) => {
  return http.post(api.getCouponPage,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//新建
export const couponAdd = (params = {}) => {
  return http.post(api.couponAdd,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//领取详情
export const getDrawDetail = (params = {}) => {
  return http.post(api.getDrawDetail,qs.stringify(params),{
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
export const getCouponDetail = (params = {}) => {
  return http.post(api.getCouponDetail,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
