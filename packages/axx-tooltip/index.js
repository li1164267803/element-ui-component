import AxxTooltip from './src/main';

/* istanbul ignore next */
AxxTooltip.install = function(Vue) {
  Vue.component(AxxTooltip.name, AxxTooltip);
};

export default AxxTooltip;
