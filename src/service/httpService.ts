import axios from "axios";
import { getCookie } from "@/service/cookieService";

const httpService = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 100000,
  headers: { Authorization: "Bearer " + getCookie("token") },
});

// Add a request interceptor
httpService.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    config.headers["Authorization"] = `Bearer ${getCookie("token")}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default httpService;
