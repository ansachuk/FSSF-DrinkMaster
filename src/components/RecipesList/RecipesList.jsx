import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/selectors/recipieSelectors";
import RecipesItem from "../../components/RecipesItem/RecipesItem";
import DrinkDefault from "../../images/static/main/main.jpg";
import css from "./RecipesList.module.scss";

export default function RecipesList() {
	const favorite = useSelector(selectFavorite);
	return (
		<div className={css.section}>
			{Array.isArray(favorite) && favorite.length !== 0 ? (
				<div className={css.recipesList}>
					{favorite.map(favoriteItem => (
						<RecipesItem
							key={favoriteItem._id}
							page={"favorite"}
							{...favoriteItem}
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
