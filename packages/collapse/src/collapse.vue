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
      accordion: Boolean,
      value: {
        type: [Array, String, Number],
        default() {
          return [];
        }
      }
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
        this.activeNames = [].concat(value);
      }
    },

    methods: {
      handleItemClick(data) {
        if (this.accordion) {
          this.activeNames = this.activeNames[0] && this.activeNames[0] === data ? '' : [].concat(data);
        } else {
          let index = this.activeNames.indexOf(data);
          if (index > -1) {
            this.activeNames.splice(index, 1);
          } else {
            this.activeNames.push(data);
          }
        }
      }
    },

    created() {
      this.$on('item-click', this.handleItemClick);
    }

  };
</script>
