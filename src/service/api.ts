import axios, { AxiosRequestConfig } from 'axios';

export const baseURL = process.env.BASE_URL;

export const api = axios.create({ baseURL });

api.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');

    if (token) {
      (config.headers ??= {})['x-access-token'] = token;
    }

    return config;
  },

  (error) => Promise.reject(error),
);
