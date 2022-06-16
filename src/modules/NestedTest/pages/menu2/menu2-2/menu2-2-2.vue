<template>
  <div class="nested-child-child-container">
    Menu2-2-2
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NestedMenu222'
})

</script>

<style lang="scss" scoped>
.nested-child-child-container {
  width: 220px;
  padding: 20px;
  border: 1px solid #000;
}
</style>
