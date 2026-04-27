import axios from '../plugins/axios';

export const useApi = () => {
    const get = async (url, config = {}) => {
        try {
            const response = await axios.get(url, config);
            return { success: true, data: response.data };
        } catch (error) {
            return { 
                success: false, 
                error: error.response?.data?.message || 'Request failed',
                status: error.response?.status 
            };
        }
    };

    const post = async (url, data, config = {}) => {
        try {
            const response = await axios.post(url, data, config);
            return { success: true, data: response.data };
        } catch (error) {
            return { 
                success: false, 
                error: error.response?.data?.message || 'Request failed',
                status: error.response?.status 
            };
        }
    };

    const put = async (url, data, config = {}) => {
        try {
            const response = await axios.put(url, data, config);
            return { success: true, data: response.data };
        } catch (error) {
            return { 
                success: false, 
                error: error.response?.data?.message || 'Request failed',
                status: error.response?.status 
            };
        }
    };

    const del = async (url, config = {}) => {
        try {
            const response = await axios.delete(url, config);
            return { success: true, data: response.data };
        } catch (error) {
            return { 
                success: false, 
                error: error.response?.data?.message || 'Request failed',
                status: error.response?.status 
            };
        }
    };

    return {
        get,
        post,
        put,
        delete: del,
    };
};
