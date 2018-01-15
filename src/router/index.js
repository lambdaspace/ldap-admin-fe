import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Users from '@/components/Users';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
  ],
});
