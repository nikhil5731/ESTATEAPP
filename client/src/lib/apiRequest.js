import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://estate-app-swn3.onrender.com/api",
    // withCredentials: true,
});

export default apiRequest;
