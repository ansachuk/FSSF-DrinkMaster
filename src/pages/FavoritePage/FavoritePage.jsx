// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectPage } from "redux/selectors";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import RecipesList from "../../components/RecipesList/RecipesList";
import Paginator from "../../components/Paginator/Paginator";
// import { getAllFavoriteDrinksThunk } from "redux/Cocktails/cocktailsOperations";
// import { useMediaRules } from "hooks";
// import styles from "FavoritePage.module.scss";

export default function FavoritePage() {
	// const dispatch = useDispatch();
	// const page = useSelector(selectPage);
	// const { isDesktop } = useMediaRules();
	// const limit = isDesktop ? 9 : 8;

	// useEffect(() => {
	// 	dispatch(getAllFavoriteDrinksThunk({ page, limit }));
	// }, [page, limit, dispatch]);

	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);
	return (
		// <div className={styles.pageWrapFavorite}>
		// 	<div className={styles.container}>
		<div>
			<div>
				<MainPageTitle title={"Favorites"} />
				<RecipesList />
				<Paginator />
			</div>
		</div>
	);
}
