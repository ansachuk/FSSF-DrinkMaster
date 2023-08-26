import { useState } from "react";
import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import css from "./AddRecipeForm.module.scss";
import RecipeDescriptionFields from "../RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "../RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "../RecipePreparationFields/RecipePreparationFields";

export default function AddRecipeForm() {
	return (
		<div>
			<Formik
				onSubmit={values => console.log(values)}
				initialValues={{ firstName: "", lastName: "" }}
			>
				<Form>
					<RecipeDescriptionFields
						$name="firstName"
						name="lastName"
					/>
					<RecipeIngredientsFields />
					<RecipePreparationFields />
					<button type="submit">submit</button>
				</Form>
			</Formik>
		</div>
	);
}

AddRecipeForm.propTypes = {
	// title: PropTypes.string.isRequired,
	propClass: PropTypes.string,
	// disabled: PropTypes.bool,
};
