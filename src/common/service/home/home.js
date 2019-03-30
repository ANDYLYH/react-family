import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询销售信息
export const getStatistic = (params = {}) => {
  return http.post(api.getStatistic,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询各维度统计数据
export const findStatistic = (params = {}) => {
  return http.post(api.findStatistic,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const statisticsHour = (params = {}) => {
  return http.post(api.statisticsHour,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
export const statisticsChannel = (params = {}) => {
  return http.post(api.statisticsChannel,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const statisticsMonth = (params = {}) => {
  return http.post(api.statisticsMonth,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


export const statistics7day = (params = {}) => {
  return http.post(api.statistics7day,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export const statisticsStore = (params = {}) => {
  return http.post(api.statisticsStore,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}


