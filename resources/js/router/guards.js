import { useAuthStore } from '../stores/auth';

export const authGuard = (to, from, next) => {
    const authStore = useAuthStore();
    
    if (authStore.token && !authStore.user) {
        authStore.fetchUser();
    }

    if (to.meta.auth && !authStore.isAuthenticated) {
        next('/login');
    } else if (to.meta.guest && authStore.isAuthenticated) {
        next('/dashboard');
    } else {
        next();
    }
};
