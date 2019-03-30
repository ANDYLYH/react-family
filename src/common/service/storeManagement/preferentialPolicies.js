import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询单品特价信息
export const querySpecialProduct = (params = {}) => {
  return http.post(api.querySpecialProduct,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//查询促销活动信息
export const querySalesPromotion = (params = {}) => {
  return http.post(api.querySalesPromotion,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//查询促销活动详细信息
export const queryPromotionInfo = (params = {}) => {
  return http.post(api.queryPromotionInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询促销活动商品信息
export const queryPromotionProductInfo = (params = {}) => {
  return http.post(api.queryPromotionProductInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询促销活动门店信息
export const queryPromotionStoreInfo = (params = {}) => {
  return http.post(api.queryPromotionStoreInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}