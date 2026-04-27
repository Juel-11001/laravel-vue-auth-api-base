import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

export const useAuth = () => {
    const authStore = useAuthStore();
    const router = useRouter();

    const login = async (credentials) => {
        try {
            await authStore.login(credentials);
            router.push('/dashboard');
            return { success: true };
        } catch (error) {
            return { 
                success: false, 
                error: error.response?.data?.message || 'Login failed' 
            };
        }
    };

    const register = async (userData) => {
        try {
            await authStore.register(userData);
            router.push('/dashboard');
            return { success: true };
        } catch (error) {
            return { 
                success: false, 
                error: error.response?.data?.message || 'Registration failed' 
            };
        }
    };

    const logout = async () => {
        await authStore.logout();
        router.push('/login');
    };

    const checkAuth = async () => {
        await authStore.fetchUser();
        return authStore.isAuthenticated;
    };

    return {
        isAuthenticated: computed(() => authStore.isAuthenticated),
        user: computed(() => authStore.user),
        loading: computed(() => authStore.loading),
        error: computed(() => authStore.error),
        login,
        register,
        logout,
        checkAuth,
    };
};
