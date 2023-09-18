<template>
  <el-config-provider
    :locale="currentLocale"
  >
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { ElConfigProvider } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import { defineComponent, computed, watch } from 'vue'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

import selfEn from '@/locales/lang/en'
import selfZhHans from '@/locales/lang/zh-hans'
import useUserAccount from '@/modules/UserAccount/store'

const useLanguage = (store) => {
  const currentLocale = computed(() => {
    let locale: any = null

    switch (store.locale) {
      case 'zh-hans':
        locale = {
          ...zhCn,
          ...selfZhHans
        }
        break
      case 'en':
        locale = {
          ...en,
          ...selfEn
        }
        break
    }
    return locale
  })

  return {
    currentLocale
  }
}

export default defineComponent({
  name: 'App',
  components: {
    ElConfigProvider
  },
  setup() {
    const store = useUserAccount()
    const route = useRoute()
    const router = useRouter()

    watch(
      () => route.params,
      () => {
        if (route.name === '404') return

        store.setLanguage({
          locale: route.params.locale || 'zh-hans'
        })
      }
    )

    return {
      ...useLanguage(store)
    }
  }
})
</script>

<style lang="scss">
@use "@/styles/index.scss";
</style>
