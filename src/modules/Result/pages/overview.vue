<template>
  <!-- <LayoutSection
    flex-content
  >
  </LayoutSection> -->
  <div style="border: 1px solid red;">
    <div
      v-for="(i) in 1000"
      :key="i"
    >
      {{ i }}
      {{ overviewData.content }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useResultStore } from '@/modules/Result/store'

import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'ResultOverView',
  setup() {
    const resultStore = useResultStore()
    const route = useRoute()
    const overviewData = computed(() => resultStore.overviewData)

    async function init() {
      const { error, data } = await resultStore.getResultOverview({
        projectId: route.params.projectId
      })

      if (error) return

      console.log('overview', data)
    }

    init()
    return {
      overviewData
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
