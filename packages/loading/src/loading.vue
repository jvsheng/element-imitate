<template>
  <transition name="el-loading-fade" @after-leave="handleAfterLeave">
    <div class="el-loading-mask" v-show="visible">
      <div class="el-loading-spinner">
        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"></circle>
        </svg>
      </div>
      <p v-if="text" class="el-loading-text">{{text}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ElLoading',

  data() {
    return {
      visible: false,
      text: null
    };
  },

  methods: {
    handleAfterLeave() {
    }
  }
};
</script>
