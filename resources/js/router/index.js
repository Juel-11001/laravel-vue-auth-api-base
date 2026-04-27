import { createRouter, createWebHistory } from 'vue-router';
import { authRoutes } from './modules/auth.routes';
import { dashboardRoutes } from './modules/dashboard.routes';
import { authGuard } from './guards';

const routes = [
    ...authRoutes,
    ...dashboardRoutes,
    {
        path: '/',
        redirect: '/dashboard'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    authGuard(to, from, next);
});

export default router;
