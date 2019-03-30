import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询仓信息
export const queryWarehouseInfo = (params = {}) => {
  return http.post(api.queryWarehouseInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//同步仓库信息
export const syncWarehouse = (params = {}) => {
  return http.post(api.syncWarehouse,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//导入excel
export const uploadWarehouseInfoExcel = (params = {}) => {
  return http.post(api.uploadWarehouseInfoExcel,params,{
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
    uploadWarehouseInfoExcel(fd).then(res => {
      resolve(res);
    }).catch(res => {
      reject(res);
    });
  })

  return promise;
};
//删除仓库信息
export const deleteWarehouseInfo = (params = {}) => {
  return http.post(api.deleteWarehouseInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//添加仓库信息
export const addWarehouseInfo = (params = {}) => {
  return http.post(api.addWarehouseInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改仓库信息
export const updateWarehouseInfo = (params = {}) => {
  return http.post(api.updateWarehouseInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询修改仓库信息
export const queryEditInfo = (params = {}) => {
  return http.post(api.queryEditInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//监测门店
export const checkWareHouse = (params = {}) => {
  return http.post(api.checkWareHouse,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//监测门店
export const checkGroup = (params = {}) => {
  return http.post(api.checkGroup,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}













