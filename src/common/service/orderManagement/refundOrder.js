import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询退款订单信息
export const queryRefundOrderInfo = (params = {}) => {
  return http.post(api.queryRefundOrderInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询退款订单详细信息
export const queryRefundOrderDetialInfo = (params = {}) => {
  return http.post(api.queryRefundOrderDetialInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//退款订单（v3.0）
export const getRefundOrderList = (params = {}) => {
  return http.post(api.getRefundOrderList,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//获取退款详情（v3.0）
export const getRefundDetail = (params = {}) => {
  return http.post(api.getRefundDetail,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//同意退款 
export const acceptRefund = (params = {}) => {
  return http.post(api.acceptRefund,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//拒绝退款
export const rejectRefund = (params = {}) => {
  return http.post(api.rejectRefund,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}