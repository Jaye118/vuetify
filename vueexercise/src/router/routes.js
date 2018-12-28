
import HelloWorld from '@/components/HelloWorld'
import Navigation from '@/views/Navigation'
import datePicker from '@/views/datePicker'

// 管理全局的页面路由
const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/Navigation',
    component: Navigation
  },
  {
    path: '/datePicker',
    component: datePicker
  }
]
export default routes
