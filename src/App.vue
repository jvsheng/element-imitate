<template lang="html">
  <div class="app">
    <el-collapse-item :title='"hello world"' :name='"1"'></el-collapse-item>
  </div>
</template>

<script>
import ElCollapseItem from '../packages/collapse/src/collapse-item.vue';
export default {
  components: {
    ElCollapseItem
  }
}
</script>
