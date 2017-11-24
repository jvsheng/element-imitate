<template lang="html">
  <div class="app" class="red">
    <el-collapse-item :title='"hello"' :name='"1"'></el-collapse-item>
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
