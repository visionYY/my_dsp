import Vue from 'vue'
// import Router from 'vue-router'
//一级路由
import Home from '@/views/home/home'
import Plan from '@/views/plan/plan'
import Unit from '@/views/unit/unit'
import Login from '@/views/login/login'
import Creative from '@/views/creative/creative'
import New from '@/views/new/new'
import Found from '@/views/found/found'
// Vue.use(Router)
let router = {
  routes: [
    {
      path: '*',
      redirect:'/home'
    },{
      path: '/login',
      name: 'login',
      component: Login,
    },{
      path: '/home',
      name: 'Home',
      component: Home,
    },{
      path: '/plan',
      name: 'plan',
      component: Plan,
    },{
      path: '/unit',
      name: 'unit',
      component: Unit,
    },{
      path: '/creative',
      name: 'creative',
      component: Creative,
    },{
      path: '/new',
      name: 'new',
      component: New,
      children:[{
        path: '/new/found',
        name: 'found',
        component: Found,
      }]
    }
]
}
export default router;