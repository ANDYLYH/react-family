import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//分销员业绩
export const salesmanorderSearch = (params = {}) => {
  return http.post(api.salesmanorderSearch,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//分销员业绩导出
export const salesmanorderExport = (params = {}) => {
  return http.post(api.salesmanorderExport,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

// 分销员
export const salesmanSearch = (params = {}) => {
  return http.post(api.salesmanSearch,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

// 分销员数据导出
export const salesmanExport = (params = {}) => {
  return http.post(api.salesmanExport,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


