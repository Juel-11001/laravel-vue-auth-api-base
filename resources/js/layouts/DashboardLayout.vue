<script setup>
import AppHeader from '../components/layout/AppHeader.vue';
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <AppHeader />
        <main class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <slot />
        </main>
    </div>
</template>
