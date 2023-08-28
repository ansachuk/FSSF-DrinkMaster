// import { useState } from "react";
// import { useDispatch } from "react-redux";
import Select from "react-select";
import { Field } from "formik";
import PropTypes from "prop-types";
import css from "./RecipeIngredientsFields.module.scss";
import icons from "../../../../images/icons.svg";
import Counter from "./Counter/Counter";
import { optionsIngredientUnit } from "../../../../data/drinksData";

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

export default function RecipeIngredientsFields({
	ingredientList,
	handleIncIngredients,
	handleDecIngredients,
	handleChangeIngredientName,
	handleChangeUnitQuantity,
	handleChangeIngredientUnit,
	handleDeleteIngredient,
}) {
	// const [state, setState] = useState([1]);

	return (
		<div className={css.wraper}>
			<div className={css.counter}>
				<h3 className={css.ingredientsText}>Ingredients</h3>
				<Counter
					ingredientList={ingredientList}
					handleIncIngredients={handleIncIngredients}
					handleDecIngredients={handleDecIngredients}
				/>
			</div>

			<ul>
				{ingredientList.map((el, index) => (
					<li key={el._id}>
						<div className={css.selectWraper}>
							<Select
								options={options}
								onChange={evt => handleChangeIngredientName(evt, index)}
								placeholder={"Select ingredient"}
								required
							/>

							<Field
								name="amountIngredien"
								className={css.fieldStyle}
								type="number"
								min="0"
								max="999"
								onChange={evt => {
									handleChangeUnitQuantity(evt, index);
								}}
								placeholder="0"
							/>

							<Select
								options={optionsIngredientUnit}
								onChange={evt => {
									handleChangeIngredientUnit(evt, index);
								}}
								placeholder={"measure"}
								required
							/>

							{ingredientList.length > 1 && (
								<button
									className={css.deleteBtn}
									type="button"
									onClick={() => handleDeleteIngredient(index)}
								>
									<svg
										className={css.deleteIcon}
										width="18"
										height="18"
									>
										<use href={icons + "#close"}></use>
									</svg>
								</button>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

RecipeIngredientsFields.propTypes = {
	ingredientList: PropTypes.array,
	handleIncIngredients: PropTypes.func,
	handleDecIngredients: PropTypes.func,
	handleChangeIngredientName: PropTypes.func,
	handleChangeUnitQuantity: PropTypes.func,
	handleChangeIngredientUnit: PropTypes.func,
	handleDeleteIngredient: PropTypes.func,
};
