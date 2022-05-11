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
      {
        path: 'promotion',
        component: () => import('./views/AccountPromotion.vue'),
      },
      {
        path: 'tasks',
        component: () => import('./views/AccountTask.vue'),
      },
      {
        path: 'credit',
        component: () => import('./views/AccountCredit.vue'),
      },
      {
        path: 'assets',
        component: () => import('./views/AccountAsset.vue'),
      },
      {
        path: 'nft',
        component: () => import('./views/AccountNFT.vue'),
      },
      {
        path: 'investment',
        component: () => import('./views/AccountInvestment.vue'),
      },
    ],
  },
  {path: '/:path(.*)', component: NotFound},
];
