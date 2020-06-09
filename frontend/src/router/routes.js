import Home from '@/views/Home.vue';
import LoadingView from '@/views/LoadingView.vue';
import Welcome from '@/views/Welcome.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/loading',
    name: 'loading',
    component: LoadingView,
  },
];
