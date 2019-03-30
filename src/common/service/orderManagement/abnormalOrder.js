import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查看异常单历史记录
export const getAbnormalOrder = (params = {}) => {
  return http.post(api.getAbnormalOrder,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//添加备注 
export const addRemark = (params = {}) => {
  return http.post(api.addRemark,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//异常单查询
export const exceptionListOrder = (params = {}) => {
  return http.post(api.exceptionListOrder,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//异常单处理
export const  updateDealStatus = (params = {}) => {
  return http.post(api.updateDealStatus,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}