<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';
import { LogOut, User } from 'lucide-vue-next';

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = async () => {
    await authStore.logout();
    router.push('/login');
};
</script>

<template>
    <nav class="bg-white border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold">M</span>
                    </div>
                    <span class="ml-2 text-xl font-bold text-gray-900">Dashboard</span>
                </div>

                <div class="flex items-center space-x-4">
                    <div class="flex items-center space-x-2">
                        <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <User class="w-4 h-4 text-gray-600" />
                        </div>
                        <span class="text-sm font-medium text-gray-700">{{ authStore.user?.name }}</span>
                    </div>

                    <button
                        @click="handleLogout"
                        class="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <LogOut class="w-4 h-4 mr-2" />
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
