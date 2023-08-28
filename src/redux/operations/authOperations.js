// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// //?Приклад як має виглядати санка
// const login = createAsyncThunk("auth/login", async (_, { rejectWithValue }) => {
// 	try {
// 		const { data } = await axios.post(`/login`);
// 		return data;
// 	} catch (e) {
// 		return rejectWithValue(e.message);
// 	}
// });

// export { login };

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../instance";
import { Notify, Report } from "notiflix";
import { selectAuthAccessToken } from "../selectors";

const token = "S3GcuPYg0QYZoEvVVOyvAuHZeIO7M6zb";

export const setToken = () => {
	instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearToken = () => {
	instance.defaults.headers.common["Authorization"] = ``;
};

setToken();

const handleError = error => {
	const errorMessage = error.response ? error.response.data.message : "Something went wrong.";
	Notify.failure("The server returned an error: " + errorMessage);

	if (!error.response) {
		setTimeout(() => {
			Report.warning(
				"Loading took more than seconds",
				'Loading seems stuck, or there was a server error. Please, check your data, and then try to "Log In" again.',
				"GOT IT",
				() => {
					window.location.reload();
				},
			);
		}, 5000);
	}
};

export const registrationThunk = createAsyncThunk("@auth/registration", async credentials => {
	try {
		const res = await instance.post("user/register", credentials);
		return res.data;
	} catch (error) {
		handleError(error);
		throw error;
	}
});

export const loginThunk = createAsyncThunk("@auth/login", async credentials => {
	try {
		const res = await instance.post("user/login", credentials);
		setToken(res.data.token);
		return res.data;
	} catch (error) {
		handleError(error);
		return error.response ? error.response.data.message : "Что-то пошло не так.";
	}
});

export const logoutThunk = createAsyncThunk("@auth/logout", async () => {
	try {
		const res = await instance.post("user/logout");
		localStorage.removeItem("user");
		localStorage.removeItem("accessToken");
		clearToken();
		return res;
	} catch (error) {
		handleError(error);
	}
});

export const refreshThunk = createAsyncThunk("@auth/refresh", async (_, thunkAPI) => {
	const refreshToken = selectAuthAccessToken(thunkAPI.getState());
	setToken(refreshToken);
	try {
		const res = await instance.post("users/refresh");
		return res.data;
	} catch (error) {
		handleError(error);
	}
});

export const getCurrentUserThunk = createAsyncThunk("@auth/current", async (_, { rejectWithValue }) => {
	try {
		const res = await instance.post("users/current");
		return res.data;
	} catch (error) {
		handleError(error);
		return rejectWithValue(error.response ? error.response.data.message : "Что-то пошло не так.");
	}
});

export const verifyThunk = createAsyncThunk("@auth/verify", async verificationToken => {
	try {
		const res = await instance.get(`/users/verify/${verificationToken}`);
		return res.data;
	} catch (error) {
		handleError(error);
		throw error;
	}
});

export const setSubscription = async credentials => {
	try {
		const res = await instance.patch("user/subscribe", credentials);
		return res.data;
	} catch (error) {
		handleError(error);
		throw error;
	}
};
