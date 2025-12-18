import axios from "axios";
import {
  axiosRequestInterceptors,
  axiosRequestErrorInterceptors,
} from "@services/axios-interceptors/request";
import {
  axiosResponseInterceptors,
  axiosResponseErrorInterceptors,
} from "@services/axios-interceptors/response";

/**
 * Set the base URL for all Axios HTTP requests.
 */
// axios.defaults.baseURL = API_BASE_PATH;

/**
 * Attach global request interceptors.
 * Runs before each request is sent.
 */
axios.interceptors.request.use(
  axiosRequestInterceptors,
  axiosRequestErrorInterceptors
);

/**
 * Attach global response interceptors.
 * Runs after each response is received.
 */
axios.interceptors.response.use(
  axiosResponseInterceptors,
  axiosResponseErrorInterceptors
);

export default axios;
