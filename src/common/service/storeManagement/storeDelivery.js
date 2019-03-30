import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

export const deliveryGlobalSave = (params = {}) => {
  return http.post(api.deliveryGlobalSave,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const deliveryGlobal = (params = {}) => {
  return http.post(api.deliveryGlobal,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const deliveryStore = (params = {}) => {
  return http.post(api.deliveryStore,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const deliveryPlatformList = (params = {}) => {
  return http.post(api.deliveryPlatformList,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


export const deliveryStoreSave = (params = {}) => {
  return http.post(api.deliveryStoreSave,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const getStorePage = (params = {}) => {
  return http.post(api.getStorePage,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const batchSave = (params = {}) => {
  return http.post(api.batchSave,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const getAllPlatform = (params = {}) => {
  return http.get(api.getAllPlatform,qs.stringify(params));
}

export const queryStoreGrouping = (params = {}) => {
  return http.post(api.queryStoreGrouping,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
