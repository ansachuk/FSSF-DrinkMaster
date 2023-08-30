import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import { nanoid } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import * as yup from "yup";
// import { useNavigate } from "react-router";
// import PropTypes from "prop-types";
// import css from "./AddRecipeForm.module.scss";
import RecipeDescriptionFields from "../RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "../RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "../RecipePreparationFields/RecipePreparationFields";
import MainButton from "../../../../components/MainButton/MainButton";
import { add } from "../../../../redux/operations/recipiesOperations";

const schema = yup.object().shape({
	titleRecipe: yup.string().min(3, "must be at least 3 characters").required("name is required"),
	aboutRecipe: yup.string().min(3, "must be at least 3 characters").required("name is required"),
	textareaRecipe: yup.string().min(3, "must be at least 3 characters").required("name is required"),
});

const formikInitialValues = {
	titleRecipe: "",
	aboutRecipe: "",
	textareaRecipe: "",
};

export default function AddRecipeForm() {
	const dispatch = useDispatch();
	// const navigate = useNavigate();

	const [selectData, setSelectData] = useState({
		category: "Cocktail",
		glass: "Highball glass",
	});
	const [ingredientList, setIngredientList] = useState([{ _id: nanoid() }]);
	const [imgURL, setImageURL] = useState(null);

	const handleFileChange = e => {
		const [_file] = e.target.files;
		setImageURL(URL.createObjectURL(_file));
	};

	const handleSelectData = (type, value) => {
		setSelectData(prevState => ({ ...prevState, [type]: value }));
	};

	const handleIncIngredients = () => {
		setIngredientList(prevState => {
			return [
				...prevState,
				{
					_id: nanoid(),
					// id: "",
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
			// id: e.value,
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

	const handleDeleteIngredient = index => {
		const newIngredientsList = [...ingredientList];
		newIngredientsList.splice(index, 1);
		setIngredientList(newIngredientsList);
	};

	const handleSubmit = (values, { resetForm }) => {
		if (imgURL === null) {
			return Notify.info("add recipe photo", {
				timeout: 3000,
			});
		}

		const formData = new FormData();
		formData.append("drinkThumb", imgURL);
		const formattedRecipe = {
			drink: values.titleRecipe,
			about: values.aboutRecipe,
			category: selectData.category,
			glass: selectData.glass,
			instructions: values.textareaRecipe,
			ingredients: ingredientList.map(({ title, unitQuantity, unit }) => ({
				title,
				measure: unitQuantity.concat(` ${unit}`),
				// measureQuantity: unitQuantity,
			})),
		};

		formData.append("jsonData", JSON.stringify(formattedRecipe));
		dispatch(add(formData));
		console.log(formattedRecipe);
		console.log(formData.get("jsonData"));
		console.log(formData.get("drinkThumb"));

		resetForm();
		setIngredientList([{ _id: nanoid() }]);
		setSelectData({
			category: "Cocktail",
			glass: "Highball glass",
		});
		setImageURL(null);
		// navigate("/my");
	};

	return (
		<div>
			<Formik
				initialValues={formikInitialValues}
				onSubmit={handleSubmit}
				validationSchema={schema}
			>
				<Form autoComplete="off">
					<RecipeDescriptionFields
						imgUrlFormik="imgUrlFormik"
						imgURL={imgURL}
						$name="titleRecipe"
						name="aboutRecipe"
						handleSelectData={handleSelectData}
						updateImg={handleFileChange}
					/>
					<RecipeIngredientsFields
						name="amountIngredien"
						ingredientList={ingredientList}
						handleIncIngredients={handleIncIngredients}
						handleDecIngredients={handleDecIngredients}
						handleChangeIngredientName={handleChangeIngredientName}
						handleChangeUnitQuantity={handleChangeUnitQuantity}
						handleChangeIngredientUnit={handleChangeIngredientUnit}
						handleDeleteIngredient={handleDeleteIngredient}
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
