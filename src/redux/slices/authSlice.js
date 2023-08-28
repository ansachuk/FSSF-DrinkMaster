import { createSlice } from "@reduxjs/toolkit";
import { login, signup, logout, refresh } from "../operations/authOperations";
import { handlePending, handleRejected, handleFullfilled } from "../utils";

const initialState = {
	user: { name: null, email: null, id: null, avatarURL: null },
	accessToken: null,
	isLoggedIn: false,
	isLoading: false,
	error: null,
};

const handleSignUp = (state, { payload }) => {
	console.log("state", state);
	console.log("payload", payload);
};

const handleLogin = (state, { payload: { accessToken, user } }) => {
	state.accessToken = accessToken;
	state.user = user;
	state.isLoggedIn = true;

	handleFullfilled(state);
};

const handleRefresh = (state, { payload }) => {
	handleFullfilled(state);
	state.user = payload;
	state.isLoggedIn = true;
};

const handleLogout = state => {
	state.isLoggedIn = false;
	state.accessToken = null;
	state.user = { name: null, email: null };

	handleFullfilled(state);
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(signup.fulfilled, handleSignUp)
			.addCase(login.fulfilled, handleLogin)
			.addCase(logout.fulfilled, handleLogout)
			.addCase(refresh.fulfilled, handleRefresh)

			.addMatcher(action => {
				action.type.endsWith("/pending");
			}, handlePending)

			.addMatcher(action => {
				action.type.endsWith("/rejected");
			}, handleRejected);
	},
});

export default authSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { registrationThunk, loginThunk, logoutThunk, refreshThunk, getCurrentUserThunk, verifyThunk } from "../operations/authOperations";

// const initialState = {
// 	user: { name: "", email: "", id: "", avatarURL: "" },
//
// 	loading: false,
// 	isCliccked: false,
// 	error: null,
// };

// const setLoadingAndLoadingMessage = (state, message) => {
// 	state.loading = true;
// 	Loading.dots(message);
// };

// const handleLoadingResult = (state, { payload }) => {
// 	state.loading = false;
// 	state.error = payload;
// 	Loading.remove();
// };

// const authSlice = createSlice({
// 	name: "auth",
// 	initialState,
// 	reducers: {
// 		clearError: state => {
// 			state.error = null;
// 		},
// 		handleEyeClick: state => {
// 			state.isCliccked = !state.isCliccked;
// 			const input = document.querySelector("#password");
// 			input.type = input.type === "password" ? "text" : "password";
// 		},
// 	},
// 	extraReducers: {
// 		[registrationThunk.pending]: state => {
// 			setLoadingAndLoadingMessage(state, "We are verifying your data...");
// 		},

// 		[registrationThunk.fulfilled]: (state, { payload }) => {
// 			state.user = payload.user;
// 			setLoadingAndLoadingMessage(state, "");
// 		},

// 		[registrationThunk.rejected]: (state, { payload }) => {
// 			handleLoadingResult(state, payload);
// 		},

// 		[loginThunk.pending]: state => {
// 			setLoadingAndLoadingMessage(state, "Log In...");
// 		},

// 		[loginThunk.fulfilled]: (state, { payload }) => {
// 			state.user = payload.user;
// 			state.accessToken = payload.token;
// 			setLoadingAndLoadingMessage(state, "");
// 		},

// 		[loginThunk.rejected]: (state, { payload }) => {
// 			handleLoadingResult(state, payload);
// 		},

// 		[logoutThunk.pending]: state => {
// 			setLoadingAndLoadingMessage(state, "Log Out...");
// 		},

// 		[logoutThunk.fulfilled]: state => {
// 			state.user = { name: "", email: "", id: "", avatarURL: "" };
// 			state.accessToken = "";
// 			setLoadingAndLoadingMessage(state, "");
// 		},

// 		[logoutThunk.rejected]: (state, { payload }) => {
// 			handleLoadingResult(state, payload);
// 		},

// 		[refreshThunk.pending]: state => {
// 			setLoadingAndLoadingMessage(state, "User data is updated...");
// 		},

// 		[refreshThunk.fulfilled]: (state, { payload }) => {
// 			state.accessToken = payload.token;
// 			setLoadingAndLoadingMessage(state, "");
// 		},

// 		[refreshThunk.rejected]: (state, { payload }) => {
// 			handleLoadingResult(state, payload);
// 		},

// 		[verifyThunk.pending]: state => {
// 			setLoadingAndLoadingMessage(state, "We are verifying your email address...");
// 		},

// 		[verifyThunk.fulfilled]: (state, { payload }) => {
// 			state.accessToken = payload.token;
// 			setLoadingAndLoadingMessage(state, "");
// 		},

// 		[verifyThunk.rejected]: (state, { payload }) => {
// 			handleLoadingResult(state, payload);
// 		},
// 		[getCurrentUserThunk.pending]: state => {
// 			setLoadingAndLoadingMessage(state, "We are verifying your email address...");
// 		},

// 		[getCurrentUserThunk.fulfilled]: (state, { payload }) => {
// 			state.user.id = payload._id;
// 			setLoadingAndLoadingMessage(state, "");
// 		},

// 		[getCurrentUserThunk.rejected]: (state, { payload }) => {
// 			handleLoadingResult(state, payload);
// 		},
// 	},
// });

// export default authSlice.reducer;
// export const { clearError, handleEyeClick } = authSlice.actions;
