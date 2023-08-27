// import React from "react";
// import { useSelector } from "react-redux";
// import { selectFavorite } from "../../redux/selectors";
// import RecipesItem from "../../components/RecipesItem/RecipesItem";
// import css from "./RecipesList.module.scss";
// import DrinkDefault from "../../images/static/main/main.jpg";

// export default function RecipesList() {
// 	const favoriteCocktails = useSelector(selectFavorite);
// 	return (
// 		<div className={css.section}>
// 			{Array.isArray(favoriteCocktails) && favoriteCocktails.length !== 0 ? (
// 				<div className={css.recipesList}>
// 					{favoriteCocktails.map(favoriteCocktail => (
// 						<RecipesItem
// 							key={favoriteCocktail._id}
// 							page={"favorite"}
// 							drink={favoriteCocktails}
// 						/>
// 					))}
// 				</div>
// 			) : (
// 				<div className={css.wrapDiv}>
// 					<img
// 						className={css.notFoundImg}
// 						src={DrinkDefault}
// 						alt="No added cocktails"
// 					/>
// 					<p className={css.notFavoriteText}>You haven&apos;t added any favorite cocktails yet</p>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

import { useState } from "react";
import RecipesItem from "../../components/RecipesItem/RecipesItem";
import css from "./RecipesList.module.scss";
import DrinkDefault from "../../images/static/main/main.jpg";
import favoriteCocktails from "../../data/favoriteCocktails";

export default function RecipesList() {
	const [cocktails, setCocktails] = useState(favoriteCocktails);

	const handleDelete = id => {
		console.log("handleDelete called with id:", id);
		const updatedCocktails = cocktails.filter(cocktail => cocktail._id !== id);
		console.log("Updated cocktails:", updatedCocktails);
		setCocktails(updatedCocktails);
	};

	return (
		<div className={css.section}>
			{Array.isArray(cocktails) && cocktails.length !== 0 ? (
				<div className={css.recipesList}>
					{cocktails.map(favoriteCocktail => (
						<RecipesItem
							key={favoriteCocktail._id}
							drink={favoriteCocktail.drink}
							drinkThumb={favoriteCocktail.drinkThumb}
							about={favoriteCocktail.about}
							onDeleteClick={() => handleDelete(favoriteCocktail._id, "favorite")}
						/>
					))}
				</div>
			) : (
				<div className={css.wrapDiv}>
					<img
						className={css.notFoundImg}
						src={DrinkDefault}
						alt="No added cocktails"
					/>
					<p className={css.notFavoriteText}>You haven&apos;t added any favorite cocktails yet</p>
				</div>
			)}
		</div>
	);
}
