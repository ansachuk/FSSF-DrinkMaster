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
	textareaRecipe: "",
};

export default function AddRecipeForm() {
	const [selectData, setSelectData] = useState({
		category: "",
		glass: "",
	});
	const [ingredientList, setIngredientList] = useState([]);

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
		tmpList[index] = {
			...tmpList[index],
			id: e.value,
			title: e.label,
		};
		setIngredientList(tmpList);
	};

	const handleChangeUnitQuantity = (e, index) => {
		let tmpData = e.currentTarget.value;
		if (tmpData < 0) {
			tmpData = 0;
			e.currentTarget.value = 0;
		}
		const tmpList = [...ingredientList];
		tmpList[index].unitQuantity = tmpData;
		setIngredientList(tmpList);
	};

	const handleChangeIngredientUnit = (e, index) => {
		const tmpList = [...ingredientList];
		tmpList[index].unit = e.value;
		setIngredientList(tmpList);
	};

	return (
		<div>
			<Formik
				initialValues={formikInitialValues}
				onSubmit={(values, { resetForm }) => {
					console.log(values);
					console.log(selectData);
					console.log(ingredientList);
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
						handleChangeUnitQuantity={handleChangeUnitQuantity}
						handleChangeIngredientUnit={handleChangeIngredientUnit}
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
