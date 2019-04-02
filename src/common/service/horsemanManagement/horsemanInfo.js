import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//分页查询骑手信息
export const queryHorsemanInfo = (params = {}) => {
  return http.post(api.queryHorsemanInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//新增骑手信息
export const addHorsemanInfo = (params = {}) => {
  return http.post(api.addHorsemanInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//删除骑手信息
export const deleteHorsemanInfo = (params = {}) => {
  return http.post(api.deleteHorsemanInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改骑手信息
export const updateHorsemanInfo = (params = {}) => {
  return http.post(api.updateHorsemanInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//根据主键查询骑手信息
export const queryHorsemanInfoById = (params = {}) => {
  return http.post(api.queryHorsemanInfoById,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//批量删除骑手信息
export const deleteBatchHorsemanInfo = (params = {}) => {
  return http.post(api.deleteBatchHorsemanInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//修改骑手状态信息
export const updateStatus = (params = {}) => {
  return http.post(api.updateStatus,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//新增骑手信息
export const addhorsemanOrLeader = (params = {}) => {
  return http.post(api.addhorsemanOrLeader,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//修改骑手信息
export const updatehorsemanOrLeader = (params = {}) => {
  return http.post(api.updatehorsemanOrLeader,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
//删除骑手信息  
export const deleteHorseman = (params = {}) => {
  return http.post(api.deleteHorseman,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
