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

	const dispatch = useDispatch();

	const limit = isDesktop ? 9 : 8;

	useEffect(() => {
		const isShouldRender = searchWord || selectedCategory.label || selectedIngredient.label;

		const searchParams = {
			category: selectedCategory.label || "",
			ingredient: selectedIngredient.label || "",
			searchWord,
			page,
			limit,
		};

		if (isShouldRender) {
			dispatch(search(searchParams));
		}
	}, [searchWord, selectedCategory.label, selectedIngredient.label, dispatch, limit, page]);

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				const input = e.currentTarget.abc.value;
				setSearchWord(input);
			}}
			className={css.form}
		>
			<div className={css.formContainer}>
				<input
					type="text"
					name="abc"
					className={css.input}
					placeholder="Enter the text"
				/>
				<button
					type="submit"
					className={css.submit}
				>
					<div className={css.hoverWrapper}></div>
					<svg
						className={css.iconDrink}
						width="18"
						height="18"
					>
						<use href={icons + "#search"}></use>
					</svg>
				</button>
			</div>

			<Select
				options={categoriesList.map(category => {
					return { label: category };
				})}
				placeholder="All categories"
				value={selectedCategory}
				onChange={selectedOption => {
					setSelectedCategory(selectedOption);
				}}
				styles={stylesDrink}
				unstyled
			/>
			<Select
				options={ingredientsList.map(ingredient => {
					return { value: ingredient._id, label: ingredient.title };
				})}
				placeholder="Ingredients"
				value={selectedIngredient}
				onChange={selectedOption => {
					setSelectedIngredient(selectedOption);
				}}
				styles={stylesDrink}
				unstyled
			/>
		</form>
	);
};
DrinksSearch.propTypes = {
	page: PropTypes.number.isRequired,
};

export default DrinksSearch;
