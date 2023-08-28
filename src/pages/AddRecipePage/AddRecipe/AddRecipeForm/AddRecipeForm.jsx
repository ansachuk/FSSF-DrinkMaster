import { useState } from "react";
import { Form, Formik } from "formik";
import { nanoid } from "@reduxjs/toolkit";
// import PropTypes from "prop-types";
// import css from "./AddRecipeForm.module.scss";
import RecipeDescriptionFields from "../RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "../RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "../RecipePreparationFields/RecipePreparationFields";
import MainButton from "../../../../components/MainButton/MainButton";

const formikInitialValues = {
	titleRecipe: "",
	aboutRecipe: "",
	// ingredientAmount: "",
	textareaRecipe: "",
};

export default function AddRecipeForm() {
	const [selectData, setSelectData] = useState({
		category: "",
		glass: "",
	});
	const [ingredientList, setIngredientList] = useState([]);
	console.log(ingredientList);

	const handleSelectData = (type, value) => {
		setSelectData(prevState => ({ ...prevState, [type]: value }));
	};

	const handleIncIngredients = () => {
		setIngredientList(prevState => {
			return [
				...prevState,
				{
					_id: nanoid(),
					id: "",
					title: "",
					unitQuantity: "",
					unit: "",
				},
			];
		});
		return;
	};

	const handleDecIngredients = () => {
		if (ingredientList.length > 1) {
			const newIngredientsList = [...ingredientList];
			newIngredientsList.pop();
			setIngredientList(newIngredientsList);
		}
	};

	const handleChangeIngredientName = (e, index) => {
		const tmpList = [...ingredientList];
		// console.log(tmpList);
		tmpList[index] = {
			...tmpList[index],
			id: e.value,
			title: e.label,
		};
		setIngredientList(tmpList);
	};

	// const handleIngredientData = value => {
	// 	setIngredientData(prevState => ({ ...prevState, ingredient: value }));
	// };

	return (
		<div>
			<Formik
				initialValues={formikInitialValues}
				onSubmit={(values, { resetForm }) => {
					console.log(values);
					console.log(selectData);
					resetForm();
				}}
			>
				<Form autoComplete="off">
					<RecipeDescriptionFields
						$name="titleRecipe"
						name="aboutRecipe"
						handleSelectData={handleSelectData}
					/>
					<RecipeIngredientsFields
						// name="ingredientAmount"
						ingredientList={ingredientList}
						handleIncIngredients={handleIncIngredients}
						handleDecIngredients={handleDecIngredients}
						handleChangeIngredientName={handleChangeIngredientName}
						// handleIngredientData={handleIngredientData}
					/>
					<RecipePreparationFields name="textareaRecipe" />
					<MainButton
						type="submit"
						title="Add"
					/>
				</Form>
			</Formik>
		</div>
	);
}

// AddRecipeForm.propTypes = {
// title: PropTypes.string.isRequired,
// propClass: PropTypes.string,
// disabled: PropTypes.bool,
// };
