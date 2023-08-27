import { createSlice } from "@reduxjs/toolkit";
import {
	getCategoriesListThunk,
	getDrinksByCategoryThunk,
	getDrinksByIdThunk,
	searchAllDrinksThunk,
	getIngredientsListThunk,
	getAllGlassesThunk,
	getCoctailsByFourCategoryThunk,
	addRecipeThunk,
	getAllOwnDrinksThunk,
	removeRecipeThunk,
	getAllFavoriteDrinksThunk,
	addToFavoriteThunk,
	removeFromFavoriteThunk,
	getPopularThunk,
} from "../operations/drinksOperations";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const initialState = {
	drinks: [],
	favorites: [],
	own: [],
	popular: [],
	categories: [],
	ingredients: [],
	glasses: [],
	searchResults: [],
	search: { query: "", chosenCategory: "", chosenIngredient: "" },
	totalHits: null,
	page: 1,
	loading: false,
};

const drinksSlice = createSlice({
	name: "drinks",
	initialState,
	reducers: {
		setQuery: (state, { payload }) => {
			state.search.query = payload;
		},
		setChosenCategory: (state, { payload }) => {
			state.search.chosenCategory = payload;
		},
		setChosenIngredient: (state, { payload }) => {
			state.search.chosenIngredient = payload;
		},
		setPage: (state, { payload }) => {
			state.page = payload;
		},
	},

	extraReducers: {
		// ----- DRINKS -----

		[getCategoriesListThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("We are verifying your data...");
		},

		[getCategoriesListThunk.fulfilled]: (state, { payload }) => {
			state.categories = payload;
			state.loading = false;
			Loading.remove();
		},

		[getCategoriesListThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		[getDrinksByCategoryThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("We are verifying your data...");
		},

		[getDrinksByCategoryThunk.fulfilled]: (state, { payload }) => {
			state.searchResults = payload.drinks;
			state.totalHits = payload.totalHits;
			state.loading = false;
			Loading.remove();
		},

		[getDrinksByCategoryThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		[getDrinksByIdThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("We are verifying your data...");
		},

		[getDrinksByIdThunk.fulfilled]: (state, { payload }) => {
			state.favorites = payload;
			state.backup = payload;
			state.loading = false;
			Loading.remove();
		},

		[getDrinksByIdThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		//----SEARCH-----

		[searchAllDrinksThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("We are verifying your data...");
		},

		[searchAllDrinksThunk.fulfilled]: (state, { payload }) => {
			state.searchResults = payload.cocktails;
			state.totalHits = payload.totalHits;
			state.loading = false;
			Loading.remove();
		},

		[searchAllDrinksThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		//----INGREDIENTS-----

		[getIngredientsListThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("We are verifying your data...");
		},

		[getIngredientsListThunk.fulfilled]: (state, { payload }) => {
			state.ingredients = payload;
			state.loading = false;
			Loading.remove();
		},

		[getIngredientsListThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		//----GLASSES-----

		[getAllGlassesThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("We are verifying your data...");
		},

		[getAllGlassesThunk.fulfilled]: (state, { payload }) => {
			state.glasses = payload;
			state.loading = false;
			Loading.remove();
		},

		[getAllGlassesThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		//----COKTAILS-----

		[getCoctailsByFourCategoryThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("We are verifying your data...");
		},

		[getCoctailsByFourCategoryThunk.fulfilled]: (state, { payload }) => {
			state.drinks = payload;
			state.loading = false;
			Loading.remove();
		},

		[getCoctailsByFourCategoryThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		//  ----- OWN DRINKS -------

		[addRecipeThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("We are verifying your data...");
		},

		[addRecipeThunk.fulfilled]: (state, { payload }) => {
			state.own = [payload, ...state.own];
			state.loading = false;
			Loading.remove();
		},

		[addRecipeThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		[getAllOwnDrinksThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("We are verifying your data...");
		},

		[getAllOwnDrinksThunk.fulfilled]: (state, { payload }) => {
			state.own = payload.drinks;
			state.totalHits = payload.totalHits;
			state.loading = false;
			Loading.remove();
		},

		[getAllOwnDrinksThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		[removeRecipeThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("We are verifying your data...");
		},

		[removeRecipeThunk.fulfilled]: (state, { payload }) => {
			state.own = state.own.filter(el => el._id !== payload._id);
			state.totalHits = payload.totalHits;
			state.loading = false;
			Loading.remove();
		},

		[removeRecipeThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		// ------ FAVORITES ------

		[getAllFavoriteDrinksThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("We are verifying your data...");
		},

		[getAllFavoriteDrinksThunk.fulfilled]: (state, { payload }) => {
			state.favorites = payload.drinks;
			state.totalHits = payload.totalHits;
			state.loading = false;
			Loading.remove();
		},

		[getAllFavoriteDrinksThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		[addToFavoriteThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("We are verifying your data...");
		},

		[addToFavoriteThunk.fulfilled]: (state, { payload }) => {
			state.favirites = payload;
			state.loading = false;
			Loading.remove();
		},

		[addToFavoriteThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		[removeFromFavoriteThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("We are verifying your data...");
		},

		[removeFromFavoriteThunk.fulfilled]: (state, { payload }) => {
			console.log(Array.isArray(state.favorites));
			if (Array.isArray(state.favorites)) {
				console.log(111);
				state.favorites = state.favorites.filter(el => {
					return el._id !== payload._id;
				});
			} else {
				state.favorites = payload.drinks;
			}
			state.loading = false;
			Loading.remove();
		},

		[removeFromFavoriteThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},

		// ------ POPULAR ------

		[getPopularThunk.pending]: state => {
			state.loading = true;
			Loading.hourglass("We are verifying your data...");
		},

		[getPopularThunk.fulfilled]: (state, { payload }) => {
			state.popular = payload;
			state.loading = false;
			Loading.remove();
		},

		[getPopularThunk.rejected]: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			Loading.remove();
		},
	},
});

export const { setQuery, setChosenCategory, setChosenIngredient, setPage } = drinksSlice.actions;
export const drinksReducer = drinksSlice.reducer;
