import Vue from 'vue';
import Loading from './loading';
const Mask = Vue.extend(Loading);

exports.install = Vue => {
  Vue.directive('loading', {
    bind(el, binding, vnode) {
      const mask = new Mask({
        el: document.createElement('div')
      });
      el.instance = mask;
      el.mask = mask.$el;
    }
  });
};
