import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询社群所有订单信息
export const queryAssociationAllOrderInfo = (params = {}) => {
  return http.post(api.queryAssociationAllOrderInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询销售信息
export const getSocialStatistic = (params = {}) => {
  return http.post(api.getSocialStatistic,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询社群所有订单信息详情 socialWriteOff
export const queryAssociationAllOrderInfoDetail = (params = {}) => {
  return http.post(api.queryAssociationAllOrderInfoDetail,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//核销 
export const socialWriteOff = (params = {}) => {
  return http.post(api.socialWriteOff,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}




