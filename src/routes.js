import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';
import Account from './views/Account.vue';

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {path: '/', component: Home, meta: {title: 'Home'}},
  {
    path: '/account', component: Account,
    meta: {title: 'Account Profile'},
    children: [
      {
        path: 'register',
        component: () => import('./views/AccountRegister.vue'),
      },
      {
        path: 'info',
        component: () => import('./views/AccountInfo.vue'),
      },
    ],
  },
  {path: '/:path(.*)', component: NotFound},
];
