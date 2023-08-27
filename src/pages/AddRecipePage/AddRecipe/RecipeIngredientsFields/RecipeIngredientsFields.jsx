import { useCallback, useState } from "react";
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

const IngredientItem = ({ handleData }) => {
	const [data, setData] = useState({
		ingredient: "",
		amountIngredien: "",
		id: Math.floor(Math.random() * 9 ** 6),
	});
	console.log(data);

	useCallback(() => {
		handleData(data);
	}, [data, handleData]);

	const handleClick = () => {};

	return (
		<>
			<div className={css.selectWraper}>
				<Select
					onChange={({ value }) =>
						setData(prevState => ({
							...prevState,
							ingredient: value,
						}))
					}
					options={options}
				/>

				<Field
					name="amountIngredien"
					className={css.fieldStyle}
					onChange={event =>
						setData(prevState => ({
							...prevState,
							amountIngredien: event.target.value,
						}))
					}
					value={data.amountIngredien}
					type="text"
					placeholder="amount of ingredient"
				/>

				<button
					className={css.deleteBtn}
					type="button"
					onClick={handleClick}
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
		</>
	);
};
export default function RecipeIngredientsFields({ name, handleIngredientData }) {
	const [state, setState] = useState([1]);
	const [data, setData] = useState([]);
	const count = state.length;
	// console.log(data);

	const handleDecrement = () => {
		if (state.length > 1) {
			setState(state.splice(1));
		}
	};

	const handleData = ingredient => {
		console.log(ingredient);
		setData(prevState => [...prevState, ingredient]);
	};

	return (
		<div className={css.wraper}>
			<div className={css.counter}>
				<h3 className={css.ingredientsText}>Ingredients</h3>
				<button onClick={handleDecrement}>-1</button>
				{count}
				<button onClick={() => setState([...state, 1])}>+1</button>
			</div>

			<ul>
				{state.map(() => (
					<li key={Math.random()}>
						<IngredientItem handleData={handleData} />
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
