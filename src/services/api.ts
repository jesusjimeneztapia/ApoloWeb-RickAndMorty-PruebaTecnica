import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api";

export const api = axios.create({ baseURL: API_URL });
