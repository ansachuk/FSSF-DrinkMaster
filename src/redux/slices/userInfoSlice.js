import { createSlice } from "@reduxjs/toolkit";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { updateUserThunk, getCurrentUserThunk } from "../operations/userOperations";

const initialState = {
	user: { name: "", email: "", avatarURL: "" },
	theme: "dark",
};

const startLoading = (state) => {
  state.loading = true;
  Loading.hourglass("We are verifying your data...");
};

const finishLoading = (state) => {
  state.loading = false;
  Loading.remove();
};

const userInfoSlice = createSlice({
	name: "userInfo",
	initialState,
	reducers: {
		clearState: state => {
			state.user = { name: "", email: "", avatarURL: "" };
			state.theme = "dark";
		},
	},

	extraReducers: {
		[updateUserThunk.pending]: startLoading,

		[updateUserThunk.fulfilled]: (state, { payload }) => {
			state.user = payload;
			finishLoading(state);
		},

		[updateUserThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			finishLoading(state);
		},

		[getCurrentUserThunk.pending]: startLoading,

		[getCurrentUserThunk.fulfilled]: (state, { payload }) => {
			state.user = {
				name: payload.name,
				email: payload.email,
				avatarURL: payload.avatarURL,
				id: payload._id,
			};
			finishLoading(state);
		},

		[getCurrentUserThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			finishLoading(state);
		},
	},
});

export const userInfoReducer = userInfoSlice.reducer;
export const { clearState } = userInfoSlice.actions;
