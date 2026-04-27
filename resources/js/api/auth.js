import axios from '../plugins/axios';

export const authApi = {
    login(credentials) {
        return axios.post('/auth/login', credentials);
    },

    register(userData) {
        return axios.post('/auth/register', userData);
    },

    logout() {
        return axios.post('/auth/logout');
    },

    me() {
        return axios.get('/auth/me');
    },

    refresh() {
        return axios.post('/auth/refresh');
    },
};

export default authApi;
