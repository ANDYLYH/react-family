import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询商品信息
export const queryAssociationGoods = (params = {}) => {
  return http.post(api.queryAssociationGoods,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//迷糊查询商品信息
export const findGoodsInfoByGoodsName = (params = {}) => {
  return http.post(api.findGoodsInfoByGoodsName,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//添加社群商品信息
export const addAssociationGoods = (params = {}) => {
  return http.post(api.addAssociationGoods,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//编辑社群商品信息
export const updateAssociationGoods = (params = {}) => {
  return http.post(api.updateAssociationGoods,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//删除社群商品信息
export const deleteAssociationGoods = (params = {}) => {
  return http.post(api.deleteAssociationGoods,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//批量下架操作
export const batchSoldout = (params = {}) => {
  return http.post(api.batchSoldout,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}