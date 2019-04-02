/*登录开始*/
  export const login = '/api/v1/systemaccount/login';     //登录
  export const logout = "/api/v1/systemuser/logout";//退出登录
  export const updatePassword = '/api/v1/systemuser/updatePassword';     //修改密码
/*登录结束*/


/*骑手管理 begin*/
//骑手信息
export const queryHorsemanInfo = '/api/v1/horseman/findList'; //分页查询骑手信息
export const addHorsemanInfo = '/api/v1/horseman/add'; //新增骑手信息
export const deleteHorsemanInfo = '/api/v1/horseman/delete'; //删除骑手信息
export const updateHorsemanInfo = '/api/v1/horseman/update'; //修改骑手信息
export const queryHorsemanInfoById = '/api/v1/horseman/fandById'; //根据主键查询骑手信息
export const deleteBatchHorsemanInfo = '/api/v1/horseman/deleteBatch'; //批量删除骑手信息
export const updateStatus = '/api/v1/horseman/updateStatus'; //修改骑手状态信息
export const updatehorsemanOrLeader = "/api/v1/horseman/updateHorsemanOrLeader"//修改骑手信息
export const addhorsemanOrLeader = "/api/v1/horseman/addHorsemanOrLeader" //添加骑手信息

