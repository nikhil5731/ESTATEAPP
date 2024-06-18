import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://estateapp-zi75.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
