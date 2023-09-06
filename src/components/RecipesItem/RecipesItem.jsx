import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import SeeButton from "../../components/SeeButton/SeeButton";
import icons from "/src/images/icons.svg";
import css from "./RecipesItem.module.scss";

export default function RecipesItem({ _id, drink, drinkThumb, about, instructions, page }) {
	const ingredientsWrapperClasses = `${css.ingredientsWrapper} ${
		page === "my" ? "my" : page === "favorite" ? "favorite" : ""
	}`;
	return (
		<div className={css.card}>
			<Link to={`/recipe/${_id}`}>
				<div className={css.imageBox}>
					<div className={css.imageWrapper}>
						{drinkThumb ? (
							<img
								src={drinkThumb}
								alt={drink}
								className={css.image}
							/>
						) : (
							<div className={css.defaultImgBox}>
								<svg className={css.defaultImage}>
									<use href={icons + "#cocktail"}></use>
								</svg>
							</div>
						)}
					</div>
				</div>
			</Link>
			<div>
				<div
					style={{ position: page }}
					className={ingredientsWrapperClasses}
				>
					<Link to={`/recipe/${_id}`}>
						<p className={css.ingredientsTitle}>{drink}</p>
					</Link>
					<p className={css.ingredientsText}>Ingredients</p>
				</div>
			</div>
			{page === "favorite" && <p className={css.about}>{instructions}</p>}
			{page === "my" && <p className={css.about}>{about}</p>}
			<div className={css.buttonsWrapper}>
				{(page === "my" || page === "favorite") && <SeeButton id={_id} />}
				{(page === "my" || page === "favorite") && (
					<DeleteButton
						key={_id}
						id={_id}
						page={page}
					/>
				)}
			</div>
		</div>
	);
}

RecipesItem.propTypes = {
	_id: PropTypes.string.isRequired,
	drink: PropTypes.string.isRequired,
	drinkThumb: PropTypes.string.isRequired,
	about: PropTypes.string,
	page: PropTypes.string.isRequired,
	instructions: PropTypes.string,
};
