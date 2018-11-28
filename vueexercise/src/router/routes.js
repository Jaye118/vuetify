
import HelloWorld from '@/components/HelloWorld'
import Navigation from '@/views/Navigation'

// 管理全局的页面路由
const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/Navigation',
    component: Navigation
  }
]
export default routes
