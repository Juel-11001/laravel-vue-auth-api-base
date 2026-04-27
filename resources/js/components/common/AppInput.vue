<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
    },
    placeholder: {
        type: String,
        default: '',
    },
    error: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:modelValue']);

const handleInput = (event) => {
    emit('update:modelValue', event.target.value);
};
</script>

<template>
    <div>
        <label v-if="label" :for="label" class="block text-xs font-medium text-gray-700 mb-1.5">
            {{ label }}
            <span v-if="required" class="text-red-500">*</span>
        </label>
        <input
            :id="label"
            :type="type"
            :value="modelValue"
            :placeholder="placeholder"
            :disabled="disabled"
            :required="required"
            :class="[
                'w-full px-3.5 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-gray-900 placeholder-gray-400 text-sm transition-colors',
                error ? 'border-red-300 focus:ring-red-500' : 'border-gray-200',
                disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-white'
            ]"
            @input="handleInput"
        >
        <p v-if="error" class="mt-1 text-xs text-red-600">{{ error }}</p>
    </div>
</template>
