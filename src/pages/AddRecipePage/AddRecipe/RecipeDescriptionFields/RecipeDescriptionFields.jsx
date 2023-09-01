import { useEffect } from "react";
import { Field } from "formik";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import css from "./RecipeDescriptionFields.module.scss";
import icons from "../../../../images/icons.svg";
import { allCategory, glasses } from "../../../../redux/operations/recipiesOperations";
import { selectCategories, selectGlasses } from "../../../../redux/selectors/recipieSelectors";

export default function RecipeDescriptionFields({
	imgURL,
	$name,
	name,
	updateImg,
	handleSelectData,
	errors,
	touched,
}) {
	const dispatch = useDispatch();
	const optionsCategories = useSelector(selectCategories);
	const optionsGlasses = useSelector(selectGlasses);

	useEffect(() => {
		dispatch(glasses());
	}, [dispatch]);

	useEffect(() => {
		dispatch(allCategory());
	}, [dispatch]);

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
					{errors.titleRecipe && touched.titleRecipe ? (
						<div className={css.validate}>{errors.titleRecipe}</div>
					) : (
						<div className={css.validate}></div>
					)}
					<Field
						className={css.fieldStyle}
						name={name}
						type="text"
						placeholder="Enter about recipe"
					/>
					{errors.aboutRecipe && touched.aboutRecipe ? (
						<div className={css.validate}>{errors.aboutRecipe}</div>
					) : (
						<div className={css.validate}></div>
					)}
				</div>
				<Select
					onChange={({ value }) => handleSelectData("category", value)}
					options={optionsCategories.map(item => {
						return { value: item, label: item };
					})}
					defaultValue={{ value: "Cocktail", label: "Cocktail" }}
					required
				/>
				<Select
					onChange={({ value }) => handleSelectData("glass", value)}
					options={optionsGlasses.map(item => {
						return { value: item, label: item };
					})}
					defaultValue={{ value: "Highball glass", label: "Highball glass" }}
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
	errors: PropTypes.object,
	touched: PropTypes.object,
};
