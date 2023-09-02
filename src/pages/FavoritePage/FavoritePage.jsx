import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainTitle from "../../components/MainTitle/MainTitle";
import RecipesList from "../../components/RecipesList/RecipesList";
// import Paginator from "../../components/Paginator/Paginator";
import { favorite } from "../../redux/operations/recipiesOperations.js";
import css from "./FavoritePage.module.scss";

export default function FavoritePage() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			favorite({
				page: 1,
				limit: 9,
			}),
		);
	}, [dispatch]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className={css.section}>
				<MainTitle title="Favorites">
					<RecipesList />
					{/* <Paginator /> */}
				</MainTitle>
			</div>
		</>
	);
}
