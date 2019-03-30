import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询门店商品预售信息
export const queryGoodsPresellInfo = (params = {}) => {
  return http.post(api.queryGoodsPresellInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//添加门店商品预售信息
export const addGoodsPresellInfo = (params = {}) => {
  return http.post(api.addGoodsPresellInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改门店商品预售信息
export const updateGoodsPresellInfo = (params = {}) => {
  return http.post(api.updateGoodsPresellInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//删除门店商品预售信息
export const delGoodsPresellInfo = (params = {}) => {
  return http.post(api.delGoodsPresellInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

