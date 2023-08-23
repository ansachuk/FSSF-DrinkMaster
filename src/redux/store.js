import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
// 	key: "token",
// 	storage,
// 	whitelist: ["token"],
// };

// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
	reducer: { auth: authReducer },

	// middleware: getDefaultMiddleware =>
	// 	getDefaultMiddleware({
	// 		serializableCheck: {
	// 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	// 		},
	// 	}),
});

// export const persistor = persistStore(store);
export default store;
