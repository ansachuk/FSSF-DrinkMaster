import React, { useState } from 'react';
import css from './DrinksSearch.module.scss';
import icons from '../../../images/search.svg';
import Select from 'react-select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },

];

const DrinksSearch = ({ onSearch, ingredientsList }) => {

const [chosenCategory, setChosenCategory] = useState(null);
  const [chosenIngredient, setChosenIngredient] = useState(null);
  const [searchText, setSearchText] = useState('');


  const handleSearchClick = () => {
    
    onSearch(chosenCategory, chosenIngredient);
  };

  return (
    <div className={css.container}>
      <div className={css.form}>
        <input
          type="text"
          className={css.input}
          placeholder="Search for drinks..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className={css.button} onClick={handleSearchClick}>
          <div className={css.hoverWrapper}>
            <svg className={css.search_icon}>
					<use href={icons}></use>
				</svg>
          </div>
        </div>
      </div>
      <Select
        className={css.select}
        options={options}
        placeholder="Select an option"
        value={chosenCategory}
        onChange={(selectedOption) => setChosenCategory(selectedOption)}
      />
      <Select
        className={css.select}
        options={ingredientsList.map(ingredient => ({ value: ingredient, label: ingredient }))}
        placeholder="Select an ingredient"
        value={chosenIngredient}
        onChange={(selectedOption) => setChosenIngredient(selectedOption)}
      />
    </div>
  );
};

export default DrinksSearch;


// ИСХОДНЫЙ

// import axios from "axios";
// // import { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// import { drinksCategoriesList } from "../../../data/drinksData";

// // action//
// // export const setSearchText = text => ({
// // 	type: "SET_SEARCH_TEXT",
// // 	payload: text,
// // });

// // export const setSelectedCategory = category => ({
// // 	type: "SET_SELECTED_CATEGORY",
// // 	payload: category,
// // });

// // export const setSelectedIngredient = ingredient => ({
// // 	type: "SET_SELECTED_INGREDIENT",
// // 	payload: ingredient,
// // });

// // export const setIngredientsList = ingredients => ({
// // 	type: "SET_INGREDIENTS_LIST",
// // 	payload: ingredients,
// // });

// // редюсер//
// // const initialState = {
// // 	searchText: "",
// // 	selectedCategory: "All Categories",
// // 	selectedIngredient: "Ingredients",
// // 	ingredientsList: [],
// // };

// // const rootReducer = (state = initialState, action) => {
// // 	switch (action.type) {
// // 		case "SET_SEARCH_TEXT":
// // 			return { ...state, searchText: action.payload };
// // 		case "SET_SELECTED_CATEGORY":
// // 			return { ...state, selectedCategory: action.payload };
// // 		case "SET_SELECTED_INGREDIENT":
// // 			return { ...state, selectedIngredient: action.payload };
// // 		case "SET_INGREDIENTS_LIST":
// // 			return { ...state, ingredientsList: action.payload };
// // 		default:
// // 			return state;
// // 	}
// // };
// //  схема валидации//

// const validationSchema = Yup.object().shape({
// 	searchText: Yup.string().required("Search text is required"),
// });

// export default function DrinksSearch() {
// 	// const dispatch = useDispatch();
// 	// const { searchText, selectedCategory, selectedIngredient, ingredientsList } = useSelector(state => state);

// 	// useEffect(() => {
// 	// 	// Запрос к бэкенду для получения списка ингредиентов
// 	// 	axios
// 	// 		.get("/api/ingredients")
// 	// 		.then(response => {
// 	// 			const data = response.data;
// 	// 			dispatch(setIngredientsList(data));
// 	// 		})
// 	// 		.catch(error => {
// 	// 			console.error("Error fetching ingredients:", error);
// 	// 		});
// 	// }, []);

// 	return (
// 		<Formik
// 			initialValues={{
// 				searchText: "",
// 				selectedCategory: "All Categories",
// 				selectedIngredient: "Ingredients",
// 			}}
// 			validationSchema={validationSchema}
// 			onSubmit={async values => {
// 				try {
// 					// Отправка данных на бекенд для примера
// 					const response = await axios.post("/api/submit", values);

// 					if (response.status === 200) {
// 						// Обработка успешного ответа от сервера
// 						console.log("Data successfully submitted");
// 					} else {
// 						// Обработка ошибки
// 						console.error("Error submitting data");
// 					}
// 				} catch (error) {
// 					console.error("Error submitting data:", error);
// 				}
// 			}}
// 		>
// 			<Form>
// 				<div>
// 					<Field
// 						type="text"
// 						placeholder="Enter the text"
// 						name="searchText"
// 					/>
// 					<button type="submit">Х</button>
// 					<ErrorMessage
// 						name="searchText"
// 						component="div"
// 					/>
// 				</div>
// 				<div>
// 					<Field
// 						as="select"
// 						name="selectedCategory"
// 					>
// 						<option value="All Categories">All Categories</option>
// 						{drinksCategoriesList.map((category, index) => (
// 							<option
// 								key={index}
// 								value={category}
// 							>
// 								{category}
// 							</option>
// 						))}
// 					</Field>
// 				</div>
// 				<div>
// 					<Field
// 						name="selectedIngredient"
// 						render={({ field }) => (
// 							<div>
// 								<select
// 									{...field}
// 									// onChange={async event => {
// 									// const selectedId = event.target.value;
// 									// try {
// 									// const response = await axios.get(`/api/ingredients/${selectedId}`);
// 									// const ingredient = response.data;
// 									// Обновление состояния с полученным ингредиентом
// 									// dispatch(setSelectedIngredient(ingredient));
// 									// } catch (error) {
// 									// 	console.error("Error fetching ingredient:", error);
// 									// }
// 									// }}
// 								>
// 									<option value="Ingredients">Ingredients</option>
// 									{/* {ingredientsList.map((ingredient, index) => (
// 										<option
// 											key={index}
// 											value={ingredient.id}
// 										>
// 											{ingredient.title}
// 										</option>
// 									))} */}
// 								</select>
// 							</div>
// 						)}
// 					/>
// 				</div>
// 			</Form>
// 		</Formik>
// 	);
// }
