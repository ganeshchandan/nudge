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
  // Handle 401 Unauthorized - redirect to login
  if (error.response?.status === 401) {
    localStorage.removeItem("authToken");
    // Redirect to login page if not already there
    if (window.location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }
  
  // Handle 403 Forbidden
  if (error.response?.status === 403) {
    console.error("Access forbidden:", error.response.data);
  }
  
  // Handle network errors
  if (!error.response) {
    console.error("Network error:", error.message);
  }
  
  return Promise.reject(error);
};
