// import React from "react";
// import { Link } from "react-router-dom";
// import DeleteButton from "../../components/DeleteButton/DeleteButton";
// import SeeButton from "../../components/SeeButton/SeeButton";
// import imgDefault from "../../images/static/my-recepies/imgdefault.jpg";
// import css from "./RecipesItem.module.scss";

// export default function RecipesItem({ recipes, page }) {
// 	return (
// 		<div className={css.card}>
// 			<Link to={`/recipes/${recipes._id}`}>
// 				<div className={css.imageBox}>
// 					<div className={css.imageWrapper}>
// 						<img
// 							className={css.image}
// 							src={recipes.drinkThumb}
// 							alt={recipes.drink}
// 							onError={e => {
// 								e.currentTarget.src = imgDefault;
// 							}}
// 						/>
// 					</div>
// 				</div>
// 			</Link>
// 			<div position={page}>
// 				<Link to={`/recipe/${recipes._id}`}>
// 					<p className={css.ingredientsTitle}>{recipes.drink}</p>
// 				</Link>
// 				<p className={css.ingredientsText}>Ingredients</p>
// 			</div>
// 			{(page === "my" || page === "favorite") && <p className={css.about}>{recipes.about}</p>}
// 			<div className={css.buttonsWrapper}>
// 				{(page === "my" || page === "favorite") && <SeeButton id={recipes._id} />}
// 				{(page === "my" || page === "favorite") && (
// 					<DeleteButton
// 						id={recipes._id}
// 						page={page}
// 					/>
// 				)}
// 			</div>
// 		</div>
// 	);
// }

import PropTypes from "prop-types";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import SeeButton from "../../components/SeeButton/SeeButton";
import css from "./RecipesItem.module.scss";
import imgDefault from "../../images/static/my-recepies/imgdefault.jpg";

export default function RecipesItem({ _id, drink, drinkThumb, about, onDeleteClick }) {
	return (
		<div className={css.card}>
			<div className={css.imageBox}>
				<div className={css.imageWrapper}>
					<img
						className={css.image}
						src={drinkThumb}
						alt={drink}
						onError={e => {
							e.currentTarget.src = imgDefault;
						}}
					/>
				</div>
			</div>
			<div>
				<div className={css.ingredientsWrapper}>
					<p className={css.ingredientsTitle}>{drink}</p>
					<p className={css.ingredientsText}>Ingredients</p>
				</div>
			</div>
			<p className={css.about}>{about}</p>
			<div className={css.buttonsWrapper}>
				<SeeButton />
				<DeleteButton
					key={_id}
					drink={drink}
					drinkThumb={drinkThumb}
					about={about}
					onDeleteClick={() => onDeleteClick(_id, "favorite")}
				/>
			</div>
		</div>
	);
}

RecipesItem.propTypes = {
	_id: PropTypes.string.isRequired,
	drink: PropTypes.string.isRequired,
	drinkThumb: PropTypes.string.isRequired,
	about: PropTypes.string.isRequired,
	onDeleteClick: PropTypes.func.isRequired,
};
