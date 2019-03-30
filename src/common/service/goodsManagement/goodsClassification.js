import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//查询商品分类信息
export const queryGoodsClassificationInfo = (params = {}) => {
  return http.post(api.queryGoodsClassificationInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//查询编辑的商品分类信息
export const queryEditGoodsClassificationInfo = (params = {}) => {
  return http.post(api.queryEditGoodsClassificationInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//修改商品分类信息
export const updateGoodsClassificationInfo = (params = {}) => {
  return http.post(api.updateGoodsClassificationInfo,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//获取大分类
export const getBigCategory = (params = {}) => {
  return http.post(api.getBigCategory,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//获取分类
export const getlistCategory = (params = {}) => {
  return http.post(api.getlistCategory,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
//调整分类排序
export const changeSort = (params = {}) => {
  return http.post(api.changeSort,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

//调整分类是否展示
export const changeShowOnClient = (params = {}) => {
  return http.post(api.changeShowOnClient,qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
// export const changeSort = (params = {}) => {
//   return http.post(api.changeSort,JSON.stringify(params),{
//     headers:{
//       'Content-Type':'application/json'
//     }
//   });
// }

