import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询线上门店商品信息
export const queryOnlineStoreGoodsInfo = (params = {}) => {
  return http.post(api.queryOnlineStoreGoodsInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改线上门店商品信息
export const updateOnlineStoreGoodsInfo = (params = {}) => {
  return http.post(api.updateOnlineStoreGoodsInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//获取商品信息及规格
export const getStoreSpec = (params = {}) => {
  return http.post(api.getStoreSpec,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}













//批量上下架商品
export const batchupperOrLower = (params = {}) => {
  return http.post(api.batchupperOrLower,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//批量修改商品库存
export const batchUpdateStock = (params = {}) => {
  return http.post(api.batchUpdateStock,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//批量修改商品价格
export const batchUpdatePrice = (params = {}) => {
  return http.post(api.batchUpdatePrice,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改商品库存或价格
export const updateStockOrPrice = (params = {}) => {
  return http.post(api.updateStockOrPrice,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//单个上下架商品
export const upperOrLower = (params = {}) => {
  return http.post(api.upperOrLower,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改商品使用规格
export const updateUseSpec = (params = {}) => {
  return http.post(api.updateUseSpec,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询商品规格明细
export const queryOnlineSpecification = (params = {}) => {
  return http.post(api.queryOnlineSpecification,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
