import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Styles
import './assets/css/main.postcss';

// Plugins
import './plugins/vTooltip';
import './plugins/vueAxe';

// Global components
import SvgIcon from '@/components/SvgIcon';
Vue.component('svg-icon', SvgIcon);
// Svg sprite support for IE11
import 'svgxuse';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
