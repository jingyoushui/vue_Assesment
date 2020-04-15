import Vue from 'vue'
import Router from 'vue-router'
//Uncaught (in promise) undefined
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

import {Layout, Content} from "../layout"; // 页面整体布局
import {topRouterMap} from "./topRouter";

process.env.NODE_ENV === "development" ? Vue.use(Router) : null;

function filterTopRouterMap(name) {
    let router = topRouterMap.find((item) => {
        return item.parentName === name;
    });
    return router.data; // arr
}

/**
 * 1、roles:后台返回的权限结构;
 */
//手动跳转的页面白名单
const whiteList = [
    '/'
];
/**
 * path:''与path:'*'的区别：
 * 1、path:'*', 会匹配所有路径
 * 2、path:''，也是会匹配到路由
 *
 */
//默认不需要权限的页面
export const constantRouterMap = [
    {
        path: '',
        component: Layout,
        redirect: '/index/index',
        hidden: true
    },
    {path: '/login', name: 'login', component: () => import('@/page/login'), hidden: true},
    {path: '/404', component: () => import('@/page/errorPage/404'), hidden: true},
    {path: '/401', component: () => import('@/page/errorPage/401'), hidden: true},
    {
        path: '/index',
        name: 'index',
        component: Layout,
        meta: {
            title: '首页',
            icon: 'icondashboard',
        },
        noDropdown: true,
        children: [
            {
                path: 'index',
                meta: {
                    title: '首页',
                    icon: 'icondashboard',
                    routerType: 'leftmenu'
                },
                component: () => import('@/page/index/index'),
            }
        ]
    }
]

//注册路由
export default new Router({
    mode: 'history', // 默认为'hash'模式
    base: '/permission/', // 添加跟目录,对应服务器部署子目录
    routes: constantRouterMap
})

//异步路由（需要权限的页面）
export const asyncRouterMap = [

    {
        path: '/toupiao',
        name: 'toupiao',
        meta: {
            title: '投票管理',
            icon: 'iconuser',
        },
        component: Layout,
        redirect: '/toupiao/weitou',
        children: [
            {
                path: 'weitou',
                name: 'weitou',
                meta: {
                    title: '未投票'
                },
                component: () => import('@/page/toupiao/weitou')
            },
            {
                path: 'yitou',
                name: 'yitou',
                meta: {
                    title: '已投票'
                },
                component: () => import('@/page/toupiao/yitou')
            },
        ]
    },
    {
        path: '/h_toupiao',
        name: 'h_toupiao',
        component: Layout,
        hidden: true,
        children: [
            {
                path: 'TouPiao',
                name: 'TouPiao',
                meta: {
                    title: '正在投票'
                },
                component: () => import('@/page/toupiao/TouPiao')
            },
            {
                path: 'TouPiao2',
                name: 'TouPiao2',
                meta: {
                    title: '正在投票'
                },
                component: () => import('@/page/toupiao/TouPiao2')
            },
        ]
    },
    {
        path: '/mubanManage',
        name: 'mubanManage',
        meta: {
            title: '模板管理',
            icon: 'iconpay1',
        },
        component: Layout,
        redirect: '/mubanManage/NewForm',
        children: [
            {
                path: 'NewForm',
                name: 'NewForm',
                meta: {
                    title: '自定义模板'
                },
                component: () => import('@/page/mubanManage/NewForm')
            },
            {
                path: 'mubanShow',
                name: 'mubanShow',
                meta: {
                    title: '测评票模板',
                    icon: 'iconinfo',
                    routerType: 'leftmenu',
                    titleList: [
                        {"path": "mubanShow1", "title": "测评票模板1"},
                        {"path": "mubanShow2", "title": "测评票模板2"},
                        {"path": "mubanShow3", "title": "测评票模板3"},
                        {"path": "mubanShow4", "title": "测评票模板4"},
                        {"path": "mubanShow5", "title": "测评票模板5"},
                        {"path": "mubanShow6", "title": "测评票模板6"},
                        {"path": "mubanShow7", "title": "测评票模板7"}
                    ]
                },
                component: Content,
                children: filterTopRouterMap('mubanShow')
            },
            {
                path: 'existmuban',
                name: 'existmuban',
                meta: {
                    title: '已有模板'
                },
                component: () => import('@/page/mubanManage/existmuban')
            },

        ]
    },
    {
        path: '/h_mubanManage',
        name: 'h_mubanManage',
        component: Layout,
        hidden: true,
        children: [
            {
                path: 'Yulan',
                name: 'Yulan',
                meta: {
                    title: '预览'
                },
                component: () => import('@/page/mubanManage/components/Yulan')
            },
            {
                path: 'open_exist',
                name: 'open_exist',
                meta: {
                    title: '使用模板'
                },
                component: () => import('@/page/mubanManage/open_exist')
            },

        ]
    },
    {
        path: '/publish',
        name: 'publish',
        component: Layout,
        redirect: '/publish/selectpeople',
        hidden: true,
        children: [
            {
                path: 'selectpeople',
                name: 'selectpeople',
                meta: {
                    title: '选择人员'
                },
                component: () => import('@/page/publish/selectpeople')
            },
            {
                path: 'selectgrade',
                name: 'selectgrade',
                meta: {
                    title: '投票设置'
                },
                component: () => import('@/page/publish/selectgrade')
            },
            {
                path: '_publish',
                name: '_publish',
                meta: {
                    title: '发布投票'
                },
                component: () => import('@/page/publish/publish')
            },

        ]
    },
    {

        path: '/dataShow',
        name: 'dataShow',
        meta: {
            title: "投票汇总",
            icon: "iconecharts",

        },
        component: Layout,
        children: [
            {
                path: 'myfabu',
                name: 'myfabu',
                meta: {
                    title: '我的发布',
                    routerType: 'leftmenu'
                },
                component: () => import('@/page/toupiaoData/myfabu'),
            },
        ]
    },
    {

        path: '/h_dataShow',
        name: 'h_dataShow',
        hidden: true,
        meta: {
            title: "投票汇总",
            icon: "iconecharts",

        },
        component: Layout,
        children: [
            {
                path: 'dataShow1',
                name: 'dataShow1',
                meta: {
                    title: '柱状统计图',
                    routerType: 'leftmenu'
                },
                component: () => import('@/page/toupiaoData/components/dataShow1'),
            },
            {
                path: 'dataShow2',
                name: 'dataShow2',
                meta: {
                    title: '柱状统计图',
                    routerType: 'leftmenu'
                },
                component: () => import('@/page/toupiaoData/components/dataShow2'),
            },
        ]
    },

    {
        path: '/infoManage',
        name: 'infoManage',
        // hidden:true,
        meta: {
            title: '信息管理',
            icon: 'iconinfo',
        },
        component: Layout,
        children: [
            {
                path: 'infoModify',
                name: 'infoModify',
                meta: {
                    title: '修改信息',
                    routerType: 'leftmenu',
                },
                component: () => import('@/page/infoManage/infoModify'),
            }
        ]
    },
    // {
    //     path: '/error',
    //     component: Layout,
    //     name: 'errorPage',
    //     meta: {
    //         title: '错误页面',
    //         icon: 'iconError'
    //     },
    //     children: [
    //         {
    //             path: '401',
    //             name: 'page401',
    //             component: () => import('@/page/errorPage/401'),
    //             meta: {
    //                 title: '401',
    //                 noCache: true
    //             }
    //         },
    //         {
    //             path: '404',
    //             name: 'page404',
    //             component: () => import('@/page/errorPage/404'),
    //             meta: {
    //                 title: '404',
    //                 noCache: true
    //             }
    //         }
    //     ]
    // },
    {path: '*', redirect: '/404', hidden: true}
];

/**
 *  路由设置要求：
 * 1、该路由有子菜单,可以设置多层嵌套路由children;如果没有子菜单,不需要设置children;通过item.children.length来判断路由的级数;
 * 2、登录成功后,定位到系统首页时,需要加载页面整体布局组件Layout并进行子路由定向加载;
 *
 * 按需加载路由组件的2种方法：
 * 1、component: () => import('@/page/login')
 * 2、component:resolve => require(['@/page/fundPosition'], resolve)
 *
 *
 *
 * 什么情况下，路由会定位到404页面?
 * 路由中redirect:'',不起作用？
 * 三级子菜单要在顶部展示？
 *
 *
 *
 */

