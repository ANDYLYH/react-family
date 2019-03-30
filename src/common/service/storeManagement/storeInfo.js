import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询门店信息
export const queryStoreInfo = (params = {}) => {
  return http.post(api.queryStoreInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改门店信息
export const updateStoreInfo = (params = {}) => {
  return http.post(api.updateStoreInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//开通渠道
export const openChannel = (params = {}) => {
  return http.post(api.openChannel,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//根据门店名称模糊有赞线上网点
export const searchonlinestore = (params = {}) => {
  return http.post(api.searchonlinestore,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//查询打印机列表
export const queryPrinter = (params = {}) => {
  return http.post(api.queryPrinter,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//添加打印机
export const addPrint = (params = {}) => {
  return http.post(api.addPrint,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//删除打印机
export const deletePrint = (params = {}) => {
  return http.post(api.deletePrint,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改打印机
export const updatePrint = (params = {}) => {
  return http.post(api.updatePrint,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//测试打印机
export const testPrint = (params = {}) => {
  return http.post(api.testPrint,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//同步门店
export const syncStore = (params = {}) => {
  return http.post(api.syncStore,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//查询所有的门店分组
export const queryStoreGrouping = (params = {}) => {
  return http.post(api.queryStoreGrouping,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//查询所有的门店分组
export const settingStoreInfoSaferate = (params = {}) => {
  return http.post(api.settingStoreInfoSaferate,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
