import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../instance";
import Notiflix from "notiflix";

export const updateUserThunk = createAsyncThunk("@@userInfo/update", async data => {
	try {
		let res = null;
		if (data.get("avatarURL")) {
			res = await instance.patch("users/update", data, {
				headers: { "Content-Type": "multipart/form-data" },
			});
		} else {
			res = await instance.patch("users/update", data);
		}
		Notiflix.Notify.success("User information updated");
		return res.data;
	} catch (error) {
		const errorMessage = error.response.data.message;
		throw new Error("Respond from server is " + errorMessage);
	}
});

export const getCurrentUserThunk = createAsyncThunk("@@userInfo/current", async () => {
	try {
		const res = await instance.get("users/current");
		return res.data;
	} catch (error) {
		const errorMessage = error.response.data.message;
		throw new Error("Respond from server is " + errorMessage);
	}
});
