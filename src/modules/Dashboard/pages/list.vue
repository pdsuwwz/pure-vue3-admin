<template>
  <div class="dashboard-index">
    <div
      style="height: 1500px;"
    >
      Dashboard Index 页面
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  onBeforeMount,
  onMounted,
  reactive
} from 'vue'
import { useLocale } from 'element-plus'

import useCurrentInstance from '@/hooks/useCurrentInstance'

import { useDashboardStore } from '@/modules/Dashboard/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'DashboardIndex',
  components: {
  },
  setup() {
    const router = useRouter()
    const { proxy } = useCurrentInstance()
    const dashboardStore = useDashboardStore()

    const handleJump = () => {
      router.push({
        name: 'ResultOverview',
        params: {
          projectId: '123'
        }
      })
    }

    return {
      handleJump
    }
  }
})

</script>

<style lang="scss" scoped>
.dashboard-index {
  height: 100%;
  overflow-y: auto;
  border: 1px solid green;
}
</style>
