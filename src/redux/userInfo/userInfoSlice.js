import { createSlice } from "@reduxjs/toolkit";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { updateUserThunk, getCurrentUserThunk } from "./userOperations";

const initialState = {
    user: { name: '', email: '', avatarURL: '' },
    theme: 'dark',
    firstRender: true,
};

const userInfoSlice = createSlice({
    name: '@@userInfo',
    initialState,
    reducers: {
        clearState: state => {
            state.user = { name: '', email: '', avatarURL: '' };
            state.theme = 'dark';
            state.firstRender = true;
        },
    },

    extraReducers: {

        [updateUserThunk.pending]: (state, { payload }) => {
            state.loading = true;
            Loading.hourglass("We are verifying your data...");
        },

        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.user = payload;
			state.loading = false;
			Loading.remove();
        },

        [updateUserThunk.rejected]: (state, { payload }) => {
            state.error = payload;
			state.loading = false;
			Loading.remove();
        },

         [getCurrentUserThunk.pending]: (state, { payload }) => {
            state.loading = true;
            Loading.hourglass("We are verifying your data...");
        },
         
         [getCurrentUserThunk.fulfilled]: (state, { payload }) => {
             state.user = {
                 name: payload.name,
                 email: payload.email,
                 avatarURL: payload.avatarURL,
                 id: payload._id,
             };
             state.firstRender = false;
             state.loading = false;
             Loading.remove();
        },
         
          [getCurrentUserThunk.rejected]: (state, { payload }) => {
            state.error = payload;
			state.loading = false;
			Loading.remove();
        },
         
},

});

export const userInfoReducer = userInfoSlice.reducer;
export const { clearState } = userInfoSlice.actions;