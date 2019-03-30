import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//分页查询骑手订单信息
export const queryHorsemanorderInfo = (params = {}) => {
  return http.post(api.queryHorsemanorderInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//指派配送任务
export const assignDeliveryTask = (params = {}) => {
  return http.post(api.assignDeliveryTask,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//对应门店骑手信息
export const findWorkingByStoreNo = (params = {}) => {
  return http.post(api.findWorkingByStoreNo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//呼叫美团骑手
export const transferMeituan = (params = {}) => {
  return http.get(api.transferMeituan, {params});
};
//呼叫美团骑手
// export const transferMeituan = (params = {}) => {
//   return http.get(api.transferMeituan,qs.stringify(params),{
//     headers:{
//       'Content-Type':'application/x-www-form-urlencoded'
//     }
//   });
// };
//配送任务转单
export const transferDeliveryTask = (params = {}) => {
  return http.post(api.transferDeliveryTask,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//查询订单流向
export const queryHorsemanOrderLog = (params = {}) => {
  return http.post(api.queryHorsemanOrderLog,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//查询所有订单详细信息
export const queryAllOrderDetialInfo = (params = {}) => {
  return http.post(api.queryAllOrderDetialInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//查询订单骑手流转状态信息
export const queryOrderDistribute = (params = {}) => {
  return http.post(api.queryOrderDistribute,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};

//导入excel
export const uploadExcel = (params = {}) => {
  return http.post(api.uploadExcel,params,{
    headers:{
      'Content-Type': 'multipart/form-data'
    }
  });
};
export const getUploadExcel = (file) => {
  let fd = new FormData();
  let promise = new Promise(function(resolve, reject){
    var _token = localStorage.getItem('code') ? localStorage.getItem('code') : '';
    fd.append('accessToken',_token);
    fd.append('template',file);
    uploadExcel(fd).then(res => {
      resolve(res);
    }).catch(res => {
      reject(res);
    });
  });
  return promise;
};
