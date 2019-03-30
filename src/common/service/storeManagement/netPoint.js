import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

export const storeonlineSearch = (params = {}) => {
  return http.post(api.storeonlineSearch,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const storeonlineBatchOpenOrClose = (params = {}) => {
  return http.post(api.storeonlineBatchOpenOrClose,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const storeonlineOpenOrClose = (params = {}) => {
  return http.post(api.storeonlineOpenOrClose,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const storeonlineSetHead = (params = {}) => {
  return http.post(api.storeonlineSetHead,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const storeonlineSetTemplate = (params = {}) => {
  return http.post(api.storeonlineSetTemplate,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const storeonlineDelete = (params = {}) => {
  return http.post(api.storeonlineDelete,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const storeonlineGet = (params = {}) => {
  return http.post(api.storeonlineGet,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


export const getMeituanArea = (params = {}) => {
  return http.post(api.getMeituanArea,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const storeonlineSave = (params = {}) => {
  return http.post(api.storeonlineSave,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


export const storeonlineMallstoreSearch = (params = {}) => {
  return http.post(api.storeonlineMallstoreSearch,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const getQrcode = (params = {}) => {
  return http.get(api.getQrcode,{params},{
    headers:{ 
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const getPhone = (params = {}) => {
  return http.post(api.getPhone,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}




//	 storeonlineSearch    //获取线上门店列表
//	 storeonlineBatchOpenOrClose    //批量修改营业状态
//	 storeonlineOpenOrClose      //单个修改营业状态
//	 storeonlineSetHead =     //设置总店
//	 storeonlineSetTemplate     //设置网点模板
//	 storeonlineDelete      //删除网点
//	 storeonlineGet    //获取网点详情
//	 getMeituanArea//获取美团电子围栏
