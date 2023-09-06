import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSearchResults } from "../../../redux/selectors/recipieSelectors";

import css from "./DrinksList.module.scss";
import DrinkCard from "../../MainPage/DrinkCard/DrinkCard";
// import Container from "../../../components/Container/Container";

const DrinksList = () => {
	const searchResults = useSelector(selectSearchResults);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		// <Container>
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
		</section>
		// </Container>
	);
};

export default DrinksList;
