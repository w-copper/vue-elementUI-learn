/* eslint-disable */
import Vue from "vue"

import Router from "vue-router"

import HelloWorld from '../components/HelloWorld'
import Login from "../components/Login"
import DashBord from "../components/DashBord"
import UserInfo from "../components/UserInfo"
import store from "../store";
import {type} from "../store"


Vue.use(Router)

const router = new Router({
    routes: [
        {
            path:'/',
            redirect:'/index',
        },
        {
            path:'/hello',
            name:'hello',
            component:HelloWorld,
            meta:{
                requireAuth:true,
            }
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/index',
            name:'dashbord',
            component:DashBord,
            meta:{
                requireAuth:true,
                addLog:true,
                verbose:'面板'
            }
        },
        {
            path:'/user',
            name:'userinfo',
            component:UserInfo,
            meta:{
                requireAuth:true,
                addLog:true,
                verbose:'用户管理'
            }
        },
        {
            path:"*",
            redirect:'/'
        }
    ]
})

if (window.localStorage.getItem('token')) {
    store.commit(type.LOGIN, window.localStorage.getItem('token'))
}


router.beforeEach((to, from, next) => {
    if(to.meta.addLog){
        let exist = false
        for(let t of store.state.logs){
            if(t.path == to.path){
                exist = true
                break
            }
        }
        if(!exist){
            store.commit(type.LOGS, {name:to.meta.verbose, path:to.path});
        }

    }

    if(to.meta.requireAuth)
    {
        // console.log(store.state.token)
        if(store.state.token)
        {

            next();
        }
        else{
            next({path:'/login', query:{redirect:to.fullPath}});
        }
    }
    else{
        next();
    }
})

export default router