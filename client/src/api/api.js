import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
