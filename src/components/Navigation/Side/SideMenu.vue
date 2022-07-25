<template>
  <NavigationSideLogo />
  <div class="nav-s-menu">
    <div class="nav-s-menu-inner">
      <p>
        <el-button @click="handleJump1()">测试跳转1</el-button>
      </p>
      <p>
        <el-button @click="handleJump2()">测试跳转2</el-button>
      </p>
      <p>
        <el-button @click="handleJump3()">测试跳转3</el-button>
      </p>
      <div
        v-for="(menuItem) in 100"
        :key="menuItem"
      >
        Menu-{{ menuItem }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import NavigationSideLogo from './SideLogo.vue'

export default defineComponent({
  name: 'NavigationSideMenu',
  components: {
    NavigationSideLogo
  },
  setup() {
    const router = useRouter()
    const handleJump1 = () => {
      router.push({
        name: 'DashboardIndex'
      })
    }
    const handleJump2 = () => {
      router.push({
        name: 'ResultOverview',
        params: {
          projectId: '123'
        }
      })
    }
    const handleJump3 = () => {
      router.push({
        name: 'DashboardDemo'
      })
    }
    return {
      handleJump1,
      handleJump2,
      handleJump3
    }
  }
})
</script>

<style lang="scss" scoped>
// navigation-side-menu
$ns: "nav-s-menu";
.#{$ns} {
  width: 224px;
  flex: 1;
  min-height: 0;
  color: #fff;

  &-inner {
    height: 100%;
    overflow-y: auto;

    // border: 1px solid red;
  }
}
</style>
