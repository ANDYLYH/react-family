import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询门店商品入库信息
export const queryStoreGoodsStorageInfo = (params = {}) => {
  return http.post(api.queryStoreGoodsStorageInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询门店商品入库详细信息
export const queryStoreGoodsStorageDetialInfo = (params = {}) => {
  return http.post(api.queryStoreGoodsStorageDetialInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//查询门店分组信息
export const queryStoreGrouping = (params = {}) => {
  return http.post(api.queryStoreGrouping,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//批量使用平均量做库存
export const updateStockWithAverage = (params = {}) => {
  return http.post(api.updateStockWithAverage,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//批量使用平均量做库存
export const pullPricesAndReGenerate = (params = {}) => {
  return http.post(api.pullPricesAndReGenerate,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//导入excel
export const importStockRecord = (params = {}) => {
  return http.post(api.importStockRecord,params,{
    headers:{
      'Content-Type': 'multipart/form-data'
    }
  });
}
export const getUploadExcel = (file) => {
  let fd = new FormData();
  let promise = new Promise(function(resolve, reject){
    var _token = localStorage.getItem('code') ? localStorage.getItem('code') : '';
    fd.append('accessToken',_token);
    fd.append('file',file);
    importStockRecord(fd).then(res => {
      resolve(res);
    }).catch(res => {
      reject(res);
    });
  })

  return promise;
};