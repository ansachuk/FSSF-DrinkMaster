import Select from "react-select";
import { Field } from "formik";
import PropTypes from "prop-types";
import css from "./RecipeIngredientsFields.module.scss";
import icons from "../../../../images/icons.svg";

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

export default function RecipeIngredientsFields({ name, handleIngredientData }) {
	return (
		<div className={css.wraper}>
			<h3 className={css.ingredientsText}>Ingredients</h3>
			<div className={css.selectWraper}>
				<Select
					onChange={({ value }) => handleIngredientData(value)}
					options={options}
				/>
				<Field
					name={name}
					type="text"
					placeholder="amount of ingredient"
				/>
				<button
					// className={css.btnContainer}
					type="button"
				>
					<svg
						// className={css.btnIcon}
						width="28"
						height="28"
					>
						<use href={icons + "#plus"}></use>
					</svg>
				</button>
			</div>
		</div>
	);
}

RecipeIngredientsFields.propTypes = {
	name: PropTypes.string.isRequired,
	handleIngredientData: PropTypes.func,
};
