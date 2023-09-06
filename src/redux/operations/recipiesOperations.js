import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import instance from "../instance.js";

const allCategory = createAsyncThunk("recepies/allCategory", async (_, { rejectWithValue }) => {
	try {
		const { data } = await instance.get("recipes/category-list");
		return data;
	} catch (e) {
		return rejectWithValue(e.response.data.message);
	}
});

const mainPage = createAsyncThunk("recepies/mainPage", async (_, { rejectWithValue }) => {
	try {
		const { data } = await instance.get("recipes/main-page");

		return data;
	} catch (e) {
		return rejectWithValue(e.response.data.message);
	}
});

const byCategory = createAsyncThunk(
	"recepies/byCategory",
	async (category, { rejectWithValue }) => {
		try {
			const { data } = await instance.get(`recipes/category/${category}`);

			return data;
		} catch (e) {
			return rejectWithValue(e.response.data.message);
		}
	},
);

const byID = createAsyncThunk("recepies/byID", async (id, { rejectWithValue }) => {
	try {
		const { data } = await instance.get(`recipes/${id}`);

		return data;
	} catch (e) {
		return rejectWithValue(e.response.data.message);
	}
});

const search = createAsyncThunk(
	"recepies/search",
	async ({ category, ingredient, searchWord, page = 1, limit = 9 }, { rejectWithValue }) => {
		try {
			const searchWordStr = searchWord ? `&searchWord=${searchWord}` : "";
			const categoryStr = category ? `&category=${category}` : "";
			const ingredientStr = ingredient ? `&ingredient=${ingredient}` : "";

			const URL = `search?page=${page}&limit=${limit}${searchWordStr}${categoryStr}${ingredientStr}`;
			// console.log(URL);
			const { data } = await instance.get(URL);

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

const allIngredients = createAsyncThunk(
	"recepies/allIngredients",
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await instance.get(`ingredients/list`);

			return data;
		} catch (e) {
			return rejectWithValue(e.response.data.message);
		}
	},
);

const glasses = createAsyncThunk("recepies/glasses", async (_, { rejectWithValue }) => {
	try {
		const { data } = await instance.get("/glass");

		return data;
	} catch (e) {
		return rejectWithValue(e.response.data.message);
	}
});

const own = createAsyncThunk("recepies/own", async (_, { rejectWithValue }) => {
	try {
		const { data } = await instance.get(`own`);

		return data;
	} catch (e) {
		return rejectWithValue(e.response.data.message);
	}
});

const add = createAsyncThunk("recepies/add", async (cred, { rejectWithValue }) => {
	try {
		const { data } = await instance.post(`own`, cred, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});

		Notify.success("recipe created successfully", {
			timeout: 3000,
		});

		return data;
	} catch (e) {
		return rejectWithValue(e.response.data.message);
	}
});

const remove = createAsyncThunk("recepies/remove", async (id, { rejectWithValue }) => {
	try {
		const { data } = await instance.delete(`own/${id}`);

		return data;
	} catch (e) {
		return rejectWithValue(e.response.data.message);
	}
});

const favorite = createAsyncThunk("recepies/favorite", async (_, { rejectWithValue }) => {
	try {
		const { data } = await instance.get(`favorite`);

		return data;
	} catch (e) {
		return rejectWithValue(e.response.data.message);
	}
});

// const favorite = createAsyncThunk(
// 	"recepies/favorite",
// 	async ({ page, limit }, { rejectWithValue }) => {
// 		try {
// 			const { data } = await instance.get(`favorite?page=${page}&limit=${limit}`);
// 			return data;
// 		} catch (e) {
// 			return rejectWithValue(e.response.data.message);
// 		}
// 	},
// );

const addToFavorite = createAsyncThunk(
	"recepies/addToFavorite",
	async (id, { rejectWithValue }) => {
		try {
			const { data } = await instance.patch(`favorite/add/${id}`);
			//token

			return data;
		} catch (e) {
			return rejectWithValue(e.response.data.message);
		}
	},
);

const removeFromFavorite = createAsyncThunk(
	"recepies/removeFromFavorite",
	async (id, { rejectWithValue }) => {
		try {
			const { data } = await instance.patch(`favorite/remove/${id}`);

			return data;
		} catch (e) {
			return rejectWithValue(e.response.data.message);
		}
	},
);

const popular = createAsyncThunk("recepies/popular", async (_, { rejectWithValue }) => {
	try {
		const { data } = await instance.get(`popular-recipe`);

		return data;
	} catch (e) {
		return rejectWithValue(e.response.data.message);
	}
});

export {
	allCategory,
	glasses,
	mainPage,
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
};
