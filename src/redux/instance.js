import axios from "axios";

const baseUrl = "https://drink-master-fssf-backend.onrender.com/";

const instance = axios.create({
	baseURL: baseUrl + "api/",
	headers: {
		"Content-Type": "application/json",
	},
});

export const setAuthJWTHeader = token => {
	instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthJWTHeader = () => {
	instance.defaults.headers.common.Authorization = "";
};

export default instance;
