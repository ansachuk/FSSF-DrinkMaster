import React from "react";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/selectors/recipieSelectors";
import RecipesItem from "../../components/RecipesItem/RecipesItem";
import DrinkDefault from "../../images/static/main/main.jpg";
import css from "./RecipesList.module.scss";

export default function RecipesList() {
	const favoriteCocktails = useSelector(selectFavorite);
	return (
		<div className={css.section}>
			{Array.isArray(favoriteCocktails) && favoriteCocktails.length !== 0 ? (
				<div className={css.recipesList}>
					{favoriteCocktails.map(favoriteCocktail => (
						<RecipesItem
							key={favoriteCocktail._id}
							page={"favorite"}
							recipes={favoriteCocktails}
						/>
					))}
				</div>
			) : (
				<div className={css.wrapDiv}>
					<img
						className={css.notFoundImg}
						src={DrinkDefault}
						alt="No added recipes"
					/>
					<p className={css.notFavoriteText}>You haven&apos;t added any favorite cocktails yet</p>
				</div>
			)}
		</div>
	);
}
