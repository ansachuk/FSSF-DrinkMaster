import { createSlice } from "@reduxjs/toolkit";
import { login } from "../operations/authOperations";

const initialState = {};

const handlePanding = () => {};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		[login.pending]: handlePanding,
	},
});

// Генератори екшенів приклад
// const { addTask, deleteTask, toggleCompleted } = authSlice.actions;

export default authSlice.reducer;
