import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchResults } from "../../redux/selectors/recipieSelectors";
import css from "./DrinksPage.module.scss";
import MainTitle from "../../components/MainTitle/MainTitle";
import DrinksSearch from "./DrinksSearch/DrinksSearch";
import DrinksList from "./DrinksList/DrinksList";
import { allIngredients } from "../../redux/operations/recipiesOperations";

const DrinksPage = () => {
	const [isRender, setIsRender] = useState(false);
	const searchList = useSelector(selectSearchResults);
	// const [page, setPage] = useState(1);

	const dispatch = useDispatch();

	useEffect(() => {
		if (searchList.length !== 0) {
			setIsRender(true);
		} else {
			setIsRender(false);
		}
	});

	useEffect(() => {
		dispatch(allIngredients());
	});

	return (
		<MainTitle title={"Drinks"}>
			<section className={css.section}>
				<DrinksSearch
				// page={page}
				/>
				{isRender && <DrinksList results={searchList} />}
			</section>
		</MainTitle>
	);
};

export default DrinksPage;
