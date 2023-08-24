import { useSelector } from "react-redux";
import { RecipesItem } from "components";
import { selectFavorite } from "redux/selectors";
import styles from "./RecipesList.module.scss";

export const RecipesList = () => {
	const favoriteCocktails = useSelector(selectFavorite);
	const isTablet = window.innerWidth >= 768;
	const notFoundImgSrc = isTablet ? "/src/assets/img/NotFound2x.jpg" : "/src/assets/img/NotFound1x.jpg";

	return (
		<div className={styles.section}>
			{Array.isArray(favoriteCocktails) && favoriteCocktails.length !== 0 ? (
				<div className={styles.recipesList}>
					{favoriteCocktails.map(favoriteCocktail => (
						<RecipesItem
							key={favoriteCocktail._id}
							page={"favorite"}
							cocktail={favoriteCocktail}
						/>
					))}
				</div>
			) : (
				<div className={styles.wrapDiv}>
					<img
						src={notFoundImgSrc}
						alt="Not Found"
					/>
					<p className={styles.notFavoriteText}>You haven't added any favorite cocktails yet</p>
				</div>
			)}
		</div>
	);
};
