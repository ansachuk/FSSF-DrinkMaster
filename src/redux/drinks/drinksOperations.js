import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken } from "../operations/authOperations";
import { instance } from "../instance";
import { selectAuthAccessToken } from "../selectors";
import Notiflix from "notiflix";

const makeApiRequest = async (endpoint, params = {}, token) => {
    if (!token) {
        throw new Error("Token not available");
    }
    setToken(token);
    try {
        const res = await instance.get(endpoint, { params });
        return res.data;
    } catch (error) {
        throw new Error(error.response.status);
    }
};

// ------- DRINKS -------

export const getCategoriesListThunk = createAsyncThunk("@@drinks/categoriesList", async (_, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    try {
        return await makeApiRequest("recipes/category-list", {}, token);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const getDrinksByCategoryThunk = createAsyncThunk("@@drinks/byCategory", async (category, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    try {
        return await makeApiRequest(`recipes/${encodeURIComponent(category)}`, {}, token);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const getDrinksByIdThunk = createAsyncThunk("@@drinks/byId", async (id, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    try {
        return await makeApiRequest(`recipes/id/${id}`, {}, token);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// ----- SEARCH -----

export const searchAllDrinksThunk = createAsyncThunk('@@drinks/search', async ({ search, page, limit }, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    try {
        const params = {
            category: search.chosenCategory,
            ingredients: search.chosenIngredient,
            query: search.query,
            page,
            limit
        };
        return await makeApiRequest('search', params, token);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// ------ INGREDIENTS ------

export const getIngredientsListThunk = createAsyncThunk('@@drinks/ingredientsList', async (_, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    try {
        return await makeApiRequest("ingredients/list", {}, token);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// ------ GLASSES -------

export const getAllGlassesThunk = createAsyncThunk('@@drinks/glassesList', async (_, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    try {
        return await makeApiRequest("glass", {}, token);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// ----- COCKTAILS ------

export const getCoctailsByFourCategoryThunk = createAsyncThunk('@@drinks/category', async (_, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    try {
        return await makeApiRequest("recipes/main-page", {}, token);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

//  ----- OWN DRINKS -------

export const addRecipeThunk = createAsyncThunk('@@drinks/addRecipe', async (data, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    try {
        let res = null;
        if (data.get("drinkThumb")) {
            res = await instance.post("own", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
        } else {
            res = await instance.post("own", data);
        }
        Notiflix.Notify.success("Рецепт успешно добавлен в коллекцию");
        return res.data;
    } catch (error) {
        const errorMessage = error.response.data.message;
        Notiflix.Notify.failure("Сервер ответил: " + errorMessage);
        return rejectWithValue(error.message);
    }
});

export const getAllOwnDrinksThunk = createAsyncThunk('@@drinks/ownDrinks', async ({ page, limit }, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    try {
        const params = { page, limit };
        return await makeApiRequest("own", params, token);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const removeRecipeThunk = createAsyncThunk('@@drinks/removeRecipe', async (id, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    try {
        return await makeApiRequest(`own/${id}`, {}, token);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// ------ FAVORITES ------

export const getAllFavoriteDrinksThunk = createAsyncThunk('@@drinks/favorites', async ({ page, limit }, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    try {
        const params = { page, limit };
        return await makeApiRequest("favorite", params, token);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const addToFavoriteThunk = createAsyncThunk('@@drinks/favorite', async (id, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    try {
        return await makeApiRequest(`favorite/${id}`, {}, token);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const removeFromFavoriteThunk = createAsyncThunk('@@drinks/favorite', async (id, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    try {
        return await makeApiRequest(`favorite/${id}`, {}, token);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// ------ POPULAR ------

export const getPopularThunk = createAsyncThunk('@@drinks/popular', async (_, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    try {
        return await makeApiRequest("/popular-recipe/", {}, token);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
