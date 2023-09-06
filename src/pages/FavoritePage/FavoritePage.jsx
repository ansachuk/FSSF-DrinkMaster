import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainTitle from "../../components/MainTitle/MainTitle";
import RecipesList from "../../components/RecipesList/RecipesList";
import { favorite } from "../../redux/operations/recipiesOperations.js";
import { selectIsLoggedIn } from "../../redux/selectors/authSelectors";

import css from "./FavoritePage.module.scss";
let page;
let limit;
export default function FavoritePage() {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(selectIsLoggedIn);

	useEffect(() => {
		if (isLoggedIn) {
			dispatch(
				favorite({
					page: 1,
					limit: 9,
				}),
			);
		}
	}, [dispatch, isLoggedIn]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className={css.section}>
				<MainTitle title="Favorites">
					<RecipesList
						page={page}
						limit={limit}
					/>
				</MainTitle>
			</div>
		</>
	);
}
