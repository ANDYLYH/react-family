import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询社群门店信息
export const queryAssociationStore = (params = {}) => {
  return http.post(api.queryAssociationStore,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//启用/停用社群门店
export const editOpenorclose = (params = {}) => {
  return http.post(api.editOpenorclose,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//关联社群门店
export const bindman = (params = {}) => {
  return http.post(api.bindman,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询关联用户
export const queryCommanderInfo = (params = {}) => {
  return http.post(api.queryCommanderInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


//添加用户
export const addSocialstoreuser = (params = {}) => {
  return http.post(api.addSocialstoreuser,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


