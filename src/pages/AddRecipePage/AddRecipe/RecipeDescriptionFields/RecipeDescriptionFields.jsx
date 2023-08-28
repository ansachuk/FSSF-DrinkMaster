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
				<div className={css.inputWraper}>
					<Field
						className={css.fieldStyle}
						name={$name}
						type="text"
						placeholder="Enter item title"
					/>
					<Field
						className={css.fieldStyle}
						name={name}
						type="text"
						placeholder="Enter about recipe"
					/>
				</div>
				<Select
					onChange={({ value }) => handleSelectData("category", value)}
					options={optionsCategories}
					defaultValue={{ value: "cocktail", label: "Cocktail" }}
					required
				/>
				<Select
					onChange={({ value }) => handleSelectData("glass", value)}
					options={optionsGlasses}
					defaultValue={{ value: "highball glass", label: "Highball glass" }}
					required
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
