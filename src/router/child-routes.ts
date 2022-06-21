
const importModule = import.meta.glob('../modules/**/*.vue')
const Layout = () => import('@/components/Layout/index.vue')
const LayoutView = () => import('@/components/Layout/LayoutView.vue')

const systemRouteList = [
  {
    path: 'dashboard',
    component: LayoutView,
    name: 'Dashboard',
    icon: 'eye',
    redirect: {
      name: 'DashboardIndex'
    },
    children: [
      {
        path: '',
        name: 'DashboardIndex',
        meta: {
          title: '首页'
        },
        component: importModule['../modules/Dashboard/pages/list.vue']
      },
      {
        path: 'list',
        name: 'DashboardIndex',
        component: importModule['../modules/Dashboard/pages/list.vue'],
        meta: {
          title: '首页'
        }
      },
      {
        path: 'demo',
        name: 'DashboardDemo',
        component: importModule['../modules/Dashboard/pages/demo.vue'],
        meta: {
          title: 'Dashboard Demo'
        }
      }
    ]
  },
  {
    path: 'result',
    component: LayoutView,
    children: [
      {
        path: ':projectId',
        component: Layout,
        name: 'result',
        icon: 'eye',
        redirect: {
          name: 'ResultOverview'
        },
        children: [
          {
            path: 'overview',
            name: 'ResultOverview',
            component: importModule['../modules/Result/pages/overview.vue'],
            meta: {
              title: '总览'
            }
          }
        ]
      }
    ]
  }
]

const childrenRoutes = [
  {
    path: 'test-layout',
    title: 'TestLayout',
    name: '布局测试',
    icon: 'el-icon-s-promotion',
    meta: {
      title: 'TestLayout'
    },
    component: Layout
  },
  {
    path: 'user',
    component: Layout,
    name: 'User',
    icon: 'eye',
    meta: {
      title: '账户'
    },
    redirect: {
      name: 'UserLogin'
    },
    children: [
      {
        path: 'login',
        name: 'UserLogin',
        component: importModule['../modules/UserAccount/pages/login.vue'],
        meta: {
          title: '登录'
        }
      }
    ]
  },
  ...systemRouteList
]

export default childrenRoutes
