import axios from '../plugins/axios';

export const userApi = {
    getProfile() {
        return axios.get('/user/profile');
    },

    updateProfile(data) {
        return axios.put('/user/profile', data);
    },

    changePassword(data) {
        return axios.post('/user/change-password', data);
    },

    deleteAccount() {
        return axios.delete('/user/account');
    },
};

export default userApi;
