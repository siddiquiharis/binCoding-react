import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
//   timeout: 10000,
  headers: {
    'Accept-Version': 1,
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export default axiosInstance;