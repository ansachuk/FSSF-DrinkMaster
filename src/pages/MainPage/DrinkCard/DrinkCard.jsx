import React from "react";

import DrinkPlaceholder from "../../../images/static/main/DrinkPlaceholder.jpg";

import css from "./DrinkCard.module.scss";
import { Link } from "react-router-dom";

// const DrinkCard = ({ cocktail, src, title }) => {
// const DrinkCard = ({ card }) => {
const DrinkCard = ({ drink, drinkThumb }) => {
	return (
		<li className={css.card}>
			<img
				className={css.image}
				src={drinkThumb}
				alt={drink}
				onError={e => {
					e.currentTarget.src = DrinkPlaceholder;
				}}
			/>
			<div className={css.ingredientsWrapper}>
				<p className={css.drinkIngreds}>{drink}</p>

				<Link to="recipe/:recipeId">
					<span className={css.ingredients}>Ingredients</span>
				</Link>
			</div>
		</li>
	);
};

export default DrinkCard;
