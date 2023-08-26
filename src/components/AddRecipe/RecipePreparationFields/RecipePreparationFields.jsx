import { Field } from "formik";
import PropTypes from "prop-types";
import css from "./RecipePreparationFields.module.scss";
export default function RecipePreparationFields({ name }) {
	return (
		<div className={css.wraper}>
			<h3 className={css.recipeText}>Recipe Preparation</h3>
			<Field
				as="textarea"
				name={name}
				type="text"
				placeholder="Enter the recipe"
			/>
		</div>
	);
}

RecipePreparationFields.propTypes = {
	name: PropTypes.string.isRequired,
};
