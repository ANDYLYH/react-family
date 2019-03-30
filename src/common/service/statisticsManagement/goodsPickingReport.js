import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询商品配货表信息
export const queryGoodsPickingReport = (params = {}) => {
  return http.post(api.queryGoodsPickingReport,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//一键推送商品配货表
export const handelPushReport = (params = {}) => {
  return http.post(api.handelPushReport,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//手动生成商品配货表
export const sureHandelhand = (params = {}) => {
  return http.post(api.sureHandelhand,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

