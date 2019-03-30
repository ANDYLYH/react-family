import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询BI财务报表
export const queryFinancialReportBi = (params = {}) => {
  return http.post(api.queryFinancialReportBi,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//财务报表统计(BI)详情分页列表
export const queryFinancialReportBiDetialInfo = (params = {}) => {
  return http.post(api.queryFinancialReportBiDetialInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
