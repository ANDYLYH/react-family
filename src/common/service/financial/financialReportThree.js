import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询第三方财务报表
export const queryFinancialReportThree = (params = {}) => {
  return http.post(api.queryFinancialReportThree,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//财务报表统计(第三方)详情分页列表
export const queryFinancialReportThreeDetialInfo = (params = {}) => {
  return http.post(api.queryFinancialReportThreeDetialInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
