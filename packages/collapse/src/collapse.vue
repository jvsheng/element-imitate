<template>
  <div class="el-collapse">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ElCollapse',

    componentName: 'ElCollapse',

    props: {
      value: Array
    },

    data() {
      return {
        activeNames: [].concat(this.value)
      };
    },

    provide() {
      return {
        collapse: this
      };
    },

    watch: {
      value(value) {
        // this.activeNames = [].concat(value);
      }
    },

    methods: {
      handleClick(data) {
        let index = this.activeNames.indexOf(data);
        if (index > -1) {
          this.activeNames.splice(index, 1);
        } else {
          this.activeNames.push(data);
        }
      }
    },

    created() {
      this.$on('item-click', this.handleClick);
    }

  };
</script>
