import { createApp } from 'vue'

import router from '@/router'
import '@/router/permission'

import Pinia from '@/store'

import App from './App.vue'

import ElementPlus from 'element-plus'

import '@/assets/fonts'

import GlobalComponents from '@/components'
import Widgets from '@/widgets'

const app = createApp(App)

app
  .use(router)
  .use(Pinia)

app
  .use(ElementPlus)
  .use(GlobalComponents)
  .use(Widgets)
  .mount('#app')

export default app
