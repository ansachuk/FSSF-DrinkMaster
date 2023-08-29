// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectPage } from "../../redux/selectors/recipieSelectors.js";
// import MainTitle from "../../components/MainTitle/MainTitle";
// import RecipesList from "../../components/RecipesList/RecipesList";
// // import Paginator from "../../components/Paginator/Paginator";
// import { favorite } from "../../redux/operations/recipiesOperations.js";
// import css from "./FavoritePage.module.scss";

// const desktopLimit = 9;
// const tabletLimit = 8;

// export default function FavoritePage() {
// 	const dispatch = useDispatch();
// 	const page = useSelector(selectPage);
// 	const isDesktop = window.innerWidth >= 1440;
// 	const limit = isDesktop ? desktopLimit : tabletLimit;

// 	useEffect(() => {
// 		dispatch(favorite({ page, limit }));
// 	}, [page, limit, dispatch]);

// 	useEffect(() => {
// 		window.scrollTo(0, 0);
// 	}, []);

// 	return (
// 		<>
// 			<div className={css.section}>
// 				<MainTitle title="Favorites">
// 					<RecipesList />
// 					{/* <Paginator /> */}
// 				</MainTitle>
// 			</div>
// 		</>
// 	);
// }

import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { selectPage } from "../../redux/selectors/recipieSelectors.js";
import MainTitle from "../../components/MainTitle/MainTitle";
import RecipesList from "../../components/RecipesList/RecipesList";
// import Paginator from "../../components/Paginator/Paginator";
import { favorite } from "../../redux/operations/recipiesOperations.js";
import css from "./FavoritePage.module.scss";

const desktopLimit = 9;
const tabletLimit = 8;
const defaultPage = 1;

export default function FavoritePage() {
	const dispatch = useDispatch();
	// const page = useSelector(selectPage);
	const isDesktop = window.innerWidth >= 1440;
	const limit = isDesktop ? desktopLimit : tabletLimit;

	useEffect(() => {
		dispatch(favorite({ page: defaultPage, limit }));
	}, [limit, dispatch]);

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
