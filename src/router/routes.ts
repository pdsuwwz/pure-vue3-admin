import childrenRoutes from '@/router/child-routes'
import { localesMapping, isHasLocale } from '@/locales'
import { isUndefined } from '@/utils/type'

const Layout = () => import('@/components/Layout/index.vue')

function getLocaleRegex() {
  let reg = ''
  localesMapping.forEach((localeItem, index) => {
    const line = index !== localesMapping.length - 1 ? '|' : ''
    reg = `${ reg }${ localeItem.localeCode }${ line }`
  })
  return `(${ reg })`
}

const routes = [
  {
    path: '/',
    name: 'Root',
    redirect: '/dashboard'
  },
  {
    path: `/:locale${ getLocaleRegex() }?`,
    component: Layout,
    beforeEnter(to, from, next) {
      if (isHasLocale(to.params.locale) && !isUndefined(to.params.pathMatch)) {
        next(`/${ to.params.locale }/dashboard`)
        return
      }
      next()
    },
    children: [
      {
        path: '',
        name: 'LangRoot',
        redirect: {
          name: 'DashboardIndex'
        }
      },
      ...childrenRoutes
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/components/404.vue')
  }
]

export default routes
