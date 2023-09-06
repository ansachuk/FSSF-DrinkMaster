import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchResults } from "../../redux/selectors/recipieSelectors";
import css from "./DrinksPage.module.scss";
import MainTitle from "../../components/MainTitle/MainTitle";
import DrinksSearch from "./DrinksSearch/DrinksSearch";
import DrinksList from "./DrinksList/DrinksList";
import { allIngredients } from "../../redux/operations/recipiesOperations";
import NotAdded from "/src/components/NotAdded/NotAdded";

const DrinksPage = () => {
	const searchList = useSelector(selectSearchResults);
	const [isRender, setIsRender] = useState(false);
	const [page] = useState(1);

	const dispatch = useDispatch();

	useEffect(() => {
		if (searchList.length !== 0) {
			setIsRender(true);
		} else {
			setIsRender(false);
		}
	}, [searchList]);

	useEffect(() => {
		dispatch(allIngredients());
	}, [dispatch]);

	return (
		<MainTitle title={"Drinks"}>
			<section className={css.section}>
				<DrinksSearch page={page} />
				{isRender ? (
					<DrinksList results={searchList} />
				) : (
					<NotAdded text={"We did not find any cocktails for this search"} />
				)}
			</section>
		</MainTitle>
	);
};

export default DrinksPage;

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectSearchResults } from "../../redux/selectors/recipieSelectors";
// import css from "./DrinksPage.module.scss";
// import MainTitle from "../../components/MainTitle/MainTitle";
// import DrinksSearch from "./DrinksSearch/DrinksSearch";
// import DrinksList from "./DrinksList/DrinksList";
// import { allIngredients } from "../../redux/operations/recipiesOperations";

// const DrinksPage = () => {
// 	const [setIsRender] = useState(false);
// 	const searchList = useSelector(selectSearchResults);
// 	const [page] = useState(1);

// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		if (searchList.length !== 0) {
// 			setIsRender(true);
// 		} else {
// 			setIsRender(false);
// 		}
// 	});

// 	useEffect(() => {
// 		dispatch(allIngredients());
// 	}, []);

// 	return (
// 		<MainTitle title={"Drinks"}>
// 			<section className={css.section}>
// 				<DrinksSearch page={page} />
// 				<DrinksList results={searchList} />
// 			</section>
// 		</MainTitle>
// 	);
// };

// export default DrinksPage;
