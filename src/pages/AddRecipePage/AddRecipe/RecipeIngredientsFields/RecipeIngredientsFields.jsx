import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Field } from "formik";
import PropTypes from "prop-types";
import css from "./RecipeIngredientsFields.module.scss";
import icons from "../../../../images/icons.svg";
import Counter from "./Counter/Counter";
import { optionsIngredientUnit } from "./optionsIngredientUnit";
import { allIngredients } from "../../../../redux/operations/recipiesOperations";
import { selectIngredients } from "../../../../redux/selectors/recipieSelectors";
import { styles } from "./selectStyle";
import { stylesMeasure } from "./selectStyleMeasure";

export default function RecipeIngredientsFields({
	ingredientList,
	handleIncIngredients,
	handleDecIngredients,
	handleChangeIngredientName,
	handleChangeUnitQuantity,
	handleChangeIngredientUnit,
	handleDeleteIngredient,
}) {
	const dispatch = useDispatch();
	const ingredientsListOptions = useSelector(selectIngredients);

	useEffect(() => {
		dispatch(allIngredients());
	}, [dispatch]);

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

			<ul className={css.ingredientsList}>
				{ingredientList.map((el, index) => (
					<li key={el._id}>
						<div className={css.selectWraper}>
							<div className={css.flexWraper}>
								<Select
									options={ingredientsListOptions.map(ing => {
										return { value: ing.title, label: ing.title, id: ing._id };
									})}
									onChange={evt => handleChangeIngredientName(evt, index)}
									placeholder={"Select ingredient..."}
									unstyled
									styles={styles}
									required
								/>

								<div className={css.measureWraper}>
									<Field
										name="amountIngredien"
										className={css.fieldStyle}
										type="number"
										step="0.1"
										onChange={evt => {
											handleChangeUnitQuantity(evt, index);
										}}
										placeholder="0"
										required
									/>

									<Select
										options={optionsIngredientUnit}
										onChange={evt => {
											handleChangeIngredientUnit(evt, index);
										}}
										placeholder={""}
										unstyled
										styles={stylesMeasure}
										required
									/>
								</div>
							</div>

							{ingredientList.length > 1 && (
								<button
									className={css.deleteBtn}
									type="button"
									onClick={() => handleDeleteIngredient(index)}
								>
									<svg className={css.deleteIcon}>
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
