import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://3333-blush-limpet-t484zr8k.ws-eu25.gitpod.io/"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;