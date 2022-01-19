import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosConfig.defaults.withCredentials = true;
axiosConfig.defaults.headers["Content-Type"] = "application/json";

export default axiosConfig;