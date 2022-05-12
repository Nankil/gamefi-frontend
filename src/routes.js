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
  {path: '/community', component: () => import('./views/Community.vue'),
    meta: {title: 'Community'}},
  {path: '/tutorial', component: () => import('./views/Tutorial.vue'),
    meta: {title: 'Tutorial'},
  },
  {path: '/media', component: () => import('./views/Media.vue'),
    meta: {title: 'Media'},
    children: [
      {
        path: 'photos',
        component: () => import('./views/MediaPhoto.vue'),
      },
      {
        path: 'videos',
        component: () => import('./views/MediaVideo.vue'),
      },
    ],
  },
  {path: '/roadmap', component: () => import('./views/RoadMap.vue')},
  {path: '/gamephase', component: () => import('./views/GamePhase.vue')},
  {path: '/contactus', component: () => import('./views/ContactUs.vue')},
  {path:'/events', component: () => import('./views/Events.vue')
    ,meta: {title: 'Events'},
    children: [
      {
        path: '',
        component: () => import('./views/EventsContent.vue'),
        meta: {title: 'Events Content'},

      },
      {
        path: 'details',
        component: () => import('./views/EventsDetails.vue'),
        meta: {title: 'Event Details'},
      }
    ]
  },
  {path: '/:path(.*)', component: NotFound},
];
