import axios from "axios";

export const api_proxy = axios.create({ baseURL: '/api/'});