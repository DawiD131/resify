import axios, { type AxiosInstance } from 'axios';

export type HttpClient = AxiosInstance;

export const httpClient = axios.create({
  baseURL: import.meta.env.DEV ? 'http://localhost:3000/' : 'https://resifyapi.bieda.it/',
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': import.meta.env.DEV ? '*' : 'https://resifyapi.bieda.it/'
  },
  withCredentials: true
});
