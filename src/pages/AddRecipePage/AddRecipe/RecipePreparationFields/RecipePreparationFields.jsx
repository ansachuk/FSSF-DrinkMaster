import { Field } from "formik";
import PropTypes from "prop-types";
import css from "./RecipePreparationFields.module.scss";

export default function RecipePreparationFields({ name, errors, touched }) {
	return (
		<div>
			<h3 className={css.recipeText}>Recipe Preparation</h3>
			<Field
				as="textarea"
				className={css.textareaStyle}
				name={name}
				type="text"
				placeholder="Enter the recipe"
				rows="8"
			/>
			{errors.textareaRecipe && touched.textareaRecipe ? (
				<div className={css.validate}>{errors.textareaRecipe}</div>
			) : (
				<div className={css.validate}></div>
			)}
		</div>
	);
}

RecipePreparationFields.propTypes = {
	name: PropTypes.string.isRequired,
	errors: PropTypes.object,
	touched: PropTypes.object,
};
