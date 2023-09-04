import { useSelector } from "react-redux";
import { selectOwn } from "../../../redux/selectors/recipieSelectors";
import RecipesItem from "../../../components/RecipesItem/RecipesItem";
import Noadded from "../../../components/NotAdded/NotAdded";
import css from "./MyRecipeList.module.scss";

export default function RecipesList() {
	const own = useSelector(selectOwn);
	return (
		<div className={css.section}>
			{Array.isArray(own) && own.length !== 0 ? (
				<div className={css.ownList}>
					{own.map(ownItem => (
						<RecipesItem
							key={ownItem._id}
							page={"my"}
							{...ownItem}
						/>
					))}
				</div>
			) : (
				<Noadded text="You haven't added any own cocktails yet" />
			)}
		</div>
	);
}
