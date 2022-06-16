import NotFound from './views/NotFound.vue';

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
    {
        path: '/',
        component: () => import('./views/Home.vue'),
        meta: { title: 'Home' }
    },
    {
        path: '/account',
        component: import('./views/Account/index.vue'),
        meta: {
            name: "我的账户",
            title: 'Account Profile'
        },
        // redirect: '/account/info/basic',
        children: [
            {
                path: 'register',
                component: () => import('./views/Account/Register/index.vue'),
                meta: {
                    name: "注册"
                }
            },
            {
                path: 'registered',
                component: () => import('./views/AccountRegistered.vue'),
            },
            {
                path: 'info',
                component: () => import('./views/Account/Info/index.vue'),
                meta: {
                    name: "我的资料"
                },
                redirect: '/account/info/basic',
                children: [
                    {
                        path: 'basic',
                        component: () => import('./views/Account/Info/Basic/index.vue')
                    },
                    {
                        path: 'seeAll',
                        component: () => import('./views/Account/Info/SeeAll/index.vue'),
                        meta: {
                            name: "查看所有会员功能權限及階級"
                        },
                        redirect: 'seedWheel',
                        children: [
                            {
                                path: 'seedWheel',
                                component: () => import('./views/Account/Info/SeeAll/SeedWheel/index.vue'),
                                meta: {
                                    name: "會員權限與獎勵(種子輪)",
                                    title: '種子輪'
                                }
                            },
                            {
                                path: 'privateWheel',
                                component: () => import('./views/Account/Info/SeeAll/PrivateWheel/index.vue'),
                                meta: {
                                    name: "會員權限與獎勵(私募轮)",
                                    title: '私募轮'
                                }
                            },
                            {
                                path: 'presaleWheel',
                                component: () => import('./views/Account/Info/SeeAll/PresaleWheel/index.vue'),
                                meta: {
                                    name: "會員權限與獎勵(預售輪)",
                                    title: '預售輪'
                                }
                            },
                            {
                                path: 'ordinary',
                                component: () => import('./views/Account/Info/SeeAll/Ordinary/index.vue'),
                                meta: {
                                    name: "會員權限與獎勵(普通)",
                                    title: '普通'
                                }
                            },
                        ]
                    },
                ]
            },

            {
                path: 'recommend',
                component: () => import('./views/Account/Recommend/index.vue'),
                meta: {
                    name: "推荐管理"
                }
            },
            {
                path: 'tasks',
                component: () => import('./views/Account/Task/index.vue'),
                meta: {
                    name: "我的任务"
                }
            },
            {
                path: 'assets',
                component: () => import('./views/Account/Asset/index.vue'),
                meta: {
                    name: "我的积分"
                }
            },
            {
                path: 'nft',
                component: () => import('./views/AccountNFT.vue'),
                meta: {
                    name: "我的NFT"
                }
            },
            {
                path: 'investment',
                component: () => import('./views/AccountInvestment.vue'),
                meta: {
                    name: "投资与权限"
                }
            },
            {
                path: 'promotion',
                component: () => import('./views/AccountPromotion.vue'),
            },

            {
                path: 'credit',
                component: () => import('./views/AccountCredit.vue'),
            }
        ],
    },
    {
        path: '/community', component: () => import('./views/Community.vue'),
        meta: { title: 'Community' }
    },
    {
        path: '/tutorial', component: () => import('./views/Tutorial.vue'),
        meta: { title: 'Tutorial' },
    },
    {
        path: '/media', component: () => import('./views/Media.vue'),
        meta: { title: 'Media' },
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
    { path: '/roadmap', component: () => import('./views/RoadMap.vue') },
    { path: '/gamephase', component: () => import('./views/GamePhase.vue') },
    { path: '/contactus', component: () => import('./views/ContactUs.vue') },
    {
        path: '/events', component: () => import('./views/Events.vue'),
        meta: { title: 'Events' },
        children: [
            {
                path: '',
                component: () => import('./views/EventsContent.vue'),
                meta: { title: 'Events Content' },

            },
            {
                path: 'details',
                component: () => import('./views/EventsDetails.vue'),
                meta: { title: 'Event Details' },
            },
        ],
    },
    { path: '/:path(.*)', component: NotFound },
];
