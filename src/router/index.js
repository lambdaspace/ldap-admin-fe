import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Users from '@/components/Users';
import Groups from '@/components/Groups';
import OUnits from '@/components/OrganizationalUnits';
import Security from '@/components/Security';

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
    {
      path: '/groups',
      name: 'groups',
      component: Groups,
    },
    {
      path: '/ous',
      name: 'ounits',
      component: OUnits,
    },
    {
      path: '/sos',
      name: 'security',
      component: Security,
    },
  ],
});
