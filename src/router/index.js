"use strict";
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Index from '../components/index/Index.vue';
import ShangCheng from '../components/shangcheng/ShangCheng.vue';
import ShiJiaQiu from '../components/shijiaqiu/ShiJiaQiu.vue';
import Zhibo from '../components/Zhibo/Zhibo.vue';
import QuanZi from '../components/quanzi/QuanZi.vue';
import Shuju from '../components/shuju/Shuju.vue'
export default new Router({
    routes:[
        //index--path
        {
            path: '/',
            name: 'index',//自定义名字
            component: Index
        },
        //to --path
        {
            path: '/ShangCheng',
            name: 'shangCheng',
            component: ShangCheng
        },
        //to-----path
        {
            path: '/ShiJiaQiu',
            name: 'shijiaqiu',
            component: ShiJiaQiu
        },
        //to----path
        {
            path: '/Zhibo',
            name: 'zhibo',
            component: Zhibo
        },{
            path: '/QuanZi',
            name: 'quanzi',
            component:QuanZi
        },
        {
            path: '/Shuju',
            name: 'shuju',
            component:Shuju
        }
    ]


})





