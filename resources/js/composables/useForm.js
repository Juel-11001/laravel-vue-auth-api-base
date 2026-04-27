import { ref, computed } from 'vue';

export const useForm = (initialValues, validationRules = {}) => {
    const form = ref({ ...initialValues });
    const errors = ref({});
    const touched = ref({});

    const setField = (field, value) => {
        form.value[field] = value;
        touched.value[field] = true;
        validateField(field);
    };

    const validateField = (field) => {
        if (!validationRules[field]) return true;

        const rule = validationRules[field];
        const value = form.value[field];

        if (rule.required && (!value || value === '')) {
            errors.value[field] = rule.required || 'This field is required';
            return false;
        }

        if (rule.email && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errors.value[field] = rule.email || 'Invalid email format';
                return false;
            }
        }

        if (rule.min && value && value.length < rule.min) {
            errors.value[field] = `Minimum ${rule.min} characters required`;
            return false;
        }

        if (rule.max && value && value.length > rule.max) {
            errors.value[field] = `Maximum ${rule.max} characters allowed`;
            return false;
        }

        if (rule.match && value !== form.value[rule.match]) {
            errors.value[field] = 'Fields do not match';
            return false;
        }

        errors.value[field] = '';
        return true;
    };

    const validate = () => {
        let isValid = true;
        Object.keys(validationRules).forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        return isValid;
    };

    const reset = () => {
        form.value = { ...initialValues };
        errors.value = {};
        touched.value = {};
    };

    const hasErrors = computed(() => {
        return Object.values(errors.value).some(error => error !== '');
    });

    return {
        form,
        errors,
        touched,
        setField,
        validateField,
        validate,
        reset,
        hasErrors,
    };
};
