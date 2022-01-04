import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://3333-amaranth-lobster-v7mmb1vr.ws-eu25.gitpod.io/"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;