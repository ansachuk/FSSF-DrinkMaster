import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import PropTypes from "prop-types";

import css from "./DrinksSearch.module.scss";
import icons from "../../../images/icons.svg";
import { stylesDrink } from "./drinkSelectStyle";
import { search } from "../../../redux/operations/recipiesOperations";
import { selectCategories, selectIngredients } from "../../../redux/selectors/recipieSelectors";

const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1280;

const DrinksSearch = ({ page = 1 }) => {
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();

	const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);

	const { searchWord, selectedCategory, selectedIngredient } = params;

	const ingredientsList = useSelector(selectIngredients);
	const categoriesList = useSelector(selectCategories);

	const limit = isDesktop ? 9 : 8;

	useEffect(() => {
		const isShouldRender = searchWord || selectedCategory || selectedIngredient;

		const searchParams = {
			category: selectedCategory || "",
			ingredient: selectedIngredient || "",
			searchWord,
			page,
			limit,
		};

		if (isShouldRender) {
			dispatch(search(searchParams));
		}
	}, [searchWord, selectedCategory, selectedIngredient, dispatch, limit, page]);

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				const input = e.currentTarget.abc.value;
				setSearchParams({
					...params,
					searchWord: input,
				});
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
					setSearchParams({
						...params,
						selectedCategory: selectedOption.label,
					});
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
					setSearchParams({
						...params,
						selectedIngredient: selectedOption.label,
					});
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
