// export default function DrinksPage() {
// 	return <div>DrinksPage</div>;
// }

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../DrinksPage/Pagination/Pagination";

// actions
export const setSelectedCategory = category => ({
	type: "SET_SELECTED_CATEGORY",
	payload: category,
});

export const fetchRecipesSuccess = recipes => ({
	type: "FETCH_RECIPES_SUCCESS",
	payload: recipes,
});

export const fetchRecipesFailure = error => ({
	type: "FETCH_RECIPES_FAILURE",
	payload: error,
});

export default function DrinksPage(props) {
	const dispatch = useDispatch();
	const { selectedCategory, recipes, error } = useSelector(state => state);

	useEffect(() => {
		const categoryFromUrl = props.match.params.category;
		if (categoryFromUrl) {
			dispatch(setSelectedCategory(categoryFromUrl));
		} else {
			dispatch(setSelectedCategory("Cocktail"));
		}

		// запрос на бекенд с использованием Axios
		axios
			.get(`/api/recipes?category=${selectedCategory}`)
			.then(response => {
				const data = response.data;
				// Обновляем список рецептов в состоянии (если такой экшен определен)
				dispatch(fetchRecipesSuccess(data));
			})
			.catch(error => {
				// Обрабатываем ошибку запроса (если такой экшен определен)
				dispatch(fetchRecipesFailure(error.message));
			});
	}, [dispatch, selectedCategory, props.match.params.category]);

	return (
		<div>
			<h2>{selectedCategory} Drinks</h2>
			{error ? (
				<p>Error: {error}</p>
			) : (
				<div>
					<ul>
						{recipes.map(recipe => (
							<li key={recipe._id}>
								<Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
							</li>
						))}
					</ul>
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
					/>{" "}
					{/* Вставляем компонент пагинации */}
				</div>
			)}
		</div>
	);
}
