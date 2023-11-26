import axios from "axios"


const baseUrl = import.meta.env.VITE_API_BASE_URL

var headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

 const api = axios.create({
    baseUrl,
    headers: headers,
  timeout: 120000,
})

export default api;