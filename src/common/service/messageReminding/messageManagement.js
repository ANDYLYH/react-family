import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//分页查询消息
export const queryPushmessageInfo = (params = {}) => {
  return http.post(api.queryPushmessageInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//新增消息
export const addPushmessageInfo = (params = {}) => {
  return http.post(api.addPushmessageInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//删除消息
export const deletePushmessageInfo = (params = {}) => {
  return http.post(api.deletePushmessageInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改消息
export const updatePushmessageInfo = (params = {}) => {
  return http.post(api.updatePushmessageInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//通过主键id查询消息
export const queryPushmessageInfoById = (params = {}) => {
  return http.post(api.queryPushmessageInfoById,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询所有的消息类型
export const findAllMessageType = (params = {}) => {
  return http.post(api.findAllMessageType,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询所有的推送渠道
export const findAllPushChannel = (params = {}) => {
  return http.post(api.findAllPushChannel,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//批量删除信息
export const deleteBatchPushmessageInfo = (params = {}) => {
  return http.post(api.deleteBatchPushmessageInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}