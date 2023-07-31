import App from './App'
import router from './router'
import Vue from 'vue'
import axios from 'axios'
import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './styles/element-variables.scss'

Vue.use(router)

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 1000 * 60,
    withCredentials: true
  })
Vue.prototype.$request = request

// 全局注册element-ui组件，同时通过size来设置（通过Cookie获得，没有则默认最小）
Vue.use(Element )


// 创建vm
new Vue({
    // 指定容器
    el: '#app',
    // 使用路由
    router,
    // 解析App模板
    render: h => h(App),
})
