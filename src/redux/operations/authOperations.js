import { createAsyncThunk } from "@reduxjs/toolkit";
import instance, { setAuthJWTHeader, clearAuthJWTHeader } from "../instance.js";

const signup = createAsyncThunk("auth/register", async (creds, { rejectWithValue }) => {
	try {
		const { data } = await instance.post("auth/register", creds);
		setAuthJWTHeader(data.token);
		return data;
	} catch (e) {
		rejectWithValue(e.message);
	}
});

const login = createAsyncThunk("auth/login", async (creds, { rejectWithValue }) => {
	try {
		const { data } = await instance.post("auth/login", creds);
		setAuthJWTHeader(data.token);
		return data;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});

const update = createAsyncThunk("auth/update", async (creds, { rejectWithValue }) => {
	try {
		const { data } = await instance.patch("auth/update", creds);
		return data;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});

const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
	try {
		const { data } = await instance.post("auth/logout");
		clearAuthJWTHeader();
		return data;
	} catch (e) {
		rejectWithValue(e.message);
	}
});

const refresh = createAsyncThunk("auth/refresh", async (token, { rejectWithValue }) => {
	try {
		setAuthJWTHeader(token);
		const { data } = await instance.get("auth/current");
		return data;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});
const subscribe = createAsyncThunk("/subscribe", async (creds, { rejectWithValue }) => {
	try {
		const res = await instance.patch("user/subscribe", creds);
		return res.data;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});

export { login, signup, logout, refresh, update, subscribe };
