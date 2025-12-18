import type { AxiosResponse, AxiosError } from "axios";

/**
 * Axios response interceptor.
 * Used to transform or log successful responses globally.
 *
 * @param response - The Axios response object
 * @returns The response as-is (or modified if needed)
 */
export const axiosResponseInterceptors = (
  response: AxiosResponse
): AxiosResponse => {
  return response;
};

/**
 * Axios response error interceptor.
 * Handles global response errors such as authentication failures.
 *
 * @param error - The error thrown by Axios during response handling
 * @returns A rejected promise with the original error
 */
export const axiosResponseErrorInterceptors = (
  error: AxiosError
): Promise<never> => {
  return Promise.reject(error);
};
