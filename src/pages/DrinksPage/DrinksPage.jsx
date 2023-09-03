import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Paginator from "../../components/Paginator/Paginator";
import MainTitle from "../../components/MainTitle/MainTitle";
import DrinksSearch from "./DrinksSearch/DrinksSearch";
import DrinksList from "./DrinksList/DrinksList";

import { allIngredients, allCategory, search } from "../../redux/operations/recipiesOperations";

import {
	selectCategories,
	selectIngredients,
	selectSearchResults,
	// selectPage
} from "../../redux/selectors/recipieSelectors";

import css from "./DrinksPage.module.scss";

const DrinksPage = () => {
	const dispatch = useDispatch();
	const ingredientsList = useSelector(selectIngredients);
	const categoriesList = useSelector(selectCategories);
	const searchResults = useSelector(selectSearchResults);
	const [page, setPage] = useState(1);

	// const params = { category: '', search: '', ingredient: '' };

	useEffect(() => {
		if (categoriesList.length === 0) {
			dispatch(allCategory());
		}
		if (ingredientsList.length === 0) {
			dispatch(allIngredients());
		}
	}, [dispatch, categoriesList, ingredientsList]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<MainTitle title={"Drinks"}>
			<section className={css.section}>
				<DrinksSearch
					page={page}
					categoriesList={categoriesList}
					ingredientsList={ingredientsList}
				/>
				<DrinksList results={searchResults} />
			</section>
		</MainTitle>
	);
};

export default DrinksPage;

// // DrinkPage.jsx
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { useNavigate } from "react-router";
// // import Paginator from "../../components/Paginator/Paginator";
// import MainTitle from "../../components/MainTitle/MainTitle";
// import DrinksSearch from "./DrinksSearch/DrinksSearch";
// import DrinksList from "./DrinksList/DrinksList";
// import Container from "../../components/Container/Container";

// import { allIngredients, allCategory, search } from "../../redux/operations/recipiesOperations";

// import {
// 	selectCategories,
// 	selectIngredients,
// 	selectSearchResults,
// } from "../../redux/selectors/recipieSelectors";

// import css from "./DrinksPage.module.scss";

// const DrinksPage = () => {
// 	const dispatch = useDispatch();
// 	const ingredientsList = useSelector(selectIngredients);
// 	const categoriesList = useSelector(selectCategories);
// 	const searchResults = useSelector(selectSearchResults);

// 	const [selectedCategory, setSelectedCategory] = useState(null);
//     const [selectedIngredient, setSelectedIngredient] = useState(null);
//     const [searchText, setSearchText] = useState('');

// 	 const [page, setPage] = useState(1);

// 	// const params = { category: '', search: '', ingredient: '' };

// 	useEffect(() => {
// 		if (categoriesList.length === 0) {
// 			dispatch(allCategory());
// 		}
// 		if (ingredientsList.length === 0) {
// 			dispatch(allIngredients());
// 		}
// 	}, [dispatch, categoriesList, ingredientsList]);

// 	    const handleSearch = () => {
//         const params = {
//             category: selectedCategory?.value,
//             ingredient: selectedIngredient?.value,
//             searchText,
//             page,
//         };
//         dispatch(search(params));
//     };

// 	useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

// 	return (
// 		<Container>
// 			<section className={css.section}>
// 				<MainTitle title={"Drinks"} />
// 				<DrinksSearch
// 					// page={1}
// 					// categoriesList={categoriesList}
// 					// ingredientsList={ingredientsList}
// 					// onSearch={handleSearch}
// 					categoriesList={categoriesList}
//                     ingredientsList={ingredientsList}
//                     selectedCategory={selectedCategory}
//                     setSelectedCategory={setSelectedCategory}
//                     selectedIngredient={selectedIngredient}
//                     setSelectedIngredient={setSelectedIngredient}
//                     searchText={searchText}
//                     setSearchText={setSearchText}
//                     onSearch={handleSearch}
// 				/>
// 				<DrinksList results={searchResults} />
// 			</section>
// 		</Container>
// 	);
// };

// export default DrinksPage;

// з пагінацією

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { useNavigate } from "react-router";
// // import Paginator from "../../components/Paginator/Paginator";
// import MainTitle from "../../components/MainTitle/MainTitle";
// import DrinksSearch from "./DrinksSearch/DrinksSearch";
// import DrinksList from "./DrinksList/DrinksList";
// import Container from "../../components/Container/Container";

// import { allIngredients, allCategory, search } from "../../redux/operations/recipiesOperations";

// import {
// 	selectCategories,
// 	selectIngredients,
// 	selectSearchResults,
// 	// selectPage
// } from "../../redux/selectors/recipieSelectors";

// import css from "./DrinksPage.module.scss";

// const desktopLimit = 9;
// const tabletLimit = 8;

// const DrinksPage = () => {
// 	const dispatch = useDispatch();
// 	// const navigate = useNavigate();
// 	const ingredientsList = useSelector(selectIngredients);
// 	const categoriesList = useSelector(selectCategories);
// 	const searchResults = useSelector(selectSearchResults);
// 	// const page = useSelector(selectPage);
// 	const [page, setPage] = useState(1);

// 	const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1440;
// 	const limit = isDesktop ? desktopLimit : tabletLimit;

// 	useEffect(() => {
// 		if (categoriesList.length === 0) {
// 			dispatch(allCategory());
// 		}
// 		if (ingredientsList.length === 0) {
// 			dispatch(allIngredients());
// 		}
// 	}, [dispatch, categoriesList, ingredientsList]);

// 	const handleSearch = params => {
// 		dispatch(search({ ...params, page, limit }));
// 	};

// 	const nextPage = () => {
// 		setPage(page + 1);
// 	};

// 	const prevPage = () => {
// 		if (page > 1) {
// 			setPage(page - 1);
// 		}
// 	};

// 	// useEffect(() => {
// 	// 	window.scrollTo(0, 0);
// 	// }, []);

// 	useEffect(() => {
//     handleSearch();
//     window.scrollTo(0, 0);
//   }, [page, params]);

// 	return (
// 		<Container>
// 			<section className={css.section}>
// 				<MainTitle title={"Drinks"} />
// 				<DrinksSearch
// 					onSearch={handleSearch}
// 					categoriesList={categoriesList}
// 					ingredientsList={ingredientsList}
// 				/>
// 				<DrinksList results={searchResults} />
// 			</section>
// 		</Container>
// 	);
// };

// export default DrinksPage;

// export default function DrinksPage() {
// 	return <div>DrinksPage</div>;
// }

// Исходный

// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Pagination from "../DrinksPage/Pagination/Pagination";

// actions
// export const setSelectedCategory = category => ({
// 	type: "SET_SELECTED_CATEGORY",
// 	payload: category,
// });

// export const fetchRecipesSuccess = recipes => ({
// 	type: "FETCH_RECIPES_SUCCESS",
// 	payload: recipes,
// });

// export const fetchRecipesFailure = error => ({
// 	type: "FETCH_RECIPES_FAILURE",
// 	payload: error,
// });

// export default function DrinksPage(props) {
// 	const dispatch = useDispatch();
// 	const { selectedCategory, recipes, error } = useSelector(state => state);

// 	useEffect(() => {
// 		const categoryFromUrl = props.match.params.category;
// 		if (categoryFromUrl) {
// 			dispatch(setSelectedCategory(categoryFromUrl));
// 		} else {
// 			dispatch(setSelectedCategory("Cocktail"));
// 		}

// 		// запрос на бекенд с использованием Axios
// 		axios
// 			.get(`/api/recipes?category=${selectedCategory}`)
// 			.then(response => {
// 				const data = response.data;
// 				// Обновляем список рецептов в состоянии (если такой экшен определен)
// 				dispatch(fetchRecipesSuccess(data));
// 			})
// 			.catch(error => {
// 				// Обрабатываем ошибку запроса (если такой экшен определен)
// 				dispatch(fetchRecipesFailure(error.message));
// 			});
// 	}, [dispatch, selectedCategory, props.match.params.category]);

// 	return (
// 		<div>
// 			<h2>{selectedCategory} Drinks</h2>
// 			{error ? (
// 				<p>Error: {error}</p>
// 			) : (
// 				<div>
// 					<ul>
// 						{recipes.map(recipe => (
// 							<li key={recipe._id}>
// 								<Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
// 							</li>
// 						))}
// 					</ul>
// 					<Pagination
// 						currentPage={currentPage}
// 						totalPages={totalPages}
// 					/>{" "}
// 					{/* Вставляем компонент пагинации */}
// 				</div>
// 			)}
// 		</div>
// 	);
// }
