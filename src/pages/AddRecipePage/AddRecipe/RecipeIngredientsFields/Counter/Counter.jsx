import PropTypes from "prop-types";
import icons from "../../../../../images/icons.svg";
import css from "./Counter.module.scss";

export default function Counter({ ingredientList, handleIncIngredients, handleDecIngredients }) {
	return (
		<div className={css.wraper}>
			<button
				type="button"
				onClick={() => handleDecIngredients()}
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
				disabled={ingredientList.length > 19}
			>
				<svg
					className={css.icon}
					width="25"
					height="25"
				>
					<use href={icons + "#plus"}></use>
				</svg>
			</button>
		</div>
	);
}

Counter.propTypes = {
	ingredientList: PropTypes.array,
	handleIncIngredients: PropTypes.func,
	handleDecIngredients: PropTypes.func,
};
