import { Field } from "formik";
import Select from "react-select";
import PropTypes from "prop-types";
import css from "./RecipeDescriptionFields.module.scss";
import icons from "../../../../images/icons.svg";
import { optionsCategories } from "../../../../data/drinksData";
import { optionsGlasses } from "../../../../data/drinksData";

export default function RecipeDescriptionFields({
	imgURL,
	$name,
	name,
	updateImg,
	handleSelectData,
}) {
	return (
		<div className={css.wraper}>
			<label className={css.imageContainer}>
				{imgURL ? (
					<img
						src={imgURL}
						className={css.image}
					/>
				) : (
					<>
						<div>
							<div
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
							</div>
						</div>
						<div>
							<p className={css.btnText}>Add image</p>
						</div>
					</>
				)}
				<input
					id="thumb"
					className={css.imageInput}
					onChange={updateImg}
					accept="image/png, image/jpg, image/jpeg"
					name="thumb"
					type="file"
				/>
			</label>
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
	imgURL: PropTypes.string,
	handleSelectData: PropTypes.func,
	updateImg: PropTypes.func,
};
