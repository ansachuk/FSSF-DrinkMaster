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

const startLoading = state => {
	state.loading = true;
	Loading.hourglass("We are verifying your data...");
};

const stopLoading = state => {
	state.loading = false;
	Loading.remove();
};

const handleError = (state, { payload }) => {
	state.error = payload;
	state.loading = false;
	Loading.remove();
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

		[getCategoriesListThunk.pending]: startLoading,

		[getCategoriesListThunk.fulfilled]: (state, { payload }) => {
			state.categories = payload;
			stopLoading(state);
		},

		[getCategoriesListThunk.rejected]: handleError,

		[getDrinksByCategoryThunk.pending]: startLoading,
		[getDrinksByCategoryThunk.fulfilled]: (state, { payload }) => {
			state.searchResults = payload.drinks;
			state.totalHits = payload.totalHits;
			stopLoading(state);
		},

		[getDrinksByCategoryThunk.rejected]: handleError,

		[getDrinksByIdThunk.pending]: startLoading,

		[getDrinksByIdThunk.fulfilled]: (state, { payload }) => {
			state.favorites = payload;
			state.backup = payload;
			stopLoading(state);
		},

		[getDrinksByIdThunk.rejected]: handleError,

		//----SEARCH-----

		[searchAllDrinksThunk.pending]: startLoading,

		[searchAllDrinksThunk.fulfilled]: (state, { payload }) => {
			state.searchResults = payload.cocktails;
			state.totalHits = payload.totalHits;
			stopLoading(state);
		},

		[searchAllDrinksThunk.rejected]: handleError,

		//----INGREDIENTS-----

		[getIngredientsListThunk.pending]: startLoading,

		[getIngredientsListThunk.fulfilled]: (state, { payload }) => {
			state.ingredients = payload;
			stopLoading(state);
		},

		[getIngredientsListThunk.rejected]: handleError,

		//----GLASSES-----

		[getAllGlassesThunk.pending]: startLoading,

		[getAllGlassesThunk.fulfilled]: (state, { payload }) => {
			state.glasses = payload;
			stopLoading(state);
		},

		[getAllGlassesThunk.rejected]: handleError,

		//----COKTAILS-----

		[getCoctailsByFourCategoryThunk.pending]: startLoading,

		[getCoctailsByFourCategoryThunk.fulfilled]: (state, { payload }) => {
			state.drinks = payload;
			stopLoading(state);
		},

		[getCoctailsByFourCategoryThunk.rejected]: handleError,

		//  ----- OWN DRINKS -------

		[addRecipeThunk.pending]: startLoading,

		[addRecipeThunk.fulfilled]: (state, { payload }) => {
			state.own = [payload, ...state.own];
			stopLoading(state);
		},

		[addRecipeThunk.rejected]: handleError,

		[getAllOwnDrinksThunk.pending]: startLoading,

		[getAllOwnDrinksThunk.fulfilled]: (state, { payload }) => {
			state.own = payload.drinks;
			state.totalHits = payload.totalHits;
			state.loading = false;
			stopLoading(state);
		},

		[getAllOwnDrinksThunk.rejected]: handleError,

		[removeRecipeThunk.pending]: startLoading,

		[removeRecipeThunk.fulfilled]: (state, { payload }) => {
			state.own = state.own.filter(el => el._id !== payload._id);
			state.totalHits = payload.totalHits;
			stopLoading(state);
		},

		[removeRecipeThunk.rejected]: handleError,

		// ------ FAVORITES ------

		[getAllFavoriteDrinksThunk.pending]: startLoading,

		[getAllFavoriteDrinksThunk.fulfilled]: (state, { payload }) => {
			state.favorites = payload.drinks;
			state.totalHits = payload.totalHits;
			stopLoading(state);
		},

		[getAllFavoriteDrinksThunk.rejected]: handleError,

		[addToFavoriteThunk.pending]: startLoading,

		[addToFavoriteThunk.fulfilled]: (state, { payload }) => {
			state.favirites = payload;
			stopLoading(state);
		},

		[addToFavoriteThunk.rejected]: handleError,

		[removeFromFavoriteThunk.pending]: startLoading,

		[removeFromFavoriteThunk.fulfilled]: (state, { payload }) => {
			if (Array.isArray(state.favorites)) {
				state.favorites = state.favorites.filter(el => el._id !== payload._id);
			} else {
				state.favorites = payload.drinks;
			}
			stopLoading(state);
		},

		[removeFromFavoriteThunk.rejected]: handleError,

		// ------ POPULAR ------

		[getPopularThunk.pending]: startLoading,

		[getPopularThunk.fulfilled]: (state, { payload }) => {
			state.popular = payload;
			stopLoading(state);
		},

		[getPopularThunk.rejected]: handleError,
	},
});

export const { setQuery, setChosenCategory, setChosenIngredient, setPage } = drinksSlice.actions;
export const drinksReducer = drinksSlice.reducer;
