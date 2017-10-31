import ELCollapse from './src/collapse'

/* istanbul ignore next */
ELCollapse.install = function(Vue){
    Vue.component(ELCollapse.name, ELCollapse);
};

export default 'ELCollapse;'
