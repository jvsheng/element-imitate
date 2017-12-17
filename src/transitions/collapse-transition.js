import {addClass, removeClass} from 'main/utils/dom';

class Transition {
  beforeEnter(el) {
    if (!el.dataset) el.dataset = {};
    el.dataset.overflow = el.style.overflow;

    addClass(el, 'collapse-transition');
    el.style.height = '0';
  }

  enter(el) {
    el.style.height = el.scrollHeight + 'px';
    el.style.overflow = 'hidden';
  }

  afterEnter(el) {
    removeClass(el, 'collapse-transition');
    el.style.height = '';
    el.style.overflow = el.dataset.overflow;
  }

  beforeLeave(el) {
    if (!el.dataset) el.dataset = {};
    el.dataset.overflow = el.style.overflow;

    addClass(el, 'collapse-transition');
    el.style.height = el.scrollHeight + 'px';
  }

  leave(el) {
    setTimeout(function() {
      el.style.height = '0';
      el.style.overflow = 'hidden';
    }, 20);
  }

  afterLeave(el) {
    removeClass(el, 'collapse-transition');
    el.style.height = '';
    el.style.overflow = el.dataset.overflow;
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
