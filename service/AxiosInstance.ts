import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://booking-com15.p.rapidapi.com/api/v1/flights/', // Replace with your base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'x-rapidapi-key': '58c6c488e6msh1121d714a08c021p168a78jsn831cca57257c', // Replace with your actual RapidAPI key
    'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add Authorization token or other custom headers here if needed
    const token = localStorage.getItem('token'); // Example: JWT token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response, // Pass successful responses directly
  (error) => {
    // Handle errors globally (e.g., 401 Unauthorized)
    if (error.response?.status === 401) {
      console.error('Unauthorized! Redirecting to login.');
      // Redirect to login page or refresh token logic here
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
