<template>
  <LayoutArea>
    <template #rightTop>
      <NavigationNavBar
        :fixed="false"
      >
        {{ systemTitle }}
      </NavigationNavBar>
    </template>

    <template #side>
      <LayoutSection
        flex-content
      >
        <NavigationSideMenu />
      </LayoutSection>
    </template>

    <template #content>
      <router-view v-slot="{ Component }">
        <Component :is="Component" />
      </router-view>
    </template>
  </LayoutArea>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
import { useLocale } from 'element-plus'

import NavigationSideMenu from '@/components/Navigation/Side/SideMenu.vue'
import NavigationNavBar from '@/components/Navigation/NavBar.vue'

import useCurrentInstance from '@/hooks/useCurrentInstance'

import { useRouter } from 'vue-router'
import { systemTitle } from '@/locales/data'

export default defineComponent({
  name: 'LayoutView',
  components: {
    NavigationNavBar,
    NavigationSideMenu
  },
  setup() {
    const router = useRouter()
    const { proxy } = useCurrentInstance()
    const localeInject = useLocale()

    return {
      systemTitle,
      localeInject
    }
  }
})

</script>

<style lang="scss" scoped>
</style>
