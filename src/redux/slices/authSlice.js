// import { createSlice } from "@reduxjs/toolkit";
// import { login } from "../operations/authOperations";

// const initialState = {};

// const handlePanding = () => {};

// const authSlice = createSlice({
// 	name: "auth",
// 	initialState,
// 	reducers: {
// 		[login.pending]: handlePanding,
// 	},
// });

// // Генератори екшенів приклад
// // const { addTask, deleteTask, toggleCompleted } = authSlice.actions;

// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { registrationThunk, loginThunk, logoutThunk, refreshThunk, getCurrentUserThunk, verifyThunk } from "../operations/authOperations";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const initialState = {
	user: { name: "", email: "", id: "", avatarURL: "" },
	accessToken: null,
	online: false,
	loading: false,
	isCliccked: false,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		clearError: state => {
			state.error = null;
		},
		handleEyeClick: state => {
			state.isCliccked = !state.isCliccked;
			const input = document.querySelector("#password");
			input.type = input.type === "password" ? "text" : "password";
		},
	},
	extraReducers: {
		[registrationThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("We are verifying your data...");
		},

		[registrationThunk.fulfilled]: (state, { payload }) => {
			state.user = payload.user;
			state.loading = false;
			Loading.remove();
		},

		[registrationThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		[loginThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("Log In...");
		},

		[loginThunk.fulfilled]: (state, { payload }) => {
			state.user = payload.user;
			state.accessToken = payload.token;
			state.online = true;
			state.loading = false;
			state.error = null;
			Loading.remove();
		},

		[loginThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			Loading.remove();
		},

		[logoutThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("Log Our...");
		},

		[logoutThunk.fulfilled]: state => {
			state.user = { name: "", email: "", id: "", avatarURL: "" };
			state.accessToken = "";
			state.online = false;
			state.loading = false;
			state.error = null;
			Loading.remove();
		},

		[logoutThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		[refreshThunk.pending]: state => {
			state.loading = true;
			Loading.dots("User data is updated...");
		},

		[refreshThunk.fulfilled]: (state, { payload }) => {
			state.online = true;
			if (payload.token === null) state.online = false;
			state.loading = false;
			state.accessToken = payload.token;
			Loading.remove();
		},

		[refreshThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		[verifyThunk.pending]: state => {
			state.loading = true;
			Loading.dots("We are verifying your email address...");
		},

		[verifyThunk.fulfilled]: (state, { payload }) => {
			state.online = true;
			state.loading = false;
			state.accessToken = payload.token;
			Loading.remove();
		},

		[verifyThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},
		[getCurrentUserThunk.pending]: state => {
			state.loading = true;
			Loading.dots("We are verifying your email address...");
		},

		[getCurrentUserThunk.fulfilled]: (state, { payload }) => {
			state.online = true;
			state.loading = false;
			state.user.id = payload._id;
			Loading.remove();
		},

		[getCurrentUserThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},
	},
});

export const authReducer = authSlice.reducer;
export const { clearError, handleEyeClick } = authSlice.actions;
