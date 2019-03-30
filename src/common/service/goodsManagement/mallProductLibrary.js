import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询商城商品库信息的表格数据
export const queryMallProductLibraryInfo = (params = {}) => {
  return http.post(api.queryMallProductLibraryInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//商品更新可售状态
export const editIsSell = (params = {}) => {
  return http.post(api.editIsSell,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//商品生成推广码
export const querycodeGetQR = (params = {}) => {
  return http.post(api.querycodeGetQR,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//商品生成推广码
export const deleteMallProductLibraryInfo = (params = {}) => {
  return http.post(api.deleteMallProductLibraryInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//商品批量更新可售状态
export const sureBatchSell = (params = {}) => {
  return http.post(api.sureBatchSell,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//商品批量删除商品
export const batchDeleteMallProductLibraryInfo = (params = {}) => {
  return http.post(api.batchDeleteMallProductLibraryInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//商品批量修改商品分类
export const sureBatchChangeClassify = (params = {}) => {
  return http.post(api.sureBatchChangeClassify,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//商品修改分类
export const sureChangeClassify = (params = {}) => {
  return http.post(api.sureChangeClassify,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//导入excel
export const uploadMallProductLibraryInfoExcel = (params = {}) => {
  return http.post(api.uploadMallProductLibraryInfoExcel,params,{
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
    uploadMallProductLibraryInfoExcel(fd).then(res => {
      resolve(res);
    }).catch(res => {
      reject(res);
    });
  })

  return promise;
};

//查询导入商品
export const queryProductInfo = (params = {}) => {
  return http.post(api.queryProductInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//删除导入商品
export const deleteProduct = (params = {}) => {
  return http.post(api.deleteProduct,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


//批量保存导入商品
export const saveBatchAddProduct = (params = {}) => {
  return http.post(api.saveBatchAddProduct,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//创建商品选择列表
export const querySelectProductInfo = (params = {}) => {
  return http.post(api.querySelectProductInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//清空导入商品
export const clearProduct = (params = {}) => {
  return http.post(api.clearProduct,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//创建商品
export const addSingleMallProductLibrary = (params = {}) => {
  return http.post(api.addSingleMallProductLibrary,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//编辑操作查询商品信息
export const queryEditData = (params = {}) => {
  return http.post(api.queryEditData,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//批量删除导入商品
export const batchDeleteProduct = (params = {}) => {
  return http.post(api.batchDeleteProduct,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
