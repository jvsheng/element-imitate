<template>
    <div class="el-collapse-item" :class="{'is-active': isActive}" role="tab">
        <div class="el-collapse-item_header"
             @click="handleClick"
             role="button"
             @keyup.space.enter.stop="handleEnterClick"
             tabindex="0"
             :class="{'focusing': focusing}"
             @focus="handleFocus"
             @blur="focusing = false">
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

    data() {
      return {
        focusing: false,
        isClick: false
      };
    },

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
      handleFocus() {
        setTimeout(() => {
          if (!this.isClick) {
            this.focusing = true;
          } else {
            this.isClick = false;
          }
        }, 50);
      },
      handleClick() {
        this.dispatch('ElCollapse', 'item-click', this.name);
        this.focusing = false;
        this.isClick = true;
      },
      handleEnterClick() {
        this.dispatch('ElCollapse', 'item-click', this.name);
      }
    }
  };
</script>
