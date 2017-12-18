import {addClass, removeClass} from 'main/utils/dom';

class Transition {
  beforeEnter(el) {
    // console.log(el.scrollHeight);
    if (!el.dataset) el.dataset = {};
    el.dataset.overflow = el.style.overflow;
    el.dataset.paddingTop = el.style.paddingTop;
    el.dataset.paddingBottom = el.style.paddingBottom;

    addClass(el, 'collapse-transition');
    el.style.height = '0';
    el.style.paddingTop = '0';
    el.style.paddingBottom = '0';
  }

  enter(el) {
    // console.log(el.scrollHeight);
    el.style.height = el.scrollHeight + 'px';
    el.style.paddingTop = el.dataset.paddingTop;
    el.style.paddingBottom = el.dataset.paddingBottom;
    el.style.overflow = 'hidden';
  }

  afterEnter(el) {
    // console.log(el.scrollHeight);
    removeClass(el, 'collapse-transition');
    el.style.height = '';
    el.style.overflow = el.dataset.overflow;
  }

  beforeLeave(el) {
    // console.log(el.scrollHeight);
    if (!el.dataset) el.dataset = {};
    el.dataset.overflow = el.style.overflow;
    el.dataset.paddingTop = el.style.paddingTop;
    el.dataset.paddingBottom = el.style.paddingBottom;

    el.style.overflow = 'hidden';
    el.style.height = el.scrollHeight + 'px';
  }

  leave(el) {
    // console.log(el.scrollHeight);
    addClass(el, 'collapse-transition');
    setTimeout(function() {
      el.style.height = '0';
    }, 40);
  }

  afterLeave(el) {
    // console.log(el.scrollHeight);
    removeClass(el, 'collapse-transition');
    el.style.height = '';
    el.style.overflow = el.dataset.overflow;
    el.style.paddingTop = el.dataset.paddingTop;
    el.style.paddingBottom = el.dataset.paddingBottom;
  }
}

export default {
  name: 'ElCollapseTransition',

  functional: true,

  render(createElement, context) {
    const data = {
      on: new Transition()
    };
    return createElement('transition', data, context.children);
  }
};
