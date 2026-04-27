export const validationRules = {
    required: (value) => {
        if (!value || value === '') {
            return 'This field is required';
        }
        return true;
    },

    email: (value) => {
        if (!value) return true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return 'Invalid email format';
        }
        return true;
    },

    min: (min) => (value) => {
        if (!value) return true;
        if (value.length < min) {
            return `Minimum ${min} characters required`;
        }
        return true;
    },

    max: (max) => (value) => {
        if (!value) return true;
        if (value.length > max) {
            return `Maximum ${max} characters allowed`;
        }
        return true;
    },

    match: (fieldName) => (value, allValues) => {
        if (!value) return true;
        if (value !== allValues[fieldName]) {
            return 'Fields do not match';
        }
        return true;
    },

    password: (value) => {
        if (!value) return true;
        if (value.length < 8) {
            return 'Password must be at least 8 characters';
        }
        if (!/[A-Z]/.test(value)) {
            return 'Password must contain at least one uppercase letter';
        }
        if (!/[a-z]/.test(value)) {
            return 'Password must contain at least one lowercase letter';
        }
        if (!/[0-9]/.test(value)) {
            return 'Password must contain at least one number';
        }
        return true;
    },
};

export const validateForm = (data, rules) => {
    const errors = {};
    let isValid = true;

    Object.keys(rules).forEach(field => {
        const value = data[field];
        const fieldRules = rules[field];

        for (const rule of fieldRules) {
            const result = rule(value, data);
            if (result !== true) {
                errors[field] = result;
                isValid = false;
                break;
            }
        }
    });

    return { isValid, errors };
};
