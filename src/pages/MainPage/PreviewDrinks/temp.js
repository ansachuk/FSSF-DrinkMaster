import PropTypes from "prop-types";
import css from "./RecipeIngredientsList.module.scss";
import icons from "/src/images/icons.svg";

const RecipeIngredientsList = ({ ingredients }) => {
	return (
		<>
			<p className={css.ingredientsTitle}>Ingredients</p>
			<ul className={css.ingredientsList}>
				{ingredients.map(({ title, measure, ingredientThumb }) => (
					<div key={title}>
						<li>
							{ingredientThumb ? (
								<img
									src={ingredientThumb}
									alt={title}
									className={css.ingredientImage}
								/>
							) : (
								<div className={css.defaultImageBg}>
									<svg className={css.defaultImageIcon}>
										<use href={icons + "#cocktail"}></use>
									</svg>
								</div>
							)}
							<div className={css.ingredientProps}>
								<p className={css.ingredientTitle}>{title}</p>
								<p className={css.ingredientMeasure}>{measure}</p>
							</div>
						</li>
					</div>
				))}
			</ul>
		</>
	);
};

export default RecipeIngredientsList;

RecipeIngredientsList.propTypes = {
	ingredients: PropTypes.array,
};
