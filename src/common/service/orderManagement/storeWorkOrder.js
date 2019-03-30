import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询门店工单信息
export const queryStoreWorkOrderInfo = (params = {}) => {
  return http.post(api.queryStoreWorkOrderInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//备注工单
export const handelStoreWorkOrderRemark = (params = {}) => {
  return http.post(api.handelStoreWorkOrderRemark,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//处理工单
export const handelSureStatus = (params = {}) => {
  return http.post(api.handelSureStatus,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


//添加客服备注
export const handelRemark = (params = {}) => {
  return http.post(api.handelRemark,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
