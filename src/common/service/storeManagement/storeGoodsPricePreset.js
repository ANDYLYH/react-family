import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询所有门店
export const findALLStoreInfo = (params = {}) => {
  return http.post(api.findALLStoreInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询爆款商品预设价格信息
export const queryPresetPriceInfo = (params = {}) => {
  return http.post(api.queryPresetPriceInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//删除爆款商品预设价格信息
export const delPresetPriceInfo = (params = {}) => {
  return http.post(api.delPresetPriceInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//模糊查询商品名称
export const queryGoodsInfo = (params = {}) => {
  return http.post(api.queryGoodsInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//根据门店编号查询规格
export const getInfoAndSpec = (params = {}) => {
  return http.post(api.getInfoAndSpec,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询所有门店
export const queryOutStoreInfo = (params = {}) => {
  return http.post(api.queryOutStoreInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//添加爆款商品预设价格信息
export const addPresetPriceInfo = (params = {}) => {
  return http.post(api.addPresetPriceInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改爆款商品预设价格信息
export const updatePresetPriceInfo = (params = {}) => {
  return http.post(api.updatePresetPriceInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//获取明细的规格
export const querySpecification = (params = {}) => {
  return http.post(api.querySpecification,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//获取明细的门店
export const queryDetialStore = (params = {}) => {
  return http.post(api.queryDetialStore,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//判断是否是所有门店
export const isAllStore = (params = {}) => {
  return http.post(api.isAllStore,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//判断是否是所有分组
export const queryStoreGrouping = (params = {}) => {
  return http.post(api.queryStoreGrouping,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//根据多个分组查询线上门店
export const queryStoreInfoByGroup = (params = {}) => {
  return http.post(api.queryStoreInfoByGroup,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//查询所有门店不分页
export const queryAllStore = (params = {}) => {
  return http.post(api.queryAllStore,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}















