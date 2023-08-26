import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:5173/',
    headers: {
        'Content-Type': 'application/json',
    },
});
