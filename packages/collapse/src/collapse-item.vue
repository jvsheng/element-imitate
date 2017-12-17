<template>
  <div class="el-collapse-item">
    <div class="el-collapse-item_header" @click="handleClick">
      {{title}}
      <slot name="title"></slot>
    </div>
    <el-collapse-transition>
      <div class="el-collapse-item_wrap"
           v-show="isActive">
        <div class="el-collapse-item_content">
          <slot></slot>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
  import Emitter from 'main/mixins/emitter.js';
  import ElCollapseTransition from 'main/transitions/collapse-transition';

  export default {
    name: 'ElCollapseItem',

    mixins: [Emitter],

    components: {
      ElCollapseTransition
    },

    props: {
      title: String,
      name: String
    },

    inject: ['collapse'],

    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      },
      collapse() {
        return this.collapse;
      }
    },

    methods: {
      handleClick() {
        this.dispatch('ElCollapse', 'item-click', this.name);
      }
  }
  }
  ;
</script>
