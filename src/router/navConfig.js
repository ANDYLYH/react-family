export default {
    menus: [ // 菜单相关路由
        {id:1, key: '/Home/List', title: '数据显示', icon: 'mobile', 
          subs: [
                {id:11, pid:1, key: '/Home/List', title: '列表页', component: 'List'},
                {id:12, pid:1, key: '/Home/Table', title: '表格', component: 'Table'}
            ],
        },
        {id:2,key: '/Home/UserInfo', title: '用户信息', icon: 'scan',
          subs: [
                {id:21, pid:2,key: '/Home/UserInfo', title: '用户信息', component: 'UserInfo'},
            ], 
        },
        {id:3,key: '/Home/Counter', title: '结算页', icon: 'safety', 
          subs: [
                {id:31, pid:3,key: '/Home/Counter', title: '结算页', component: 'Counter'},
            ], 
        },
    ],
    others: [] // 非菜单相关路由
}