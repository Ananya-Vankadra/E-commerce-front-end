import axios from "axios";

const API = axios.create({
  baseURL: "https://e-commerce-back-end-production-a05a.up.railway.app"
});

export default API;
