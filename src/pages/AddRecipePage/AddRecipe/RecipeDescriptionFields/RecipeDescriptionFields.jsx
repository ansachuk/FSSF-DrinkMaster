import { Field } from "formik";
import Select from "react-select";
import PropTypes from "prop-types";
import css from "./RecipeDescriptionFields.module.scss";
import icons from "../../../../images/icons.svg";
import { optionsCategories } from "../../../../data/drinksData";
import { optionsGlasses } from "../../../../data/drinksData";

export default function RecipeDescriptionFields({ $name, name, handleSelectData }) {
	return (
		<div className={css.wraper}>
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
				<Select
					onChange={({ value }) => handleSelectData("category", value)}
					options={optionsCategories}
				/>
				<Select
					onChange={({ value }) => handleSelectData("glass", value)}
					options={optionsGlasses}
				/>
			</div>
		</div>
	);
}

RecipeDescriptionFields.propTypes = {
	$name: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	handleSelectData: PropTypes.func,
};
