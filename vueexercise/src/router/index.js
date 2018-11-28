import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes' // 引入同级目录下的 routes.js 文件

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'hash'
})

export default router
