import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询系统用户信息
export const querySystemUserInfo = (params = {}) => {
	return http.post(api.querySystemUserInfo,qs.stringify(params),{
		headers:{
			'Content-Type':'application/x-www-form-urlencoded'
		}
	});
}
//添加系统用户信息
export const addSystemUserInfo = (params = {}) => {
  return http.post(api.addSystemUserInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改系统用户信息
export const updateSystemUserInfo = (params = {}) => {
  return http.post(api.updateSystemUserInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//删除系统用户信息
export const deleteSystemUserInfo = (params = {}) => {
  return http.post(api.deleteSystemUserInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//重置系统用户密码
export const resetPassword = (params = {}) => {
  return http.post(api.resetPassword,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询所有角色
export const findAllRole = (params = {}) => {
  return http.post(api.findAllRole,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//根据门店名称模糊匹配门店信息
export const findStoreInfoByStoreName = (params = {}) => {
  return http.post(api.findStoreInfoByStoreName,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//启用/停用系统用户
export const editIsStop = (params = {}) => {
  return http.post(api.editIsStop,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
