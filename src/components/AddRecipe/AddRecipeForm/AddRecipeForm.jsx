import { useState } from "react";
import { Form, Formik } from "formik";
// import PropTypes from "prop-types";
// import css from "./AddRecipeForm.module.scss";
import RecipeDescriptionFields from "../RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "../RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "../RecipePreparationFields/RecipePreparationFields";
import MainButton from "../../MainButton/MainButton";

const formikInitialValues = {
	titleRecipe: "",
	aboutRecipe: "",
	ingredients: "",
	textareaRecipe: "",
};
export default function AddRecipeForm() {
	const [selectData, setSelectData] = useState({
		category: "",
		glass: "",
	});
	console.log(selectData);

	const handleSelectData = (type, value) => {
		setSelectData(prevState => ({ ...prevState, [type]: value }));
	};

	return (
		<div>
			<Formik
				initialValues={formikInitialValues}
				onSubmit={(values, { resetForm }) => {
					console.log(values);
					resetForm();
				}}
			>
				<Form>
					<RecipeDescriptionFields
						$name="titleRecipe"
						name="aboutRecipe"
						handleSelectData={handleSelectData}
					/>
					<RecipeIngredientsFields />
					<RecipePreparationFields name="textareaRecipe" />
					<MainButton
						type="submit"
						title={"Add"}
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
