<template>
  <div class="layout-area-container">
    <div class="layout-area-container__bottom">
      <div class="layout-area-container__bottom__inner">
        <aside
          v-if="$slots.side"
          class="side-layout-area-menu-bar"
        >
          <slot name="side"></slot>
        </aside>
        <section class="content-section-container">
          <div class="main-content-top">
            <slot name="rightTop"></slot>
          </div>
          <main class="main-content-box">
            <div
              class="inner-content"
            >
              <slot name="content"></slot>
            </div>
          </main>
          <footer class="main-content-footer">
            ☕️ Powered By Wisdom
          </footer>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

/**
 * 上下左右布局，顶部导航 + (底部左侧侧边栏 + 底部右侧内容区域)
 */
export default defineComponent({
  name: 'LayoutArea'
})
</script>

<style lang="scss" scoped>
$headerHeight: 48px;
.layout-area-container {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #f0f2f5;
  .layout-area-container__bottom {
    display: flex;
    flex: 1;
    position: relative;
    color: #303133;
    .layout-area-container__bottom__inner {
      position: absolute;
      // top: 1px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      .side-layout-area-menu-bar {
        position: relative;
        flex-direction: column;
        // width: 224px;
        transition: width .28s;
        border-right: 1px solid #dcdfe6;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: #36383D;
        scroll-behavior: smooth;
      }
      .content-section-container {
        display: flex;
        flex: auto;
        flex-direction: column;
        min-width: 0;
        background-color: #f0f2f5;
        .main-content-top {

        }
        .main-content-box {
          flex: auto;
          position: relative;
          .inner-content {
            padding: 16px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: auto;
            scroll-behavior: smooth;
          }
        }
        .main-content-footer {
          color: #36383D;
          text-align: center;
          line-height: 40px;
          border-top: 1px solid #ddd;
        }
      }
    }
  }
}
</style>
