import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainTitle from "../../components/MainTitle/MainTitle";
import MyRecipeList from "../../pages/MyRecipesPage/MyRecipeList/MyRecipeList";
import { own } from "../../redux/operations/recipiesOperations.js";
import css from "./MyRecipesPage.module.scss";

export default function MyRecipesPage() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(own());
	}, [dispatch]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className={css.section}>
				<MainTitle title="My recipes">
					<MyRecipeList />
				</MainTitle>
			</div>
		</>
	);
}
