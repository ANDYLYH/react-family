import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询团长活动列表
export const queryCommanderActivityInfo = (params = {}) => {
  return http.post(api.queryCommanderActivityInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询团长活动列表
export const cutoffOrder = (params = {}) => {
  return http.post(api.cutoffOrder,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


//查询团长活动详情
export const queryCommanderActivityDetialInfo = (params = {}) => {
  return http.post(api.queryCommanderActivityDetialInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//获取二维码
export const qrcodeGetQR = (params = {}) => {
  return http.post(api.qrcodeGetQR,qs.stringify(params),{
  	headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}