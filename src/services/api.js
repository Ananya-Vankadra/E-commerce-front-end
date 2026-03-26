import axios from "axios";

const API = axios.create({
  baseURL: "e-commerce-back-end-production-a05a.up.railway.app/api"
});

export default API;
