import { useState } from "react";
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
	const [state, setState] = useState([1]);
	const [select, setSelect] = useState("");
	const count = state.length;
	console.log(select);

	const handleDecrement = () => {
		if (state.length > 1) {
			setState(state.splice(1));
		}
	};

	return (
		<div className={css.wraper}>
			<div className={css.counter}>
				<h3 className={css.ingredientsText}>Ingredients</h3>
				{/* <button onClick={() => setState({ ...state, [name]: count - 1 })}>-1</button> */}
				<button onClick={handleDecrement}>-1</button>
				{count}
				{/* <button onClick={() => setState({ ...state, [name]: count + 1 })}>+1</button> */}
				<button onClick={() => setState([...state, 1])}>+1</button>
			</div>

			<ul>
				{state.map(() => (
					<li key={Math.random()}>
						<div className={css.selectWraper}>
							<Select
								// onChange={({ value }) => handleIngredientData(value)}
								onChange={({ value }) => setSelect(value)}
								options={options}
							/>

							<Field
								name={name}
								className={css.fieldStyle}
								// onChange={({ value }) => setSelect(value)}
								onChange={({ target }) => setSelect(target.value)}
								value={select}
								type="text"
								placeholder="amount of ingredientggg"
							/>
							<button
								className={css.deleteBtn}
								type="button"
							>
								<svg
									className={css.deleteIcon}
									width="18"
									height="18"
								>
									<use href={icons + "#close"}></use>
								</svg>
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

RecipeIngredientsFields.propTypes = {
	name: PropTypes.string.isRequired,
	handleIngredientData: PropTypes.func,
};
