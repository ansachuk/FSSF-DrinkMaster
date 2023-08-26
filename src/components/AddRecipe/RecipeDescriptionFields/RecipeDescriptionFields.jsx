import { Field } from "formik";
import Select from "react-select";
import PropTypes from "prop-types";
import css from "./RecipeDescriptionFields.module.scss";
import icons from "../../../images/icons.svg";

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];
export default function RecipeDescriptionFields({ $name, name }) {
	return (
		<>
			<div className={css.imageContainer}>
				<div>
					<button
						className={css.btnContainer}
						type="button"
					>
						<svg
							className={css.btnIcon}
							width="28"
							height="28"
						>
							<use href={icons + "#plus"}></use>
						</svg>
					</button>
				</div>
				<div>
					<p className={css.btnText}>Add image</p>
				</div>
			</div>
			<div>
				<Field
					name={$name}
					type="text"
					placeholder="Enter item title"
				/>
				<Field
					name={name}
					type="text"
					placeholder="Enter about recipe"
				/>
				<Select options={options} />
			</div>
		</>
	);
}

RecipeDescriptionFields.propTypes = {
	$name: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};
