import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

 {
    path: '/system',  // 父路径
    component: Layout,
    redirect: '/system/sysUser', // 直接输入system 会重定向到 
    name: 'system',
    meta: { title: '系统管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'sysRole', // 子路径  注意这里不要加斜线 
        name: 'sysRole',
        component: () => import('@/views/system/sysRole/list'),
        meta: { title: '角色管理', icon: 'table' }
      },
      {
        path: 'sysUser',  // 子路径
        name: 'Tree',
        component: () => import('@/views/system/sysUser/list'),
        meta: { title: '用户管理', icon: 'tree' }
      },
      {
        path: 'sysMenu',
        name: 'sysMenu',
        component: () => import('@/views/system/sysMenu/list'),
        meta: {title: '菜单管理',icon: 'el-icon-s-unfold'}
      },
      // {
      //   path: 'assignAuth',
      //   component: () => import('@/views/system/Role/assignAuth'),
      //   meta: {title: '角色授权'},
      //   hidden: true,
      // }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router