import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;

// Create a new instance of the axios library with a base URL of '/api/v1'
const API = axios.create({ baseURL });

// Add a response interceptor that handles errors
API.interceptors.response.use(
    response => response,
    error => {
        if (!error.response) {
            console.error('Network error: Please check your internet connection.');
            return Promise.reject(new Error('Network error: Please check your internet connection.'));
        }

        const { status, data, statusText } = error.response;

        let message = data?.error || statusText || 'An error occurred';

        console.error(`${status} - ${message}`);

        return Promise.reject(error);
    }
);

// Set the authorization token in the headers
export const setAuthToken = (token) => {
    if (token) {
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete API.defaults.headers.common['Authorization'];
    }
};

export const authAPI = {
    register: (userData) => API.post('/auth/register', userData),
    login: (email, password) => API.post('/auth/login', { email, password }),
    logout: () => API.get('/auth/logout'),
    getCurrentUser: () => API.get('/auth/current-user'),
};

// Shoe API endpoints
export const shoeAPI = {
    getAllStories: () => API.get('/stories'),
    getStory: (storyId) => API.get(`/stories/${storyId}`),
    // updateShoe: (shoe, shoeId) => API.put(`/shoes/${shoeId}`, shoe),
    addStory: (story) => API.post('/ai/addStory', story),
    deleteStory: (storyId) => API.delete(`/stories/${storyId}`),
};