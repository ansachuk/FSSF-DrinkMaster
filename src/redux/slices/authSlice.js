import { createSlice } from "@reduxjs/toolkit";
import { login, signup, logout, refresh } from "../operations/authOperations";
import { handlePending, handleRejected, handleFullfilled } from "../utils";

const initialState = {
	user: {
		name: null,
		email: null,
		id: null,
		avatarURL: null,
		subscribe: false,
	},
	accessToken: null,
	isLoggedIn: false,
	isLoading: false,
	error: null,
};

const handleSignUp = (state, { payload }) => {
	state.user = payload;
	handleFullfilled(state);
};

const handleLogin = (state, { payload: { token, user } }) => {
	state.accessToken = token;
	state.user = user;
	state.isLoggedIn = true;

	handleFullfilled(state);
};

const handleRefresh = (state, { payload }) => {
	state.user = payload;
	state.isLoggedIn = true;

	handleFullfilled(state);
};

const handleLogout = state => {
	state.isLoggedIn = false;
	state.accessToken = null;
	state.user = { name: null, email: null, id: null, avatarURL: null };

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

			.addMatcher(action => action.type.endsWith("/pending"), handlePending)

			.addMatcher(action => action.type.endsWith("/rejected"), handleRejected);
	},
});

export default authSlice.reducer;
