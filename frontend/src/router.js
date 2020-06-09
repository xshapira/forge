import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import LoadingView from './views/LoadingView.vue';
import Welcome from './views/Welcome.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/loading',
      name: 'loading',
      component: LoadingView,
    },
  ],
});
