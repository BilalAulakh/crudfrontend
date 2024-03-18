import API from "axios";

const requestHandler = {
  Headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Credentials": true,
  },
};

const axios = API.create({
  baseURL: process.env.BASE_URL,
  headers: requestHandler.Headers,
  // timeout: 1000,
});

axios.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

export default axios;
