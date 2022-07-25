<template>
  <div class="layout-section-container">
    <div class="layout-section-container__content">
      <div
        v-if="hasDivider"
        class="content-divider"
      ></div>
      <div
        class="layout-section-container__content-inner"
        :class="{
          'is-flex': flexContent
        }"
      >
        <slot name="default"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

/**
 * 上下布局，顶部 header 大标题 + 底部内容区域
 */
export default defineComponent({
  name: 'LayoutSection',
  props: {
    hasDivider: {
      type: Boolean,
      default: false
    },
    flexContent: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
.layout-section-container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .layout-section-container__content {
    display: flex;
    flex-direction: column;
    position: relative;
    flex: auto;
    min-height: 0;

    .content-divider {
      height: 1px;
      background: #dcdfe6;
      margin-bottom: 6px;
    }

    .layout-section-container__content-inner {

      &.is-flex {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
      }
    }
  }
}
</style>
