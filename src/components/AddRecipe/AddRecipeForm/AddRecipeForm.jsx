import { Form, Formik } from "formik";
// import PropTypes from "prop-types";
// import css from "./AddRecipeForm.module.scss";
import RecipeDescriptionFields from "../RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "../RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "../RecipePreparationFields/RecipePreparationFields";
import MainButton from "../../MainButton/MainButton";

const initialValues = {
	titleRecipe: "",
	aboutRecipe: "",
	category: "",
	glass: "",
	ingredients: "",
	textareaRecipe: "",
};
export default function AddRecipeForm() {
	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={(values, { resetForm }) => {
					console.log(values);
					resetForm();
				}}
			>
				<Form>
					<RecipeDescriptionFields
						$name="titleRecipe"
						name="aboutRecipe"
					/>
					<RecipeIngredientsFields />
					<RecipePreparationFields />
					<MainButton
						type="submit"
						title={"Add"}
						// onClick={() => console.log("click Add")}
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
