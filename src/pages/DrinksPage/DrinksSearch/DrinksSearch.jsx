import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import css from "./DrinksSearch.module.scss";
import icons from "../../../images/icons.svg";
import Select from "react-select";
import { stylesDrink } from "./drinkSelectStyle";
import { search } from "../../../redux/operations/recipiesOperations";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories, selectIngredients } from "../../../redux/selectors/recipieSelectors";

const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1280;

const DrinksSearch = ({ page = 1 }) => {
	const [searchWord, setSearchWord] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedIngredient, setSelectedIngredient] = useState("");

	const ingredientsList = useSelector(selectIngredients);
	const categoriesList = useSelector(selectCategories);

	// const dispatch = useDispatch();

	const limit = isDesktop ? 9 : 8;

	const handleSearchButtonClick = e => {};
	const onSubmit = e => {
		const searchParams = {
			category: selectedCategory.label,
			ingredient: selectedIngredient.label,
			searchWord,
			page,
			limit,
		};
		console.log(searchParams);
	};

	return (
		// <div className={css.wrapper}>
		<form className={css.form}>
			<div className={css.formContainer}>
				<input
					type="text"
					className={css.input}
					placeholder="Enter the text"
					value={searchWord}
					onChange={e => setSearchWord(e.target.value)}
				/>
				<button
					type="button"
					className={css.submit}
					onClick={onSubmit}
				>
					<div className={css.hoverWrapper}></div>
					<svg
						className={css.iconDgink}
						width="18"
						height="18"
					>
						<use href={icons + "#search"}></use>
					</svg>
				</button>
			</div>

			<Select
				options={categoriesList.map(category => {
					// console.log(category);
					return { label: category };
				})}
				placeholder="All categories"
				value={selectedCategory}
				onChange={selectedOption => {
					setSelectedCategory(selectedOption);
					onSubmit();
				}}
				styles={stylesDrink}
				unstyled
				required
			/>
			<Select
				options={ingredientsList.map(ingredient => {
					return { value: ingredient._id, label: ingredient.title };
				})}
				placeholder="Ingredients"
				value={selectedIngredient}
				onChange={selectedOption => {
					setSelectedIngredient(selectedOption);
					onSubmit();
				}}
				styles={stylesDrink}
				unstyled
				required
			/>
		</form>
		// </div>
	);
};
DrinksSearch.propTypes = {
	// page: PropTypes.number.isRequired,
	categoriesList: PropTypes.array.isRequired,
	ingredientsList: PropTypes.array.isRequired,
};

export default DrinksSearch;

// return (
// 	<Form onSubmit={onSubmit}>
// 		<SearchFieldWrap>
// 			<Controller
// 				name="search"
// 				control={control}
// 				render={({ field }) => (
// 					<Input
// 						{...field}
// 						placeholder="Enter the text"
// 					/>
// 				)}
// 			/>
// 			<SearchBtn type="submit">
// 				<LuSearch style={{ width: 20, height: 20 }} />
// 			</SearchBtn>
// 		</SearchFieldWrap>
// 		<Controller
// 			name="category"
// 			control={control}
// 			render={({ field }) => (
// 				<Selector
// 					placeholder="All Categories"
// 					unstyled
// 					{...field}
// 					styles={selectStyles}
// 					options={categoriesList.map(option => ({
// 						value: option.title,
// 						label: option.title,
// 					}))}
// 					defaultValue={defCategory}
// 					onChange={selectedOption => {
// 						field.onChange(selectedOption);
// 						onChangeCategory();
// 					}}
// 				/>
// 			)}
// 		/>
// 		<Controller
// 			name="ingredients"
// 			control={control}
// 			render={({ field }) => (
// 				<Selector
// 					placeholder="Ingredients"
// 					unstyled
// 					styles={selectStyles}
// 					{...field}
// 					options={ingredientsList.map(option => ({
// 						value: option.title,
// 						label: option.title,
// 					}))}
// 					onChange={selectedOption => {
// 						field.onChange(selectedOption);
// 						onChangeIngredient();
// 					}}
// 				/>
// 			)}
// 		/>
// 	</Form>
// );
