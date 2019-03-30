import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';


export const presaleAdd = (params = {}) => {
  return http.post(api.presaleAdd,params,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export const presaleOrder = (params = {}) => {
  return http.post(api.presaleOrder,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const presaleList = (params = {}) => {
  return http.post(api.presaleList,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const presaleDel = (params = {}) => {
  return http.post(api.presaleDel,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const presaleDetail = (params = {}) => {
  return http.post(api.presaleDetail,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}



export const presaleProduct = (params = {}) => {
  return http.post(api.presaleProduct,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


export const presaleStore = (params = {}) => {
  return http.post(api.presaleStore,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


export const queryStockPrice = (params = {}) => {
  return http.post(api.queryStockPrice,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}



export const queryStoreProduct = (params = {}) => {
  return http.post(api.queryStoreProduct,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const editActivity = (params = {}) => {
  return http.post(api.editActivity,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const editProduct = (params = {}) => {
  return http.post(api.editProduct,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const editStore = (params = {}) => {
  return http.post(api.editStore,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
export const editStockPrice = (params = {}) => {
  return http.post(api.editStockPrice,params,{
    headers:{
     'Content-Type': 'multipart/form-data'
    }
  });
}

export const preGetProduct = (params = {}) => {
  return http.post(api.preGetProduct,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const preGetStore = (params = {}) => {
  return http.post(api.preGetStore,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


export const productType = (params = {}) => {
  return http.post(api.productType,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const storeType = (params = {}) => {
  return http.post(api.storeType,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const presaleProductList = (params = {}) => {
  return http.post(api.presaleProductList,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
export const orderStatistics = (params = {}) => {
  return http.post(api.orderStatistics,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const setStatus = (params = {}) => {
  return http.post(api.setStatus,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
