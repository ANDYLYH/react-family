import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询骑手送达上报信息
export const queryDeliveryReportedInfo = (params = {}) => {
  return http.post(api.queryDeliveryReportedInfo,qs.stringify(params),{
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

