import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setSelectedCategory, setSelectedIngredient, setIngredientsList } from "./actions";

import { drinksCategoriesList } from "../../../data/drinksData";

export default function DrinksSearch() {
	const dispatch = useDispatch();
	const { searchText, selectedCategory, selectedIngredient, ingredientsList } = useSelector(state => state);

	useEffect(() => {
		//  запрос к бэкенду для получения списка ингредиентов

		fetch("/api/ingredients")
			.then(response => response.json())
			.then(data => dispatch(setIngredientsList(data)));
	}, []);

	const handleSearchInputChange = event => {
		const inputText = event.target.value;
		dispatch(setSearchText(inputText));

		// запрос на получение рецептов
		// с использованием выбранных параметров: inputText, selectedCategory, selectedIngredient
		console.log("Выполняется поиск с параметрами:", {
			inputText,
			selectedCategory,
			selectedIngredient,
		});
	};

	const handleCategoryChange = event => {
		dispatch(setSelectedCategory(event.target.value));
	};

	const handleIngredientChange = event => {
		dispatch(setSelectedIngredient(event.target.value));
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Enter the text"
				value={searchText}
				onChange={handleSearchInputChange}
			/>
			<select
				value={selectedCategory}
				onChange={handleCategoryChange}
			>
				<option value="All Categories">All Categories</option>
				{drinksCategoriesList.map((category, index) => (
					<option
						key={index}
						value={category}
					>
						{category}
					</option>
				))}
			</select>
			<select
				value={selectedIngredient}
				onChange={handleIngredientChange}
			>
				<option value="Ingredients">Ingredients</option>
				{ingredientsList.map((ingredient, index) => (
					<option
						key={index}
						value={ingredient.title}
					>
						{ingredient.title}
					</option>
				))}
			</select>
		</div>
	);
}
