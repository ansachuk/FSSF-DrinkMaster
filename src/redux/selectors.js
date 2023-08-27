export const selectAuthAccessToken = state => state.auth.accessToken;

export const selectUserLoading = state => state.auth.loading;

export const selectAllDrinks = state => state.drinks.drinks;

export const selectDrinkById = (state, recipeId) => state.drinks.drinks.filter(drink => drink._id.$oid === recipeId);

export const selectFavoriteDrinks = state => state.drinks.favorites;