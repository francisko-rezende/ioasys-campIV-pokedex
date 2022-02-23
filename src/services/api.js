import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
