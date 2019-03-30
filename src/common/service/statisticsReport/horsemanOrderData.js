import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';
//骑手派单数据统计
//分页查询 
export const horsemanorderreport = (params = {}) => {
  return http.post(api.horsemanorderreport,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//订单详情 （旧）
export const findOverTimeDetail = (params = {}) => {
  return http.post(api.findOverTimeDetail,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//订单详情 （v3.1）
export const overTimeDetail = (params = {}) => {
  return http.post(api.overTimeDetail,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查看明细
export const dispatchDetail = (params = {}) => {
  return http.post(api.dispatchDetail,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
