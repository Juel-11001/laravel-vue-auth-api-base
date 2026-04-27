export const authRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../../views/Auth/LoginView.vue'),
        meta: { guest: true, layout: 'AuthLayout' }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../../views/Auth/RegisterView.vue'),
        meta: { guest: true, layout: 'AuthLayout' }
    },
];
