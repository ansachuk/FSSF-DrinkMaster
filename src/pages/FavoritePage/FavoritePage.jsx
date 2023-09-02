import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainTitle from "../../components/MainTitle/MainTitle";
import RecipesList from "../../components/RecipesList/RecipesList";
import Paginator from "../../components/Paginator/Paginator";
import { favorite } from "../../redux/operations/recipiesOperations.js";
import { selectIsLoggedIn } from "../../redux/selectors/authSelectors";

import css from "./FavoritePage.module.scss";

export default function FavoritePage() {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(selectIsLoggedIn);
	useEffect(() => {
		dispatch(
			favorite({
				page: 1,
				limit: 9,
			}),
		);
	}, [dispatch]);

	useEffect(() => {
		async function fetchFavorite() {
			const res = await dispatch(favorite());
			return res;
		}
		function loadPage() {
			if (isLoggedIn) {
				fetchFavorite();
			}
		}
		loadPage();
	}, [dispatch, isLoggedIn]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className={css.section}>
				<MainTitle title="Favorites">
					<RecipesList />
					<Paginator />
				</MainTitle>
			</div>
		</>
	);
}
