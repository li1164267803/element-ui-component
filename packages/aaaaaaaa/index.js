import XiwenTooltip from './src/main';

/* istanbul ignore next */
XiwenTooltip.install = function(Vue) {
  Vue.component(XiwenTooltip.name, XiwenTooltip);
};

export default XiwenTooltip;
