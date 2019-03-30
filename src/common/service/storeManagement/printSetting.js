import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//获取打印机列表信息
export const queryPrinter = (params = {}) => {
  return http.post(api.queryPrinter,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//添加打印机信息
export const savePrintSetting = (params = {}) => {
  return http.post(api.savePrintSetting,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//删除打印机信息
export const deletePrintSetting = (params = {}) => {
  return http.post(api.deletePrintSetting,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//断开打印机
export const breakPrintSetting = (params = {}) => {
  return http.post(api.breakPrintSetting,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询小票设置信息
export const getTicketSettingInfo = (params = {}) => {
  return http.post(api.getTicketSettingInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//保存单个小票设置信息
export const saveTicketSetting = (params = {}) => {
  return http.post(api.saveTicketSetting,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//保存批量小票设置信息
export const saveBatchTicketSetting = (params = {}) => {
  return http.post(api.saveBatchTicketSetting,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}



