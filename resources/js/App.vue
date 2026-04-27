<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AuthLayout from './layouts/AuthLayout.vue';
import DashboardLayout from './layouts/DashboardLayout.vue';

const route = useRoute();

const layout = computed(() => {
    const layoutName = route.meta.layout || 'AuthLayout';
    const layouts = {
        AuthLayout,
        DashboardLayout,
    };
    return layouts[layoutName] || AuthLayout;
});
</script>

<template>
    <component :is="layout">
        <router-view></router-view>
    </component>
</template>
