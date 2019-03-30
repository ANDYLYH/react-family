import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询所有订单信息
export const queryAllOrderInfo = (params = {}) => {
  return http.post(api.queryAllOrderInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询所有订单信息（v3.0）
export const getOrderList = (params = {}) => {
  return http.post(api.getOrderList,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询所有订单详细信息
export const queryAllOrderDetialInfo = (params = {}) => {
  return http.post(api.queryAllOrderDetialInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询订单骑手流转状态信息
export const queryOrderDistribute = (params = {}) => {
  return http.post(api.queryOrderDistribute,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询销售信息
export const getStatistic = (params = {}) => {
  return http.post(api.getStatistic,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//确认修改收货地址
export const changeAddress = (params = {}) => {
  return http.post(api.changeAddress,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//地址解析
export const checkAddress = (params = {}) => {
  return http.post(api.checkAddress,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//获取订单详情
export const getOrderDetail = (params = {}) => {
  return http.post(api.getOrderDetail,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//指派转单 
export const createOrderBySelf = (params = {}) => {
  return http.post(api.createOrderBySelf,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改配送方式 
export const customPickedOrDeli = (params = {}) => {
  return http.post(api.customPickedOrDeli,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//取消配送 
export const deliveryCancel = (params = {}) => {
  return http.post(api.deliveryCancel,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//分拣完成 
export const completePicking = (params = {}) => {
  return http.post(api.completePicking,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//到点自提 
export const selftake = (params = {}) => {
  return http.post(api.selftake,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//打印小票 
export const printOrder = (params = {}) => {
  return http.post(api.printOrder,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//添加备注  
export const addSellerRemark = (params = {}) => {
  return http.post(api.addSellerRemark,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//批量发货   
export const batchSendGoods = (params = {}) => {
  return http.post(api.batchSendGoods,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//批量分拣完成  
export const batchCompletePicking = (params = {}) => {
  return http.post(api.batchCompletePicking,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//批量到店自提 
export const batchSelftake = (params = {}) => {
  return http.post(api.batchSelftake,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//批量确认提货
export const batchSelfPickUp = (params = {}) => {
  return http.post(api.batchSelfPickUp,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//判断是否可以主动退款
export const checkRefund = (params = {}) => {
  return http.post(api.checkRefund,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//执行主动退款
export const handelrefund = (params = {}) => {
  return http.post(api.handelrefund,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
