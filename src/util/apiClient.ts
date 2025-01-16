import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'x-api-key': import.meta.env.VITE_APP_API_KEY,
  },
});

// Add a request interceptor
apiClient.interceptors.request.use((config) => {
  let token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => {
    const { data } = response;

    if (data.error) {
      throw new Error(data.error);
    }

    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    return Promise.reject(error);
  },
);

export default apiClient;
