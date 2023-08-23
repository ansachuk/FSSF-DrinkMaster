import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//?Приклад як має виглядати санка
const login = createAsyncThunk("auth/login", async (_, { rejectWithValue }) => {
	try {
		const { data } = await axios.post(`/login`);
		return data;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});

export { login };
