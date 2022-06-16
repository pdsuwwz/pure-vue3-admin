
import { useLocale } from 'element-plus'

export default {
  install(app: import('vue').App<any>) {
    app.config.globalProperties._t = function(str: string | Array<any>) {
      const locale = useLocale()
      if (Array.isArray(str)) {
        return locale.t(str[0])
      }
      return locale.t(str)
    }
  }
}
