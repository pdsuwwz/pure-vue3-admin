import router from '@/router'
import useUserAccount from '@/modules/UserAccount/store'

import Cookie from 'js-cookie'
import { allowlist } from '@/router/auth-list'
import { systemTitle } from '@/locales/data'

import NProgress from 'nprogress'

NProgress.configure({
  showSpinner: false
})

router.beforeEach(async(to, from, next) => {
  const userAccountStore = useUserAccount()

  NProgress.start()

  document.title = `${ to.meta.title || '' } - ${ systemTitle }`

  console.log('😄😄😄 ', to)

  const currentRouteLocale = to.params.locale

  if (
    allowlist.find(
      name => to.name === name
    )
  ) {
    next()
    return
  }

  // 如果不存在 token 则直接返回登录页
  if (!Cookie.get('token')) {
    userAccountStore.setLanguage({
      locale: currentRouteLocale || userAccountStore.locale
    })
    next(`/${ currentRouteLocale || userAccountStore.locale }/user/login`)
    return
  }

  // 如果存在 token 则通过获取用户信息来校验 token 的有效性
  const { data, error } = await userAccountStore.getUserInfo()

  if (error) {
    userAccountStore.setLanguage({
      locale: currentRouteLocale || data.language
    })
    Cookie.remove('token')
    next(`/${ currentRouteLocale || data.language }/user/login`)
    return
  }

  next()
})

router.afterEach((to) => {
  NProgress.done()
})
