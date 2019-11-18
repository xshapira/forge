import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Styles
import './assets/css/main.postcss';

// Plugins
import './plugins/vTooltip';
import './plugins/vueAxe';
import './plugins/vuePortal';

// Global components
import SvgIcon from '@/components/SvgIcon';
Vue.component('svg-icon', SvgIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
