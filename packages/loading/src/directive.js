import Vue from 'vue';
import {addClass, hasClass, getStyle} from 'main/utils/dom';
import Loading from './loading';

const Mask = Vue.extend(Loading);

exports.install = Vue => {
  let toggleLoading = (el, binding) => {
    Vue.nextTick(() => {
      if (binding.modifiers.fullscreen) {
        el.originPosition = getStyle(document.body, 'position');
        el.originOverflow = getStyle(document.body, 'overflow');

        addClass(el.mask, 'is-fullscreen');
        insertDom(document.body, el, binding);
      } else if (binding.modifiers.body) {
        el.originPosition = getStyle(document.body, 'position');

        ['top', 'left'].forEach(property => {
          const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
          el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] + 'px';
        });

        ['width', 'height'].forEach(property => {
          el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
        });

        insertDom(document.body, el, binding);
      } else {
        insertDom(el, el, binding);
      }
    });
  };

  let insertDom = (parent, el, binding) => {
    Object.keys(el.maskStyle).forEach(property => {
      el.mask.style[property] = el.maskStyle[property];
    });
    if (el.originPosition !== 'absolute' || el.originPosition !== 'fixed') {
      addClass(parent, 'el-loading-parent--relative');
    }

    if (binding.modifiers.fullscreen && binding.modifiers.lock) {
      addClass(parent, 'el-loading-parent--hidden');
    }

    parent.appendChild(el.mask);
    el.instance.visible = true;
  };

  Vue.directive('loading', {
    bind(el, binding, vnode) {
      const mask = new Mask({
        el: document.createElement('div')
      });
      el.instance = mask;
      el.mask = mask.$el;
      el.maskStyle = {};

      toggleLoading(el, binding);
    }
  });
};
