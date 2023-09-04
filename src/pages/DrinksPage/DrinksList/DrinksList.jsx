import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSearchResults } from "../../../redux/selectors/recipieSelectors";
// import { selectSearch } from "../../../redux/selectors/recipieSelectors";
import css from "./DrinksList.module.scss";
import DrinkCard from "../../MainPage/DrinkCard/DrinkCard";
// import NotAdded from "../../../components/NotAdded/NotAdded";
import { NotFound } from "../NotFound/NotFound";

const DrinksList = () => {
	const searchResults = useSelector(selectSearchResults);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className={css.section}>
			{Array.isArray(searchResults) && searchResults.length !== 0 && (
				<ul className={css.drinkList}>
					{searchResults?.map(cocktail => (
						<DrinkCard
							_id={cocktail._id}
							key={cocktail._id}
							image={cocktail.drinkThumb}
							title={cocktail.drink}
						/>
					))}
				</ul>
			)}

			{searchResults.length === 0 && (
				<NotFound message={"We did not find any cocktails for this search"} />
			)}
		</section>
	);
};

export default DrinksList;
