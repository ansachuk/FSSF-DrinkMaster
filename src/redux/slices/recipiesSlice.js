import { createSlice } from "@reduxjs/toolkit";

import { handlePending, handleRejected, handleFullfilled } from "../utils";
import {
	allCategory,
	mainPage,
	glasses,
	byCategory,
	byID,
	search,
	allIngredients,
	add,
	own,
	remove,
	favorite,
	addToFavorite,
	removeFromFavorite,
	popular,
} from "../operations/recipiesOperations";

const initialState = {
	mainCocktails: [],
	byCategory: [],
	byID: [],
	favorite: [],
	own: [],
	popular: [],
	categories: [],
	glasses: [],
	ingredients: [],
	searchResults: [],
	isLoading: false,
	page: 1,
	totalHits: 0,
	error: null,
};

const recepiesSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {
		setPage: (state, { payload }) => {
			state.page = payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(allCategory.fulfilled, (state, { payload }) => {
				state.categories = payload;
				handleFullfilled(state);
			})
			.addCase(mainPage.fulfilled, (state, { payload }) => {
				state.mainCocktails = payload;
				handleFullfilled(state);
			})
			.addCase(glasses.fulfilled, (state, { payload }) => {
				state.glasses = payload;
				handleFullfilled(state);
			})
			.addCase(byCategory.fulfilled, (state, { payload }) => {
				state.byCategory = payload;
				handleFullfilled(state);
			})
			.addCase(byID.fulfilled, (state, { payload }) => {
				state.byID = payload;
				handleFullfilled(state);
			})
			.addCase(search.fulfilled, (state, { payload }) => {
				state.searchResults = payload;
				handleFullfilled(state);
			})
			.addCase(allIngredients.fulfilled, (state, { payload }) => {
				state.ingredients = payload;
				handleFullfilled(state);
			})
			.addCase(own.fulfilled, (state, { payload }) => {
				state.own = payload;
				handleFullfilled(state);
			})
			.addCase(add.fulfilled, (state, { payload }) => {
				state.own.push(payload);
				handleFullfilled(state);
			})
			.addCase(remove.fulfilled, (state, { payload }) => {
				state.own = state.own.filter(({ _id }) => _id !== payload._id);
				handleFullfilled(state);
			})
			.addCase(favorite.fulfilled, (state, { payload }) => {
				state.favorite = payload;
				handleFullfilled(state);
			})
			.addCase(addToFavorite.fulfilled, (state, { payload }) => {
				state.favorite.push(payload);
				handleFullfilled(state);
			})
			.addCase(removeFromFavorite.fulfilled, (state, { payload }) => {
				state.favorite = state.favorite.filter(({ _id }) => _id !== payload._id);
				handleFullfilled(state);
			})
			.addCase(popular.fulfilled, (state, { payload }) => {
				state.popular = payload;
				handleFullfilled(state);
			})

			.addMatcher(action => action.type.endsWith("/pending"), handlePending)

			.addMatcher(action => action.type.endsWith("/rejected"), handleRejected);
	},
});

export default recepiesSlice.reducer;
