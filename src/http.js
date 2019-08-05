import axios from 'axios'
import store from './store/index'
import {type} from './store/index'

import router from './router/index'

axios.defaults.timeout = 5000

axios.interceptors.request.use(
    config => {
        if(store.state.token){
            config.headers.Authorization = `token ${store.state.token}`
        }
        return config
    },
    err => {
        return Promise.reject(err);
    }
)

axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            // 401 清除token信息并跳转到登录页面
            store.commit(type.LOGOUT)
            
            // 只有在当前路由不是登录页面才跳转
            router.currentRoute.path !== 'login' &&
              router.replace({
                path: 'login',
                query: { redirect: router.currentRoute.path },
              })
        }
      }
      // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
      return Promise.reject(error.response.data)
    },
  )
  
export default axios