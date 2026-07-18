 
import axios from "axios";
import { tokenService } from "../services/tokenService";

 
const api = axios.create({
  baseURL: `${import.meta.env.VITE_DJANGO_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = tokenService.getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;