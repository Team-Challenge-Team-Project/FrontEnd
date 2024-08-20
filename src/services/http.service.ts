import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import configFile from '../config.json';

// Create an Axios instance with the base URL from the config file
const http: AxiosInstance = axios.create({
  baseURL: configFile.apiEndpoint,
});

// Interceptors if needed
// request interceptor
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

//response interceptor
http.interceptors.response.use(
  (response: AxiosResponse) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

// Define the httpService object with typed methods
const httpService = {
  get: <T, R = AxiosResponse<T>>(
    url: string,
    config?: InternalAxiosRequestConfig
  ): Promise<R> => http.get<T, R>(url, config),
  post: <T, R = AxiosResponse<T>>(
    url: string,
    data?: unknown,
    config?: InternalAxiosRequestConfig
  ): Promise<R> => http.post<T, R>(url, data, config),
  put: <T, R = AxiosResponse<T>>(
    url: string,
    data?: unknown,
    config?: InternalAxiosRequestConfig
  ): Promise<R> => http.put<T, R>(url, data, config),
  delete: <T, R = AxiosResponse<T>>(
    url: string,
    config?: InternalAxiosRequestConfig
  ): Promise<R> => http.delete<T, R>(url, config),
  patch: <T, R = AxiosResponse<T>>(
    url: string,
    data?: unknown,
    config?: InternalAxiosRequestConfig
  ): Promise<R> => http.patch<T, R>(url, data, config),
};

export default httpService;
