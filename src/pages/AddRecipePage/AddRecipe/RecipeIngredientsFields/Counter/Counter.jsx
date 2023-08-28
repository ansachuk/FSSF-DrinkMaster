// import PropTypes from "prop-types";
import icons from "../../../../../images/icons.svg";
import css from "./Counter.module.scss";

export default function Counter({ ingredientList, handleIncIngredients, handleDecIngredients }) {
	return (
		<div>
			<button
				type="button"
				onClick={() => handleDecIngredients()}
				// disabled={fields.length <= 1}
			>
				<svg
					className={css.icon}
					width="18"
					height="18"
				>
					<use href={icons + "#minus"}></use>
				</svg>
			</button>
			<p>{ingredientList.length}</p>
			<button
				type="button"
				onClick={() => handleIncIngredients()}
			>
				<svg
					className={css.icon}
					width="18"
					height="18"
				>
					<use href={icons + "#plus"}></use>
				</svg>
			</button>
		</div>
	);
}

// AddRecipeForm.propTypes = {
// title: PropTypes.string.isRequired,
// propClass: PropTypes.string,
// disabled: PropTypes.bool,
// };
