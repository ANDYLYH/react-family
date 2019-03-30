import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询社群退款订单信息
export const queryAssociationRefundOrderInfo = (params = {}) => {
  return http.post(api.queryAssociationRefundOrderInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询社群退款订单详细信息
export const queryAssociationRefundOrderDetialInfo = (params = {}) => {
  return http.post(api.queryAssociationRefundOrderDetialInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//社群退款订单-同意退款 
export const socialAcceptRefund = (params = {}) => {
  return http.post(api.socialAcceptRefund,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//社群退款订单-拒绝退款  
export const socialRejectRefund = (params = {}) => {
  return http.post(api.socialRejectRefund,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}



