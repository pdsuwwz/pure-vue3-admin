<template>
  <div
    class="side-logo-container"
  >
    <router-link
      :to="`/${$route.params.locale || ''}`"
    >
      <img
        class="side-logo-img"
        src="@/assets/images/pinia.svg"
        alt="LOGO"
      >
      <h1 class="side-logo-title">
        {{ title }}
      </h1>
    </router-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useLocale } from 'element-plus'
import { systemTitle } from '@/locales/data'

export default defineComponent({
  name: 'NavigationSideLogo',
  setup() {

    const title = systemTitle

    return {
      title
    }
  }
})
</script>
<style lang="scss" scoped>
.side-logo-container {
  position: relative;
  height: 56px;
  white-space: nowrap;

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #fff;
    font-size: 16px;

    .side-logo-img {
      height: 30px;
    }

    .side-logo-title {
      height: 32px;
      line-height: 32px;
      font-size: 16px;
      font-weight: 600;
      margin-left: 12px;
      font-family: PingFangSC-Regular, "PingFang SC";
    }
  }
}
</style>
