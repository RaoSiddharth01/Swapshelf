import axios from "axios";

const API = axios.create({
  baseURL: "https://swapshelf-backend.onrender.com/api",
});

export default API;