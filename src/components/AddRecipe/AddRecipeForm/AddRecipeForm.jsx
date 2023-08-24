import PropTypes from "prop-types";
import css from "./AddRecipeForm.module.scss";
import RecipeDescriptionFields from "../RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "../RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "../RecipePreparationFields/RecipePreparationFields";

export default function AddRecipeForm() {
	return (
		<div>
			<RecipeDescriptionFields />
			<RecipeIngredientsFields />
			<RecipePreparationFields />
		</div>
	);
}

AddRecipeForm.propTypes = {
	// title: PropTypes.string.isRequired,
	propClass: PropTypes.string,
	// disabled: PropTypes.bool,
};
