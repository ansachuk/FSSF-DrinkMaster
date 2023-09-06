import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { refresh } from "../../redux/operations/authOperations";
import {
	selectAccessToken,
	selectAuthIsLoading,
	selectIsLoggedIn,
	selectState,
} from "../../redux/selectors/authSelectors";
import { selectRecipeIsLoading } from "../../redux/selectors/recipieSelectors";

import Layout from "../Layout/Layout";
import Loader from "../Loader/Loader";

import PublicRoute from "../PublicRoute/PublicRoute";
import PrivatRoute from "../PrivatRoute/PrivatRoute";
import { handleLogout } from "../../redux/slices/authSlice";

const WelcomePage = lazy(() => import("../../pages/WelcomePage/WelcomePage"));
const SigninForm = lazy(() => import("../Auth/SigninForm/SigninForm"));
const SignupForm = lazy(() => import("../Auth/SignupForm/SignupForm"));
const MainPage = lazy(() => import("../../pages/MainPage/MainPage"));
const DrinksPage = lazy(() => import("../../pages/DrinksPage/DrinksPage"));
const AddRecipePage = lazy(() => import("../../pages/AddRecipePage/AddRecipePage"));
const FavoritePage = lazy(() => import("../../pages/FavoritePage/FavoritePage"));
const RecipePage = lazy(() => import("../../pages/RecipePage/RecipePage"));
const MyRecipesPage = lazy(() => import("../../pages/MyRecipesPage/MyRecipesPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
const WelcomePageLayout = lazy(() => import("../../pages/WelcomePage/Layout/WelcomePageLayout"));

export default function App() {
	const isAuth = useSelector(selectIsLoggedIn);
	const token = useSelector(selectAccessToken);
	const isAuthLoad = useSelector(selectAuthIsLoading);
	const isRecipeLoad = useSelector(selectRecipeIsLoading);
	const state = useSelector(selectState);
	const dispatch = useDispatch();

	const isLoaderShown = isAuthLoad && isRecipeLoad;

	useEffect(() => {
		const parseJwt = token => {
			try {
				const parsedToken = JSON.parse(atob(token.split(".")[1]));
				if (parsedToken.exp * 1000 < Date.now()) {
					handleLogout(state);
				} else if (token && !isAuth) {
					dispatch(refresh(token));
				}
			} catch (e) {
				return null;
			}
		};
		parseJwt(token);
	}, [token, dispatch, isAuth, state]);

	return (
		<Suspense fallback={<Loader />}>
			{isLoaderShown && <Loader />}
			<Routes>
				<Route
					path="/welcome"
					element={
						<PublicRoute>
							<WelcomePageLayout />
						</PublicRoute>
					}
				>
					<Route
						index
						element={<WelcomePage />}
					/>
					<Route
						path="signin"
						element={<SigninForm />}
					/>
					<Route
						path="signup"
						element={<SignupForm />}
					/>
				</Route>
				<Route
					path="/"
					element={
						<PrivatRoute>
							<Layout />
						</PrivatRoute>
					}
				>
					<Route
						index
						element={<MainPage />}
					/>
					<Route
						path="drinks"
						element={<DrinksPage />}
					/>
					<Route
						path="add"
						element={<AddRecipePage />}
					/>
					<Route
						path="favorite"
						element={<FavoritePage />}
					/>
					<Route
						path="recipe/:recipeId"
						element={<RecipePage />}
					/>
					<Route
						path="my"
						element={<MyRecipesPage />}
					/>
					<Route
						path="*"
						element={<NotFoundPage />}
					/>
				</Route>
			</Routes>
		</Suspense>
	);
}
