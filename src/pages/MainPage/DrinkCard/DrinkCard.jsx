import React from "react";

import DrinkPlaceholder from "../../../images/static/main/DrinkPlaceholder.jpg";

import css from "./DrinkCard.module.scss";
import { Link } from "react-router-dom";

const DrinkCard = ({ image, title, _id }) => {
	return (
		<>
			<div className={css.card}>
				<Link to={`recipe/${_id}`}>
					<div className={css.imgWrap}>
						<img
							className={css.image}
							src={image}
							alt={title}
							onError={e => {
								e.target.src = DrinkPlaceholder;
							}}
						/>
					</div>
					<div className={css.ingredientsWrapper}>
						<h3 className={css.drinkName}>{title}</h3>

						<span className={css.ingredients}>Ingredients</span>
					</div>
				</Link>
			</div>
		</>
	);
};

export default DrinkCard;
