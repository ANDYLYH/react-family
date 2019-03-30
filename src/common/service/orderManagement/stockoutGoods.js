import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询缺货少货信息
export const queryStockoutGoodsInfo = (params = {}) => {
  return http.post(api.queryStockoutGoodsInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改缺货少货信息
export const updateStockoutGoodsInfo = (params = {}) => {
  return http.post(api.updateStockoutGoodsInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询缺货少货详细信息
export const queryStockoutGoodsDetialInfo = (params = {}) => {
  return http.post(api.queryStockoutGoodsDetialInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

