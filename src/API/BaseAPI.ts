import axios from "axios";

export default axios.create({
  baseURL: `https://world-space-council.onrender.com`,
  // baseURL: `http://localhost:3000/`,
});