import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//活动列表
export const discountList = (params = {}) => {
  return http.post(api.discountList,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}



//删除活动
export const discountDelete = (params = {}) => {
  return http.post(api.discountDelete,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//活动数据统计
export const discountStatistics = (params = {}) => {
  return http.post(api.discountStatistics,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


//活动订单
export const discountOrder = (params = {}) => {
  return http.post(api.discountOrder,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


//状态设置
export const discountStatus = (params = {}) => {
  return http.post(api.discountStatus,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//活动店铺
export const discountStore = (params = {}) => {
  return http.post(api.discountStore,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


//关联活动列表
export const discountActList = (params = {}) => {
  return http.post(api.discountActList,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//关联商品列表
export const discountProduct = (params = {}) => {
  return http.post(api.discountProduct,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//活动信息查询
export const discountActInfo = (params = {}) => {
  return http.post(api.discountActInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//编辑保存活动信息
export const discountEditInfo = (params = {}) => {
  return http.post(api.discountEditInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//编辑保存关联门店
export const discountEditStore = (params = {}) => {
  return http.post(api.discountEditStore,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//编辑保存关联活动
export const discountEditActivity = (params = {}) => {
  return http.post(api.discountEditActivity,params,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}


//编辑保存关联商品
export const discountEditProduct = (params = {}) => {
  return http.post(api.discountEditProduct,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//新增活动
export const discountEditAdd = (params = {}) => {
  return http.post(api.discountEditAdd,params,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

//活动商品选择
export const seletProduct = (params = {}) => {
  return http.post(api.seletProduct,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//活动商品选择
export const queryNetStoreInfo = (params = {}) => {
  return http.post(api.queryNetStoreInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
