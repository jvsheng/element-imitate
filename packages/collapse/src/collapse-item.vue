<template>
  <div class="el-collapse-item">
    <div class="title">
      {{title}}
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElCollapseItem',
  props: ['title', 'name']
}
</script>
