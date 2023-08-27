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

const setLoadingAndLoadingMessage = (state, message) => {
	state.loading = true;
	Loading.dots(message);
};

const handleLoadingResult = (state, { payload }) => {
	state.loading = false;
	state.error = payload;
	Loading.remove();
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
			setLoadingAndLoadingMessage(state, "We are verifying your data...");
		},

		[registrationThunk.fulfilled]: (state, { payload }) => {
			state.user = payload.user;
			setLoadingAndLoadingMessage(state, "");
		},

		[registrationThunk.rejected]: (state, { payload }) => {
			handleLoadingResult(state, payload);
		},

		[loginThunk.pending]: state => {
			setLoadingAndLoadingMessage(state, "Log In...");
		},

		[loginThunk.fulfilled]: (state, { payload }) => {
			state.user = payload.user;
			state.accessToken = payload.token;
			state.online = true;
			setLoadingAndLoadingMessage(state, "");
		},

		[loginThunk.rejected]: (state, { payload }) => {
			handleLoadingResult(state, payload);
		},

		[logoutThunk.pending]: state => {
			setLoadingAndLoadingMessage(state, "Log Out...");
		},

		[logoutThunk.fulfilled]: state => {
			state.user = { name: "", email: "", id: "", avatarURL: "" };
			state.accessToken = "";
			state.online = false;
			setLoadingAndLoadingMessage(state, "");
		},

		[logoutThunk.rejected]: (state, { payload }) => {
			handleLoadingResult(state, payload);
		},

		[refreshThunk.pending]: state => {
			setLoadingAndLoadingMessage(state, "User data is updated...");
		},

		[refreshThunk.fulfilled]: (state, { payload }) => {
			state.online = !!payload.token;
			state.accessToken = payload.token;
			setLoadingAndLoadingMessage(state, "");
		},

		[refreshThunk.rejected]: (state, { payload }) => {
			handleLoadingResult(state, payload);
		},

		[verifyThunk.pending]: state => {
			setLoadingAndLoadingMessage(state, "We are verifying your email address...");
		},

		[verifyThunk.fulfilled]: (state, { payload }) => {
			state.online = true;
			state.accessToken = payload.token;
			setLoadingAndLoadingMessage(state, "");
		},

		[verifyThunk.rejected]: (state, { payload }) => {
			handleLoadingResult(state, payload);
		},
		[getCurrentUserThunk.pending]: state => {
			setLoadingAndLoadingMessage(state, "We are verifying your email address...");
		},

		[getCurrentUserThunk.fulfilled]: (state, { payload }) => {
			state.online = true;
			state.user.id = payload._id;
			setLoadingAndLoadingMessage(state, "");
		},

		[getCurrentUserThunk.rejected]: (state, { payload }) => {
			handleLoadingResult(state, payload);
		},
	},
});

export const authReducer = authSlice.reducer;
export const { clearError, handleEyeClick } = authSlice.actions;
