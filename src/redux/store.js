// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./slices/authSlice";

// // import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
// // import storage from "redux-persist/lib/storage";

// // const persistConfig = {
// // 	key: "token",
// // 	storage,
// // 	whitelist: ["token"],
// // };

// // const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// const store = configureStore({
// 	reducer: { auth: authReducer },

// 	// middleware: getDefaultMiddleware =>
// 	// 	getDefaultMiddleware({
// 	// 		serializableCheck: {
// 	// 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 	// 		},
// 	// 	}),
// });

// // export const persistor = persistStore(store);
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./slices/authSlice";
import { drinksReducer } from "./slices/drinksSlice";
import { userInfoReducer } from "./slices/userInfoSlice";

const persistConfig = {
	key: "data",
	version: 1,
	storage,
	whitelist: ["accessToken", "userInfo", "user", "online"],
};

const persistConfigForUserInfo = {
	key: "theme",
	version: 2,
	storage,
	whitelist: ["theme", "user", "firstRender"],
};

const persistConfigForDrinks = {
	key: "drinks",
	version: 3,
	storage,
	whitelist: ["drinks", "ingredients", "categories", "glasses"],
};

export const store = configureStore({
	reduser: {
		auth: persistReducer(persistConfig, authReducer),
		drinks: persistReducer(persistConfigForDrinks, drinksReducer),
		userInfo: persistReducer(persistConfigForUserInfo, userInfoReducer),
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
