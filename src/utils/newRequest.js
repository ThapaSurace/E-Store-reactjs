import axios from "axios";

const BASE_URL = "http://localhost:4000/api/"

export const newRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})