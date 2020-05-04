import axios from "axios";

axios.defaults.baseURL = "https://sphaera.jakubvanko.com/api/";

/*
    Request interceptor for login token authorization
*/
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token !== null) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

export { default as userApi } from "./user";
export { default as eventApi } from "./event";
