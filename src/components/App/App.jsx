import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../Layout/Layout";
import PublicRoute from "../PublicRoute/PublicRoute";
import PrivatRoute from "../PrivatRoute/PrivatRoute";
import SigninForm from "../Auth/SigninForm/SigninForm";
import SignupForm from "../Auth/SignupForm/SignupForm";

import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import MainPage from "../../pages/MainPage/MainPage";
import DrinksPage from "../../pages/DrinksPage/DrinksPage";
import AddRecipePage from "../../pages/AddRecipePage/AddRecipePage";
import FavoritePage from "../../pages/FavoritePage/FavoritePage";
import RecipePage from "../../pages/RecipePage/RecipePage";
import MyRecipesPage from "../../pages/MyRecipesPage/MyRecipesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import WelcomePageLayout from "../../pages/WelcomePage/Layout/WelcomePageLayout";

import { refresh } from "../../redux/operations/authOperations";
import { selectAccessToken, selectIsLoggedIn } from "../../redux/selectors/authSelectors";

export default function App() {
	const isAuth = useSelector(selectIsLoggedIn);
	const token = useSelector(selectAccessToken);
	const dispatch = useDispatch();

	useEffect(() => {
		if (token && !isAuth) {
			dispatch(refresh(token));
		}
	}, [dispatch, isAuth, token]);
	return (
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
					path="drinks/:categoryName"
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
	);
}
