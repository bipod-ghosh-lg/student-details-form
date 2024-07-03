import axios from "axios";

const base_url = import.meta.env.VITE_CUNTRY_STATE_CITY_BASE_URL;
const API_KEY = import.meta.env.VITE_CUNTRY_STATE_CITY_API_KEY;


export const instance = axios.create({
    
  baseURL: base_url,
  headers: {
    "X-CSCAPI-KEY": API_KEY,
  },
});
