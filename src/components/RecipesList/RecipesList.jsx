import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/selectors/recipieSelectors";
import RecipesItem from "../../components/RecipesItem/RecipesItem";
import Noadded from "../../components/NotAdded/NotAdded";
import css from "./RecipesList.module.scss";

export default function RecipesList() {
	const favorite = useSelector(selectFavorite);
	return (
		<div className={css.section}>
			{Array.isArray(favorite.result) && favorite.result.length !== 0 ? (
				<div className={css.recipesList}>
					{favorite.result.map(favoriteItem => (
						<RecipesItem
							key={favoriteItem._id}
							page={"favorite"}
							{...favoriteItem}
						/>
					))}
				</div>
			) : (
				<Noadded text="You haven't added any favorite cocktails yet" />
			)}
		</div>
	);
}
