import type { InternalAxiosRequestConfig, AxiosError } from "axios";

/**
 * Axios request interceptor.
 * Automatically attaches the `Authorization` header if a token is found in localStorage.
 *
 * @param config - Axios request configuration
 * @returns Updated request config
 */
export const axiosRequestInterceptors = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const token = localStorage.getItem("authToken");
  
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
};

/**
 * Handles errors that occur during the request configuration phase.
 *
 * @param error - Axios error or any thrown error
 * @returns Rejected promise with the error
 */
export const axiosRequestErrorInterceptors = (
  error: AxiosError
): Promise<never> => {
  return Promise.reject(error);
};
