// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER, PURGE } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { authReducer } from "./slices/authSlice";
// import { drinksReducer } from "./slices/drinksSlice";
// import { userInfoReducer } from "./slices/userInfoSlice";

// const reducer = combineReducers([authReducer, drinksReducer, userInfoReducer]);

// const persistConfig = {
// 	key: "data",
// 	storage,
// 	whitelist: ["accessToken", "theme", "drinks", "ingredients", "categories", "glasses"],
// };

// export const store = configureStore({
// 	reducer: persistReducer(persistConfig, reducer),

// 	middleware: getDefaultMiddleware =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 			},
// 		}),
// });
// export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import contactsReducer from "./slices/contactsSlice";
// import filterReducer from "./slices/filterSlice";
import authReducer from "./slices/authSlice";

const persistConfig = {
	key: "token",
	storage,
	whitelist: ["accessToken"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
	reducer: {
		// filter: filterReducer,
		// contacts: contactsReducer,
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
