import { configureStore } from "@reduxjs/toolkit";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./slices/authSlice";
import recepiesReducer from "./slices/recepiesSlice";

const persistAuthConfig = {
	key: "token",
	storage,
	whitelist: ["accessToken"],
};

const persistRecepiesConfig = {
	key: "drinksData",
	storage,
	whitelist: ["categories", "glasses"],
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedRecepiesReducer = persistReducer(persistRecepiesConfig, recepiesReducer);

const store = configureStore({
	reducer: {
		recepies: persistedRecepiesReducer,
		auth: persistedAuthReducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
export default store;
