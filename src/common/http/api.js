/*登录开始*/
  export const login = '/api/v1/systemaccount/login';     //登录
  export const logout = "/api/v1/systemuser/logout";//退出登录
  export const updatePassword = '/api/v1/systemuser/updatePassword';     //修改密码
/*登录结束*/

/*首页开始*/
export const getStatistic = '/api/v1/order/statistic';     //获取销售统计
export const findStatistic = '/api/v1/home/statistics';     //查询各维度统计数据
export const statisticsHour = '/api/v1/order/statistics/hour';     //实时概况数据
export const statisticsChannel = '/api/v1/order/statistics/channel';     //实时概况，按渠道数据统计查询接口
export const statisticsMonth = '/api/v1/order/statistics/month';     //本月/上月统计数据查询接口
export const statistics7day = '/api/v1/order/statistics/7day';     //销售统计7天折线统计数据查询接口
export const statisticsStore = '/api/v1/order/statistics/store';     //门店销售统计
export const statisticsExport = '/api/v1/order/statistics/export';     //门店销售数据导出



/*首页结束*/

/*系统管理开始*/
  //系统用户
  export const querySystemUserInfo = '/api/v1/systemuser/findList';     //查询系统用户信息
  export const addSystemUserInfo = '/api/v1/systemuser/add';     //添加系统用户信息
  export const updateSystemUserInfo = '/api/v1/systemuser/update';     //修改系统用户信息
  export const deleteSystemUserInfo = '/api/v1/systemuser/delete';     //删除系统用户信息
  export const resetPassword = '/api/v1/systemuser/resetPassword';     //重置系统用户密码
  export const findAllRole = '/api/v1/systemrole/findByType';     //查询所有角色
  export const findStoreInfoByStoreName = '/api/v1/systemuser/findStoreByStoreName';     //根据门店名称模糊匹配门店信息
  export const editIsStop = '/api/v1/systemuser/editIsStop';     //启用/停用系统用户

  //角色信息
  export const queryUserRoleInfo = '/api/v1/systemrole/findList';     //查询角色信息
  export const addUserRoleInfo = '/api/v1/systemrole/add';     //添加角色信息
  export const updateUserRoleInfo = '/api/v1/systemrole/update';     //修改角色信息
  export const deleteUserRoleInfo = '/api/v1/systemrole/deleted';     //删除角色信息
  export const findSystemMenu = '/api/v1/systemmenu/findSystemMenu';     //查询所有系统菜单
  export const findById = '/api/v1/systemrole/findById';     //根据id查询角色权限


  //数据字典信息
  export const queryDataDictionaryInfo = '/api/v1/systemuser/findList';     //查询数据字典信息
  export const addDataDictionaryInfo = '/api/v1/systemuser/findList';     //添加数据字典信息
  export const updateDataDictionaryInfo = '/api/v1/systemuser/findList';     //修改数据字典信息
  export const deleteDataDictionaryInfo = '/api/v1/systemuser/findList';     //删除数据字典信息

  //操作记录
  export const queryOperationRecordsInfo = '/api/v1/operationlog/searchlog';     //查询操作记录信息
  export const exportOperationRecordsInfo = '/api/v1/operationlog/export';     //导出操作记录信息报表
/*系统管理结束*/

/*商品管理开始*/
	//打印机设置
	export const queryPrinter = '/api/v1/store/printer/list';     //查询打印机列表信息
	export const savePrintSetting = '/api/v1/store/printer/add';     //查询打印机列表信息
	export const deletePrintSetting = '/api/v1/store/printer/del/ids';     //删除打印机列表信息
	export const breakPrintSetting = '/api/v1/store/printer/break/printer';     //断开打印机
	export const getTicketSettingInfo = '/api/v1/store/printer/list/ticket';     //查询小票设置信息
	export const saveTicketSetting = '/api/v1/store/printer/modify/ticket';     //保存小票设置信息
	export const saveBatchTicketSetting = '/api/v1/store/printer/add/ticket';     //保存小票设置信息
	
  //商品分类
  export const queryGoodsClassificationInfo = '/api/v1/admin/productCategory/list';     //查询商品分类信息
  export const queryEditGoodsClassificationInfo = '/api/v1/admin/productCategory/info';     //查询修改的商品分类信息
  export const updateGoodsClassificationInfo = '/api/v1/admin/productCategory/save';     //修改商品分类信息
  export const changeSort = '/api/v1/admin/productCategory/changeSort';     //调整分类排序
  export const changeShowOnClient = '/api/v1/admin/productCategory/changeShowOnClient';     //调整分类是否展示

  //商品信息
  export const queryGoodsInfo = '/api/v1/admin/product/list';     //查询商品信息
  export const exportGoodsInfoReport = '/api/v1/admin/product/export';     //导出商品信息报表
  export const getBigCategory = '/api/v1/admin/product/bigCategory';     //获取大分类
  export const getlistCategory = '/api/v1/admin/product/listCategory';     //获取分类
  export const queryNoPublishGoodsInfo = '/api/v1/admin/product/noPublish';     //查询未发布到有赞的商品
  export const settingRate = '/api/v1/admin/product/saveSafeRate';     //设置安全比例
  export const syncGoods = '/api/v1/admin/product/pullProduct';     //同步商品
  export const getInfoAndSpec = '/api/v1/admin/product/getInfoAndSpec';     //获取商品信息及规格
  export const saveSafeRateAndSpec = '/api/v1/admin/product/saveSafeRateAndSpec';     //保存商品安全比例及规格
  export const uploadGoodsInfoExcel = '/api/v1/admin/product/import';     //导入商品信息
  export const downloadGoodsInfoTemplate = '/api/v1/admin/product/downloadTemplate';     //导出商品信息模板
  export const settingSaferate = '/api/v1/admin/product/batch/modify/saferate';     //设置安全比率
  export const pushProductSku = '/api/v1/stockSyn/pushProductSku';     //推送到第三方
  
//仓库信息
  export const queryWarehouseInfo = '/api/v1/admin/warehouse/page';     //查询仓信息
  export const syncWarehouse = '/api/v1/admin/warehouse/page';     //同步仓信息
	export const exportWarehouseInfoReport = '/api/v1/admin/warehouse/export';     //导出仓库信息报表
	export const uploadWarehouseInfoExcel = '/api/v1/admin/warehouse/import';     //导入仓库信息
	export const deleteWarehouseInfo = '/api/v1/admin/warehouse/del';     //删除仓库信息
	export const addWarehouseInfo = '/api/v1/admin/warehouse/add';     //添加仓库信息
	export const updateWarehouseInfo = '/api/v1/admin/warehouse/modify';     //修改仓库信息
	export const queryEditInfo = '/api/v1/admin/warehouse/modify/query';     //查询修改仓库信息
	export const downloadWarehouseInfoTemplate = '/api/v1/admin/warehouse/template';     //导出仓库信息模板
	export const checkWareHouse = '/api/v1/admin/warehouse/check/social/by/store';     //检测门店
	export const checkGroup = '/api/v1/admin/warehouse/check/social/by/group';     //检测门店
	
	//渠道管理
  export const queryChannelInfo = '/api/v1/admin/productrate/findall';     //查询渠道管理
  export const uploadChannelInfoExcel = '/api/v1/admin/productrate/importproduct';     //导入渠道管理
  export const downloadChannelInfoTemplate = '/api/v1/admin/productrate/download/producttemplate';     //导出渠道管理模板
  export const queryGoodsRateInfo = '/api/v1/admin/productrate/searchspecialproduct';     //查询商品溢价列表数据
  export const saveGoodsRateInfo = '/api/v1/admin/productrate/update';     //保存商品溢价列表数据
  export const cleartmp = '/api/v1/admin/productrate/cleartmp';     //清空导入临时表数据

  //商品转换关系维护
  export const queryGoodsTransform = '/api/v1/admin/conversion/list';     //查询商品转换关系
  export const addGoodsTransform = '/api/v1/admin/conversion/add';     //添加商品转换关系
  export const updateGoodsTransform = '/api/v1/admin/conversion/modify';     //修改商品转换关系
  export const deleteGoodsTransform = '/api/v1/admin/conversion/del';     //删除商品转换关系
  export const downloadTemplate = '/api/v1/admin/conversion/download';     //导出商品转换关系模板
  export const exportGoodsTransform = '/api/v1/admin/conversion/export';     //导出商品转换关系
  export const uploadGoodsTransformExcel = '/api/v1/admin/conversion/upload';     //导入商品转换关系
  
  //商城商品分类
  export const queryMallProductClassifyInfo = '/api/v1/mall/productCategory/list';     //查询商城商品分类信息的表格数据
  export const showClassify = '/api/v1/mall/productCategory/updateShowOnClient';     //修改是否展示分类
  export const deleteMallProductClassifyInfo = '/api/v1/mall/productCategory/delete';     //删除商城商品分类信息的表格数据
  export const addMallProductClassifyInfo = '/api/v1/mall/productCategory/save';     //添加商品分类
  export const updateMallProductClassifyInfo = '/api/v1/mall/productCategory/save';     //修改商品分类
  
  //商城商品库
  export const queryMallProductLibraryInfo = '/api/v1/mall/product/list';     //查询商城商品库信息的表格数据
  export const editIsSell = '/api/v1/mall/product/updateStatus';     //商品更新可售状态
  export const querycodeGetQR = '/api/v1/mall/product/careatePublish';     //商品更新可售状态
  export const deleteMallProductLibraryInfo = '/api/v1/mall/product/delete';     //商品删除
  export const sureBatchSell = '/api/v1/mall/product/batchUpdateStatus';     //商品批量更新可售状态
  export const batchDeleteMallProductLibraryInfo = '/api/v1/mall/product/batchDelete';     //商品批量删除商品
  export const sureBatchChangeClassify = '/api/v1/mall/product/batchUpdateCategory';     //商品批量修改商品分类
  export const sureChangeClassify = '/api/v1/mall/product/updateCategory';     //商品修改分类
  export const downloadMallProductLibraryTemplate = '/api/v1/mall/product/temp/downloadFile';     //下载导入商品模板
  export const uploadMallProductLibraryInfoExcel = '/api/v1/mall/product/temp/loadFile';     //导入商品文件
  export const queryProductInfo = '/api/v1/mall/product/temp/list';     //查询导入商品
  export const deleteProduct = '/api/v1/mall/product/temp/delete';     //删除导入商品
  export const batchDeleteProduct = '/api/v1/mall/product/temp/batchDelete';     //批量删除导入商品
  export const saveBatchAddProduct = '/api/v1/mall/product/temp/batchSave';     //批量保存导入商品
  export const querySelectProductInfo = '/api/v1/mall/product/selectList';     //创建商品选择列表
  export const clearProduct = '/api/v1/mall/product/temp/clear';     //清空导入商品
  export const addSingleMallProductLibrary = '/api/v1/mall/product/save';     //创建商品
  export const queryEditData = '/api/v1/mall/product/get';     //编辑操作查询商品信息
  
  
/*商品管理结束*/

/*门店管理开始*/
  //门店信息
  export const queryStoreInfo = '/api/v1/mallstore/search';     //查询门店信息
  export const updateStoreInfo = '/api/v1/mallstore//modify';     //修改门店信息
  export const exportStoreInfoReport = '/api/v1/mallstore/export';     //导出门店信息报表
  export const searchonlinestore = '/api/v1/mallstore/searchonlinestore';     //根据门店名称模糊有赞线上网点
	export const syncStore = '/api/v1/mallstore/sync';     //同步门店
	export const settingStoreInfoSaferate = '/api/v1/mallstore/set/presale/rate';     //批量设置安全比率

//网点管理
	export const storeonlineSearch = '/api/v1/storeonline/search';     //获取线上门店列表
	export const storeonlineBatchOpenOrClose = '/api/v1/storeonline/batchOpenOrClose';     //批量修改营业状态
	export const storeonlineOpenOrClose = '/api/v1/storeonline/openOrClose';     //单个修改营业状态
	export const storeonlineSetHead = '/api/v1/storeonline/setHead';     //设置总店
	export const storeonlineSetTemplate = '/api/v1/storeonline/setTemplate';     //设置网点模板
	export const storeonlineDelete = '/api/v1/storeonline/delete';     //删除网点
	export const storeonlineGet = '/api/v1/storeonline/get';     //获取网点详情
	export const getMeituanArea = 'api/v1/meituan/area';     //获取美团电子围栏
	export const storeonlineSave = '/api/v1/storeonline/save';     //新建网点
	export const  storeonlineMallstoreSearch = '/api/v1/mallstore/search';     //查询门店	
	export const  getQrcode = '/api/v1/storeonline/qrcode';     //获取门店二维码
	export const  getPhone = '/api/v1/storeonline/shopowner/phone';     //获取门店店长电话




//门店配送
	export const deliveryGlobalSave = '/api/v2/delivery/config/global/save';     //保存自动配送全局配置信息
	export const deliveryGlobal = '/api/v2/delivery/config/global';     //自动配送全局配置查询
	export const deliveryStore = '/api/v2/delivery/config/store/platform/save';     //门店配送优先级保存
	export const deliveryPlatformList = '/api/v2/delivery/config/store/platform';     //门店配送优先级查询
	export const deliveryStoreSave = '/api/v2/delivery/config/store/save';     //店铺配送配置信息保存
	export const getStorePage = '/api/v2/delivery/config/store/list';     //门店配送配置信息分页查询
	export const batchSave = '/api/v2/delivery/config/store/batch/save';     //批量设置配送
	export const getAllPlatform = '/api/v2/delivery/config/store/platform/default';     //获取所有配送平台


  //门店员工
  export const queryStoreEmployeeInfo = '/api/v1/storeuser/search';     //查询门店员工信息
  export const addStoreEmployeeInfo = '/api/v1/storeuser/add';     //添加门店员工信息
  export const updateStoreEmployeeInfo = '/api/v1/storeuser/update';     //修改门店员工信息
  export const delStoreEmployeeInfo = '/api/v1/storeuser/delete';     //删除门店员工信息
  export const findRoleByType = '/api/v1/systemrole/findByType';     //查询所有门店角色
  export const cancelGroupLeader = '/api/v1/storeuser/cancelGroupLeader';     //取消团长
  export const addGroupLeader = "/api/v1/storeuser/addGroupLeader" //批量设置
	export const cancelWriteOffClerk = '/api/v1/storeuser/cancelWriteOffClerk';     //批量取消核销员 
  export const addWriteOffClerk = "/api/v1/storeuser/addWriteOffClerk" //批量开启核销员 

  //线上门店商品
//export const queryOnlineStoreGoodsInfo = '/api/v1/onlineproduct/search';     //查询线上门店商品信息
  export const updateOnlineStoreGoodsInfo = '/api/v1/onlineproduct/updateproductbusinees';     //修改线上门店商品信息
  export const exportOnlineStoreGoodsReport = '/api/v1/onlineproduct/export';     //导出线上门店商品报表
  export const getStoreSpec = '/api/v1/admin/spec/getSpec';     //获取规格信息
  
  export const queryOnlineStoreGoodsInfo = '/api/v2/onlineproduct/search';     //查询线上门店商品信息----v2版
  export const batchupperOrLower = '/api/v2/onlineproduct/batchUpperOrLower';     //批量上下架商品----v2版
  export const batchUpdateStock = '/api/v2/onlineproduct/batchUpdateStock';     //批量修改商品库存----v2版
  export const batchUpdatePrice = '/api/v2/onlineproduct/batchUpdatePrice';     //批量修改商品价格----v2版
  export const updateStockOrPrice = '/api/v2/onlineproduct/updateStockOrPrice';     //修改商品库存或价格----v2版
	export const upperOrLower = '/api/v2/onlineproduct/upperOrLower';     //单个上下架商品----v2版
	export const updateUseSpec = '/api/v2/onlineproduct/updateUseSpec';     //修改商品使用规格----v2版
	export const queryOnlineSpecification = '/api/v2/onlineproduct/sku/detail';     //查询商品规格明细


  //门店商品入库
  export const queryStoreGoodsStorageInfo = '/api/v1/intostock/search';     //查询门店商品入库信息
  export const exportStoreGoodsStorageReport = '/api/v1/intostock/export';     //导出门店商品入库报表
	export const updateStockWithAverage = '/api/v1/intostock/updateStockWithAverage';     //批量使用平均量做库存
	export const pullPricesAndReGenerate = '/api/v1/intostock/pullPricesAndReGenerate';     //同步商品价格并推送
	export const importStockRecord = '/api/v1/intostock/importStockRecord';     //导入入库记录并生成库存记录
	export const downloadStoreGoodsStorageInfoTemplate = '/api/v1/intostock/downloadTemplate';     //下载导入入库记录模板
	

  //线下门店实时销售
  export const queryStoreRealtimeSalesInfo = '/api/v1/offlineorder/dayofsummary';     //查询线下门店实时销售信息
  export const queryStoreRealtimeSalesDetialInfo = '/api/v1/offlineorder/listproductorder';     //查询线下门店实时销售详细信息
  export const exportStoreRealtimeSalesReport = '/api/v1/offlineorder/export';     //导出线下门店实时销售报表

  //门店实时剩余库存
  export const queryStoreRealtimeInventoryInfo = '/api/v1/dynamicstock/search';     //查询门店实时剩余库存信息
  export const updateStoreRealtimeInventoryInfo = '/api/v1/dynamicstock/backend/updatestock';     //修改门店实时剩余库存信息
  export const exportStoreRealtimeInventoryReport = '/api/v1/dynamicstock/export';     //导出门店实时剩余库存报表
  export const batchUpdate = '/api/v1/dynamicstock/backend/batchUpdate';     //批量更新库存

  //爆款商品预设价格
  export const findALLStoreInfo = '/api/v1/admin/hotsale/price/storename/like';     //查询所有门店
  export const queryPresetPriceInfo = '/api/v1/admin/hotsale/price/new/list';     //查询爆款商品预设价格信息
  export const delPresetPriceInfo = '/api/v1/admin/hotsale/price/new/del/id';     //删除爆款商品预设价格信息
  export const addPresetPriceInfo = '/api/v1/admin/hotsale/price/new/add';     //添加爆款商品预设价格信息
  export const updatePresetPriceInfo = '/api/v1/admin/hotsale/price/new/modify';     //修改爆款商品预设价格信息
  export const querySpecification = '/api/v1/admin/hotsale/price/new/get/detail/spec';     //获取明细的规格
  export const queryDetialStore = '/api/v1/admin/hotsale/price/new/get/detail/store';     //获取明细的门店
  export const isAllStore = '/api/v1/admin/hotsale/price/new/is/all/store';     //获取明细的门店
  export const queryOutStoreInfo = '/api/v1/admin/hotsale/price/new/list/out/store';     //查询外部门店列表
  export const queryStoreInfoByGroup = '/api/v1/mallstore/list/by/groups';     //根据多个分组查询线上门店
  export const queryAllStore = '/api/v1/admin/hotsale/price/new/list/out/stores';     //查询所有门店不分页
   

  //门店商品预售
  export const queryGoodsPresellInfo = '/api/v1/systemuser/findList';     //查询门店商品预售信息
  export const addGoodsPresellInfo = '/api/v1/systemuser/findList';     //添加门店商品预售信息
  export const updateGoodsPresellInfo = '/api/v1/systemuser/findList';     //修改门店商品预售信息
  export const delGoodsPresellInfo = '/api/v1/systemuser/findList';     //删除门店商品预售信息

  //门店商品销售平均数
  export const queryGoodsSellMeanInfo = '/api/v1/historysaleaverage/search';     //查询门店商品销售平均数信息
  export const queryGoodsSellMeanDetialInfo = '/api/v1/historysaleaverage/productsalestatistics';     //查看门店商品销售平均数详细信息
  export const exportStoreGoodsSellMeanReport = '/api/v1/historysaleaverage/export';     //查看门店商品销售平均数详细信息

  //门店商品销售汇总
  export const queryGoodsSaleSummaryInfo = '/api/v1/order/staticOnlineSaleSummary';     //查询门店商品销售汇总信息
  export const queryGoodsSaleSummaryDetialInfo = '/api/v1/order/getSaleRecord';     //查询门店商品销售汇总详细信息
  export const exportGoodsSaleSummaryInfoReport = '/api/v1/order/exportOnlineSaleSummary';     //导出门店商品销售汇总报表
/*门店管理结束*/

/*订单管理开始*/
  //所有订单
  export const queryAllOrderInfo = '/api/v1/order/get_all';     //查询所有订单信息
  export const getOrderList = "/api/v1/order/getOrderList"; //查询所有订单（v3.0）
  export const queryAllOrderDetialInfo = '/api/v1/order/get';     //查询所有订单详细信息
  export const queryOrderDistribute = '/api/v1/order/orderdistribute';     //查询订单骑手流转状态信息
  export const completePicking = "/api/v1/order/completePicking" //分拣完成 （v3.0）
  export const batchCompletePicking = "/api/v1/order/batchCompletePicking"//批量分拣完成
  export const selftake = "/api/v1/delivery/selftake" //到店自提
  export const batchSelftake = "/api/v1/delivery/batchSelftake"; //批量到店自提
  export const batchSelfPickUp = "/api/v1/delivery/batchSelfPickUp";//批量确认提货
  export const printOrder = "/api/v1/order/printOrder";//打印小票
  export const addSellerRemark = "/api/v1/order/addSellerRemark"//添加备注
  export const batchSendGoods = "/api/v1/order/batchSendGoods";//批量发货
  export const exportOrderList = "/api/v1/order/exportOrderList" //导出所有订单信息报表（v3.0）
  export const exportPresaleOrder = "/api/v1/order/exportPresaleOrder"//导出预售订单信息报表（v3.0）
  export const changeExpressType = "/api/v1/order/changeExpressType" //修改配送方式（v3.0）
  export const checkAddress = "/api/v1/order/checkAddress" //地址解析（v3.0）
  export const changeAddress = "/api/v1/order/changeAddress" //确认修改收货地址（v3.0）
  export const getOrderDetail = "/api/v1/order/getOrderDetail" // 获取订单详情（v3.0）
  export const checkRefund = "/api/v1/order/checkCanSellerRefund" // 判断是否可以主动退款
  export const handelrefund = "/api/v1/order/sellerRefund" // 判断是否可以主动退款
//export const exportAllOrderInfoReport = '/api/v1/order/export_sale_data';     //导出所有订单信息报表


  export const getAbnormalOrder = '/api/v1/peisongLong/exceptionList';     //异常历史记录
  export const exceptionListOrder = "/api/v1/peisongLong/exceptionList/order";//异常单
  export const updateDealStatus = "/api/v1/peisongLong/updateDealStatus";//异常单处理
  export const peisongLongExport= "/api/v1/peisongLong/export"; //异常订单导出
  export const createOrderBySelf = "/api/v1/delivery/createOrderBySelf" //指派转单
  export const customPickedOrDeli = "/api/v1/delivery/customPickedOrDeli" //修改配送方式
	export const deliveryCancel= "/api/v1/delivery/cancel" //取消配送
	export const addRemark = "/api/v1/peisongLong/addRemark" //异常单添加备注

  //退款订单
  export const queryRefundOrderInfo = '/api/v1/order/refundgetall';     //查询退款订单信息
  export const queryRefundOrderDetialInfo = '/api/v1/order/refundget';     //查询退款订单详细信息
	export const getRefundOrderList = "/api/v1/order/getRefundOrderList" //获取退款订单信息 （v3.0）
	export const getRefundDetail = "/api/v1/order/getRefundDetail" //获取退款详情（v3.0）
	export const acceptRefund = "/api/v1/order/acceptRefund" //同意退款（v3.0）
	export const rejectRefund = "/api/v1/order/rejectRefund" //拒绝退款
	export const exportRefundOrderList = "/api/v1/order/exportRefundOrderList" //导出退款列表 （3.0）
  //缺货少货
  export const queryStockoutGoodsInfo = '/api/v1/lackstockorder/search';     //查询缺货少货信息
  export const queryStockoutGoodsDetialInfo = '/api/v1/lackstockorder/detail';     //查询缺货少货详细信息
  export const updateStockoutGoodsInfo = '/api/v1/lackstockorder/handle';     //修改缺货少货信息
  export const lackstockorderExport= "/api/v1/lackstockorder/export";//缺货少货导出数据
  
  //社群所有订单
  export const queryAssociationAllOrderInfo = '/api/v1/social/list';     //查询社群所有订单
  export const queryAssociationAllOrderInfoDetail = '/api/v1/social/getOrder';     //查询社群所有订单详情
  export const exportAssociationOrderList = '/api/v1/social/exportList';     //导出社群所有订单详情
  export const socialWriteOff = "/api/v1/social/writeOff"; // 核销
  export const getSocialStatistic = '/api/v1/social/statistic';     //获取销售统计
  
  //社群退款订单
  export const queryAssociationRefundOrderInfo = '/api/v1/social/getRefundOrderList';     //查询社群退款订单信息
  export const queryAssociationRefundOrderDetialInfo = '/api/v1/social/getRefundDetail';     //查询社群退款订单信息详情
  export const socialAcceptRefund="/api/v1/social/acceptRefund";//社群退款单-同意退款
  export const socialRejectRefund="/api/v1/social/rejectRefund";//社群退款单-拒绝退款

  //骑手送达上报
  export const queryDeliveryReportedInfo = '/api/v1/delivery/sent/list';     //查询骑手送达上报信息
  export const exportDeliveryReportedInfo = "/api/v1/delivery/sent/export" //导出骑手送达上报信息
  export const handelRemark = "/api/v1/delivery/sent/remark" //添加客服备注
  
  //门店工单
  export const queryStoreWorkOrderInfo = '/api/v1/serv/workorder/list';     //查询门店工单信息
  export const exportStoreWorkOrder = "/api/v1/serv/workorder/export" //导出门店工单报表
	export const handelStoreWorkOrderRemark = "/api/v1/serv/workorder/remark" //备注工单
  export const handelSureStatus = "/api/v1/serv/workorder/process" //处理工单

/*订单管理结束*/

/*骑手管理 begin*/
//骑手信息
export const queryHorsemanInfo = '/api/v1/horseman/findList'; //分页查询骑手信息
export const addHorsemanInfo = '/api/v1/horseman/add'; //新增骑手信息
export const deleteHorsemanInfo = '/api/v1/horseman/delete'; //删除骑手信息
export const updateHorsemanInfo = '/api/v1/horseman/update'; //修改骑手信息
export const queryHorsemanInfoById = '/api/v1/horseman/fandById'; //根据主键查询骑手信息
export const deleteBatchHorsemanInfo = '/api/v1/horseman/deleteBatch'; //批量删除骑手信息
export const queryStoreNameInfo = '/api/v1/horseman/findLikeStoreName'; //根据门店名称模糊匹配门店信息
export const exportExcelInfo = '/api/v1/horseman/exportExcel'; //根据门店名称模糊匹配门店信息
export const updateStatus = '/api/v1/horseman/updateStatus'; //修改骑手状态信息
export const updatehorsemanOrLeader = "/api/v1/horseman/updateHorsemanOrLeader"//修改骑手信息
export const addhorsemanOrLeader = "/api/v1/horseman/addHorsemanOrLeader" //添加骑手信息
export const CourierCheck = "/api/v1/horseman/CourierCheck";//骑手考勤记录
export const CourierCheckExport = "/api/v1/horseman/CourierCheckExport";//骑手考勤记录导出

//骑手订单
export const queryHorsemanorderInfo = '/api/v1/horsemanandorder/findList'; //分页查询订单骑手信息
export const assignDeliveryTask = '/api/v1/horsemanorder/assignDeliveryTask'; //指派任务
export const exportExcelHorsemanorderInfo = '/api/v1/horsemanorder/exportExcel'; //导出订单信息
export const findWorkingByStoreNo = 'api/v1/horseman/findWorkingByStoreNo';//对应门店骑手信息
export const queryHorsemanOrderLog = '/api/v1/horsemanorderlog/findByOrderNo'; //查询订单轨迹信息
export const transferDeliveryTask = '/api/v1/horsemanorder/transferDeliveryTask'; //配送任务转单
export const transferMeituan = '/api/v1/meituan/OrderByShopParam'; //呼叫美团骑手
export const deleteHorseman = "/api/v1/horseman/deleteHorseman" //删除棋手信息
//自动派单

export const findByAutoSendConfig = '/api/v1/scheduledautoconfig/findByAutoSendConfig'; //查询自动派单的配置信息
export const countHorsemanDelivery = '/api/v1/horsemandeliverycount/countHorsemanDelivery'; //骑手派送统计
export const updateAutoSendConfig = '/api/v1/scheduledautoconfig/updateAutoSendConfig'; //修改间隔时间
export const getGlobalInfo= "/api/v2/delivery/config/global"//获取全局配置值
export const saveGlobalInfo= "/api/v2/delivery/config/global/save"//保存全局配置

//骑手通用配置
export const queryGeneralConfiguration = '/api/v2/delivery/config/global'; //自动配送全局配置查询
export const saveGeneralConfiguration = '/api/v2/delivery/config/global/save'; //保存自动配送全局配置

/*骑手管理end*/

//短信消息
export const addShortMessage = '/api/v1/managesms/add'; //添加短信
export const queryShortMessageInfo = '/api/v1/managesms/search'; //查询已发送短信
export const uploadShortMessageExcel = '/api/v1/managesms/getMobileArr'; //根据上传文件获取手机号信息
export const batchAddShortMessage = '/api/v1/managesms/batchAdd'; //批量添加短信
export const downloadShortMessageTemplate = '/api/v1/managesms/downloadTemplate'; //批量添加短信

//消息管理
export const queryPushmessageInfo = '/api/v1/pushmessage/findList'; //分页查询消息
export const addPushmessageInfo = '/api/v1/pushmessage/add'; //新增消息
export const deletePushmessageInfo = '/api/v1/pushmessage/delete'; //删除消息
export const updatePushmessageInfo = '/api/v1/pushmessage/update'; //修改消息
export const queryPushmessageInfoById = '/api/v1/pushmessage/fandById'; //通过主键id查询消息
export const findAllMessageType = '/api/v1/pushmessage/findAllMessageType'; //查询所有的消息类型
export const findAllPushChannel = '/api/v1/pushmessage/findAllPushChannel'; //查询所有的推送渠道
export const deleteBatchPushmessageInfo = '/api/v1/pushmessage/deleteBatch'; //批量删除信息

//活动文章管理 begin
export const deleteActivity = '/api/v1/article/delete'; //删除
export const listarticleActivity = '/api/v1/article/listarticle';//查询
export const changeorderActivity = '/api/v1/article/changeorder';//更改排序
export const updateActivity = '/api/v1/article/update';//修改
export const addActivity = '/api/v1/article/add';//新增
export const policySign = '/api/v1/article/sign';//  获取签名

export const queryBannerInfo = '/api/v1/article/banner/listBanner';//查询banner管理列表信息
export const addBannerInfo = '/api/v1/article/banner/add';//添加banner管理列表信息
export const updateBannerInfo = '/api/v1/article/banner/update';//修改banner管理列表信息
export const deleteBannerInfo = '/api/v1/article/banner/delete';//删除banner管理列表信息
export const bannerInfoChangeorder = '/api/v1/article/banner/changeorder';//删除banner管理列表信息


//活动文章管理 end

//数据统计 begin
export const horsemanorderreport = "/api/v1/horsemanorderreport/findList";//骑手派单数据统计
export const findOverTimeDetail = "/api/v1/horsemanorderreport/findOverTimeDetail";//订单详情
export const exportExcelOrderreport= "/api/v1/horsemanorderreport/exportExcel";
export const dispatchDetail = "/api/v1/delivery/dispatchDetail"; //骑手派单数据-查看明细 
export const overTimeDetail = "/api/v1/delivery/overTimeDetail";//超时订单详情

export const courierDispatchCount = "/api/v1/delivery/courierDispatchCount";//骑手配送数据统计
export const courierDispatchCountExport = "/api/v1/delivery/courierDispatchCountExport";//骑手配送数据导出
export const getDistanceCount = "/api/v1/delivery/getDistanceCount";//骑手配送距离数据统计
export const getDistanceCountExport = "/api/v1/delivery/getDistanceCountExport";//骑手配送距离数据导出

//数据统计 end

//版本管理 begin
export const getversion = '/api/v1/app/appupdate/getallversion';     //查询版本信息
export const uploadVersion = '/api/v1/app/appupdate/updateversion';     //版本信息上传
export const addVersion = '/api/v1/app/appupdate/add';     //版本信息上传

//版本管理 end

//IM
export const getJIMsgin = '/api/v1/JGIM/init';     //获取极光签权
export const findMessages = '/api/v1/JGIM/findMessages';     //首页消息管理
export const updateMessageRed = '/api/v1/JGIM/updateMessageRed';     //设置消息为已读
export const getUnredCount = '/api/v1/JGIM/getUnredCount';     //获取未读消息数
export const findMessagesCount = '/api/v1/JGIM/findMessagesCount';     //消息数量统计接口
export const updateMessagesRead = '/api/v1/JGIM/updateMessagesRead';     //设置指定类型消息为已读



//会员管理 begin
//会员信息
export const queryMember = '/api/v1/member/queryMember';     //查询会员信息
export const exportMemberInfoReport = '/api/v1/member/exportMidMemberTable';     //导出会员信息
export const queryAdress = '/api/v1/member/queryUserAddress';     //查询地址信息
export const changeBlacklist = '/api/v1/member/setDefriend';     //加入/解除黑名单

//会员积分
export const queryMemberIntegral = '/api/v1/member/queryMemberScoreLog';     //查询积分信息
export const exportMemberIntegralReport = '/api/v1/member/exportMemberScoreLogTable';     //导出积分信息
//会员管理 end

//门店分组
export const queryStoreGrouping = '/api/v1/mallstoregroup/search';     //查询门店分组列表
export const addStoreGrouping = '/api/v1/mallstoregroup/add';     //添加门店分组列表
export const updateStoreGrouping = '/api/v1/mallstoregroup/edit';     //修改门店分组列表
export const delStoreGrouping = '/api/v1/mallstoregroup/delete';     //删除门店分组列表
export const getEditStoreGroupInfo = '/api/v1/mallstoregroup/get';     //查询编辑的信息

//分销
export const salesmanorderSearch= "/api/v1/salesmanorder/search" //分销员业绩
export const salesmanorderExport= "/api/v1/salesmanorder/export" //分销员业绩导出
export const salesmanSearch="/api/v1/salesman/search" // 分销员
export const salesmanExport="/api/v1/salesman/export" // 分销员数据导出

//预售
export const presaleAdd="/api/v1/admin/activity/presale/add" // 新增预售
export const presaleOrder="/api/v1/admin/activity/presale/list/order" // 查询预售订单列表
export const presaleList="/api/v1/admin/activity/presale/list" // 查询预售列表
export const presaleDel="/api/v1/admin/activity/presale/del" // 删除预售
export const presaleDetail="/api/v1/admin/activity/presale/query/activity" // 活动详情
export const presaleProduct="/api/v1/admin/activity/presale/query/product" //查询商品信息
export const presaleStore="/api/v1/admin/activity/presale/query/store" //查询门店信息
export const queryStockPrice="/api/v1/admin/activity/presale/query/stock/price" //查询库存价格
export const productType ="/api/v1/admin/activity/presale/get/product/type" //17.编辑时-判断商品选择类型
export const storeType ="/api/v1/admin/activity/presale/get/store/type" //17.编辑时-判断门店选择类型 
export const queryStoreProduct ="/api/v1/admin/activity/presale/query/product/store" //查询门店商品
export const editActivity ="/api/v1/admin/activity/presale/modify/activity" //编辑活动
export const editProduct ="/api/v1/admin/activity/presale/modify/product" //编辑商品信息
export const editStore ="/api/v1/admin/activity/presale/modify/store" //编辑门店信息
export const editStockPrice ="/api/v1/admin/activity/presale/modify/stock/price" //编辑库存价格
export const preGetProduct ="/api/v1/admin/activity/presale/add/query/product" //获取商品列表
export const preGetStore ="/api/v1/admin/activity/presale/add/query/store" //获取门店列表
export const presaleProductList ="/api/v1/admin/activity/presale/list/presale/product" //查询预售商品列表
export const orderStatistics ="/api/v1/admin/activity/presale/get/activity/order/statistics" //预售订单统计
export const setStatus ="/api/v1/admin/activity/presale/modify/status" //启用/停用活动
export const exportActivityOrder ="/api/v1/admin/activity/presale/export/activity/order" //导出活动订单
export const exportActivityProduct ="/api/v1/admin/activity/presale/export/activity/product" //导出活动商品

//限时活动
export const discountList ="/api/v1/activity/discount/page" //活动列表
export const discountDelete ="/api/v1/activity/discount/del" //删除活动
export const discountStatistics ="/api/v1/activity/discount/statistics" //活动数据统计
export const discountOrder ="/api/v1/activity/discount/order/page" //活动订单
export const discountStatus ="/api/v1/activity/discount/status" //状态设置
export const discountStore ="/api/v1/activity/discount/query/store/list" //活动店铺
export const discountActList ="/api/v1/activity/discount/query/discount/list" //关联活动列表
export const discountProduct ="/api/v1/activity/discount/query/product/list" //关联商品列表
export const discountActInfo ="/api/v1/activity/discount/query/info" //活动信息查询
export const discountEditInfo ="/api/v1/activity/discount/modify/activity" //编辑保存活动信息
export const discountEditStore ="/api/v1/activity/discount/modify/store" //编辑保存关联门店
export const discountEditActivity ="/api/v1/activity/discount/modify/discount" //编辑保存关联活动
export const discountEditProduct ="/api/v1/activity/discount/modify/product" //编辑保存关联商品
export const discountEditAdd ="/api/v1/activity/discount/add" //新增活动
export const seletProduct ="/api/v1/mall/product/component/list" //选择商品列表




//满减
export const fullPromotionList ="/api/v1/activity/fullPromotion/list" //活动列表
export const fullPromotionDel ="/api/v1/activity/fullPromotion/deleteActivity" //活动删除
export const fullPromotionAdd ="/api/v1/activity/fullPromotion/add" //活动新增
export const fullPromotionDetail ="/api/v1/activity/fullPromotion/detail" //活动详情
export const fullPromotionUpdateActivity ="/api/v1/activity/fullPromotion/updateActivity" //编辑活动信息
export const fullPromotionUpdateStore ="/api/v1/activity/fullPromotion/updateStore" //编辑门店信息
export const fullPromotionUpdateProduct ="/api/v1/activity/fullPromotion/updateProduct" //编辑商品信息
export const fullPromotionSetStatus ="api/v1/activity/fullPromotion/status" //设置开启状态




//优惠卷
export const getCouponPage ="/api/v1/activity/coupon/getCouponPage" //列表
export const couponAdd ="/api/v1/activity/coupon/add" //新建
export const getDrawDetail ="/api/v1/activity/coupon/getDrawDetail" //领取详情
export const getCouponDetail ="/api/v1/activity/coupon/getCouponDetail" //获取优惠券详情




//发券中心
export const getCounponForCreate ="/api/v1/activity/coupon/getCounponForCreate" //获取优惠券列表
export const counponCenterAdd ="/api/v1/activity/center/add" //新建活动
export const getNewGiftAndCenterPage ="/api/v1/activity/center/getNewGiftAndCenterPage" //发券中心活动列表
export const getDirectedCouponPage ="/api/v1/activity/center/getDirectedCouponPage" //发券中心定向发券活动列表
export const enableCoupon ="/api/v1/activity/center/enableCoupon" //发券中心启用/停用
export const centerDeleteActivity ="/api/v1/activity/center/deleteActivity" //发券中心删除
export const getNewGiftAndCenterDetail ="/api/v1/activity/center/getNewGiftAndCenterDetail" //发券中心获取活动详情
export const getDirectedDetail ="/api/v1/activity/center/getDirectedDetail" //发券中心获取活动详情



//财务报表
export const financial="/api/v1/order/reportForm" //财务报表
export const exportReportForm="/api/v1/order/exportReportForm" //导出财务报表

//BI财务报表
export const queryFinancialReportBi="/api/v1/order/statistics/report/bi/page" //查询BI财务报表
export const downloadBiTotalReport="/api/v1/order/statistics/report/bi/export" //导出BI财务报表
export const downloadBiReportDetial="/api/v1/order/statistics/report/bi/detail/export" //导出BI详情财务报表
export const queryFinancialReportBiDetialInfo="/api/v1/order/statistics/report/bi/detail/page" //查询BI财务报表详情
//财务报表统计(第三方)分页列表
export const queryFinancialReportThree="/api/v1/order/statistics/report/third/page" //查询第三方财务报表
export const downloadThreeTotalReport="/api/v1/order/statistics/report/third/export" //导出第三方财务报表
export const downloadThreeReportDetial="/api/v1/order/statistics/report/third/detail/export" //导出第三方详情财务报表
export const queryFinancialReportThreeDetialInfo="/api/v1/order/statistics/report/third/detail/page" //查询第三方财务报表详情

//客服售后
export const complaintInfo = "/api/v2/complaint/info" //获取售后详情
export const complaintList = "/api/v2/complaint/list" //获取售后列表
export const complaintExport = "/api/v2/complaint/export" //导出列表
export const complaintDel = "/api/v2/complaint/del" //删除售后
export const complaintSave = "/api/v2/complaint/save" //保存售后
export const complaintSendMsg = "/api/v1/managesms/add" //售后发送短信
export const mallstoreSearch = "/api/v1/mallstore/search/part" //售后店铺查询


//我的文件-自研小程序
export const pictureQuery= "/api/v1/picture/query" // 查询图片列表
export const UploadImg_sign = "/api/v1/qcloud/test/sign"//获取签名-上传图片
export const pictureAdd = "/api/v1/picture/add" // 添加图片
export const pictureGroupAdd = "/api/v1/pictureGroup/add" // 添加图片分组
export const pictureDelete= "/api/v1/picture/delete" //删除图片
export const pictureUpdate= "/api/v1/picture/update" //修改图片信息
export const pictureGroupQuery= "/api/v1/pictureGroup/query" //获取图片分组列表
export const pictureGroupUpdate= "/api/v1/pictureGroup/update" //分组名称修改
export const pictureGroupDelete= "/api/v1/pictureGroup/delete" // 删除分组
export const batchEditGroup= "/api/v1/picture/batchUpdate" // 批量修改分组

//微页面
export const webModel_add= "/api/v1/webModel/add" //新增
export const queryWebModel="/api/v1/webModel/queryWebModel" //模板详情
export const queryEditWebModel= "/api/v1/webModel/queryEdit"//编辑时获取微页面信息
export const webModel_update= "/api/v1/webModel/update"//模板信息更新
export const webModel_queryWeb= "/api/v1/webModel/queryWeb"//模板信息列表
export const webModel_deleteWeb = "/api/v1/webModel/deleteWeb"//删除模板信息
export const webModel_copy= "/api/v1/webModel/copy" //模板复制
export const mGetCouponPage= "/api/v1/activity/coupon/getCouponPage" // 优惠券查询
export const product_group="/api/v1/mall/productCategory/list" //商品分类
//export const product_list= "/api/v1/admin/product/pool/list/page" //商品列表
export const product_list = "/api/v1/mall/product/component/list" //商品列表
export const discountMicroPage= "/api/v1/activity/discount/micro/page" //限时折扣活动
//export const getCounponForCreate = "/api/v1/activity/coupon/getCounponForCreate" //优惠券查询
export const setDefaultWebModel = "/api/v1/webModel/setDefaultWebModel" //设置商城主页
//社群统计
//社群数据统计
export const queryAssociationDatastatistics = "/api/v1/client/social/statistics/list/page" //查询社群数据统计
export const exportAssociationDataStatisticsReport = "/api/v1/client/social/statistics/export" //导出社群数据统计


//社群商品统计
export const queryAssociationGoodsStatistics = "/api/v1/client/social/statistics/goods/page" //查询社群商品统计
export const queryGraphStatistics = "/api/v1/client/social/statistics/goods/graph" //查询社群商品统计（柱状图）
export const exportAssociationGoodsStatisticsReport = "/api/v1/client/social/statistics/goods/export" //导出社群数据统计

//商品配货表
export const queryGoodsPickingReport = "/api/v1/client/social/statistics/goods/distribution/page" //查询商品配货表统计
export const exportGoodsPickingReport = "/api/v1/client/social/statistics/goods/distribution/export" //导出商品配货表统计
export const handelPushReport = "/api/v1/client/social/statistics/goods/distribution/send" //一键推送商品配货表
export const sureHandelhand = "/api/v1/client/social/statistics/goods/distribution/manual" //手动生成商品配货表


//社群banner
export const queryAssociationBanner = "/api/v1/socialBanner/listBanner" //查询社群banner列表
export const deleteAssociationBanner = "/api/v1/socialBanner/delete" //删除社群banner信息
export const addAssociationBanner = "/api/v1/socialBanner/add" //添加社群banner信息
export const updateAssociationBanner = "/api/v1/socialBanner/update" //修改社群banner信息


//社群商品
export const queryAssociationGoods = "/api/v1/admin/social/product/page" //查询社群商品列表
export const findGoodsInfoByGoodsName = "/api/v1/admin/product/list" //查询社群商品列表
export const addAssociationGoods = "/api/v1/admin/social/product/add" //添加社群商品列表
export const updateAssociationGoods = "/api/v1/admin/social/product/modify" //添加社群商品列表
export const deleteAssociationGoods = "/api/v1/admin/social/product/del" //添加社群商品列表
export const batchSoldout = "/api/v1/admin/social/product/upper/or" //批量下架



//社群门店
export const queryAssociationStore = "/api/v1/socialstore/search" //查询社群门店列表
export const editOpenorclose = "/api/v1/socialstore/openorclose" //启用/停用社群门店
export const bindman = "/api/v1/socialstore/bindman" //关联团长、主管、负责人等用户
export const queryCommanderInfo = "/api/v1/socialstoreuser/search" //查询团长、主管、负责人等用户
export const addSocialstoreuser = "/api/v1/socialstoreuser/add" //添加用户



//社群高级设置
export const queryCommunitySetting = "/api/v1/config/getSocialConfig" //查询社群高级设置
export const saveCommunitySetting = "/api/v1/config/updateConfig" //查询社群高级设置


//团长活动
export const queryCommanderActivityInfo = "/api/v1/social/activity/commanderActivityList" //查询团长活动列表
export const cutoffOrder = "/api/v1/social/activity/toggleStoreStatus" //截单操作
export const queryCommanderActivityDetialInfo = "/api/v1/social/activity/order/list" //查询团长活动详情

//社群活动
export const querySolitaireActivityInfo = "/api/v1/social/activity/list" //查询社群活动列表
export const queryActivityStoreInfo = "/api/v1/social/activity/listStore" //查询社群活动列表
export const queryActivityAllStore = "/api/v1/socialstore/search" //查询社群门店
export const socialActivityAdd= "/api/v1/social/activity/add"//新建接龙活动
export const listProductStore = "/api/v1/social/activity/listProductStore";//设置
export const getActivityBase = "/api/v1/social/activity/getActivityBase";//编辑-获取基本信息
export const listProduct =  "/api/v1/social/activity/listProduct";//编辑-获取商品信息
export const activityEditSave= "/api/v1/social/activity/edit";//编辑活动-保存
export const qrcodeGetQR = "/api/v1/client/qrcode/getQR";//获取二维码
export const toggleActivityStatusBatch = "/api/v1/social/activity/toggleActivityStatusBatch"//接龙活动上下线

//商城通用设置
export const queryMallSetting = "/api/v1/mall/config/getSocialConfig" //查询商城通用设置
export const saveMallSetting = "/api/v1/mall/config/updateConfig" //查询商城通用设置

//包邮活动
export const queryPinkageActivityInfo = "/api/v1/activity/free/shipping/page" //查询包邮活动列表信息
export const deletePinkageActivityInfo = "/api/v1/activity/free/shipping/del" //删除包邮活动信息
export const addPinkageActivity = "/api/v1/activity/free/shipping/add" //添加包邮活动信息
export const updatePinkageActivity = "/api/v1/activity/free/shipping/modify/activity" //修改包邮活动信息
export const handleOpeStatus = "/api/v1/activity/free/shipping/status" //包邮活动有效状态设置
export const queryNetStoreInfo = "/api/v1/storeonline/search" //查询网点列表信息
export const queryPinkageActivityBaseInfo = "/api/v1/activity/free/shipping/query/info" //查询活动设置信息
export const handelSavePinkageActivityBaseInfo = "/api/v1/activity/free/shipping/modify/activity" //保存活动设置信息
export const queryPinkageActivityStoreInfo = "/api/v1/activity/free/shipping/query/store/list" //查询选择门店信息
export const handelSavePinkageActivityStoreInfo = "/api/v1/activity/free/shipping/modify/store" //保存选择门店信息
//地区门店
export const queryAreaStoreInfo = "/api/v1/district/search" //查询地区门店列表

//线下优惠策略
export const querySpecialProduct = "/api/v1/storePriceTemp/search" //查询单品特价列表
export const exportSpecialProductInfo = "/api/v1/storePriceTemp/export" //导出单品特价信息
export const querySalesPromotion = "/api/v1/promotion/search" //查询促销活动列表
export const exportSalesPromotionInfo = "/api/v1/promotion/export" //导出促销活动信息
export const queryPromotionInfo = "/api/v1/promotion/getInfo" //查询促销活动详细信息
export const queryPromotionProductInfo = "/api/v1/promotion/product" //查询促销活动商品信息
export const queryPromotionStoreInfo = "/api/v1/promotion/store" //查询促销活动门店信息

