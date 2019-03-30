import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询数据字典信息
export const queryDataDictionaryInfo = (params = {}) => {
  return http.post(api.queryDataDictionaryInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//添加数据字典信息
export const addDataDictionaryInfo = (params = {}) => {
  return http.post(api.addDataDictionaryInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改数据字典信息
export const updateDataDictionaryInfo = (params = {}) => {
  return http.post(api.updateDataDictionaryInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//删除数据字典信息
export const deleteDataDictionaryInfo = (params = {}) => {
  return http.post(api.deleteDataDictionaryInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

