import { createAsyncThunk } from "@reduxjs/toolkit";
import instance, { setAuthJWTHeader, clearAuthJWTHeader } from "../instance.js";

const signup = createAsyncThunk("auth/signup", async (creds, { rejectWithValue }) => {
	try {
		// setAuthJWTHeader(data.token);
		const res = await instance.post("users/register", creds);
		// console.log(res);
		return res.data;
	} catch (e) {
		return rejectWithValue(e.response.data.message);
	}
});

const login = createAsyncThunk("auth/login", async (creds, { rejectWithValue }) => {
	try {
		const { data } = await instance.post("users/login", creds);
		setAuthJWTHeader(data.token);
		return data;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});

const update = createAsyncThunk("auth/update", async (creds, { rejectWithValue }) => {
	try {
		const { data } = await instance.patch("users/update", creds, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});

const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
	try {
		const { data } = await instance.post("users/logout");
		clearAuthJWTHeader();
		return data;
	} catch (e) {
		rejectWithValue(e.message);
	}
});

const refresh = createAsyncThunk(
	"auth/refresh",
	async (token, { rejectWithValue }) => {
		try {
			setAuthJWTHeader(token);
			const { data } = await instance.get("users/current");
			return data;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	},
	{
		condition: (_, { getState }) => {
			const { auth } = getState();
			if (!auth.accessToken) {
				return false;
			}
		},
	},
);

const subscribe = createAsyncThunk("auth/subscribe", async (creds, { rejectWithValue }) => {
	try {
		const res = await instance.patch("users/subscribe", creds);
		return res.data;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});

export { login, signup, logout, refresh, update, subscribe };
