import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Styles
import './assets/css/main.postcss';

// Plugins
import './plugins/vTooltip';
import './plugins/vueAxe';
import Vuelidate from 'vuelidate';

// Svg sprite support for IE11
import 'svgxuse';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
