// import { Link } from "react-router-dom";
// import { SeeButton } from "../../components/RecipesItem/DeleteButton/DeleteButton";
// import { DeleteButton } from "../../components/RecipesItem/SeeButton/SeeButton";
// import drink from "../../assets/img/DrinkDefault.jpg";
// import css from "./RecipesItem.module.scss";

// export default function RecipesItem({ cocktail, page }){
// 	return (
// 		<div className={css.card}>
// 			<Link to={`/main/recipe/${cocktail._id}`}>
// 				<div className={css.imageBox}>
// 					<div className={css.imageWrapper}>
// 						<img
// 							className={css.image}
// 							src={cocktail.drinkThumb}
// 							alt={cocktail.drink}
// 							onError={e => {
// 								e.currentTarget.src = drink;
// 							}}
// 						/>
// 					</div>
// 				</div>
// 			</Link>
// 			<div className={css.wrapper}>
// 				<div className={`${css.ingredientsWrapper} ${page === "my" || page === "favorite" ? css.my : ""}`}>
// 					<Link to={`/main/recipe/${cocktail._id}`}>
// 						<p className={css.ingredientsTitle}>{cocktail.drink}</p>
// 					</Link>
// 					<p className={css.ingredientsText}>Ingredients</p>
// 				</div>
// 			</div>
// 			{(page === "my" || page === "favorite") && <p className={css.about}>{cocktail.about}</p>}
// 			<div className={css.buttonsWrapper}>
// 				{(page === "my" || page === "favorite") && <SeeButton id={cocktail._id} />}
// 				{(page === "my" || page === "favorite") && (
// 					<DeleteButton
// 						id={cocktail._id}
// 						page={page}
// 					/>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

import React from "react";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import SeeButton from "../../components/SeeButton/SeeButton";
import css from "./RecipesItem.module.scss";

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
							e.currentTarget.src = drinkImg;
						}}
					/>
				</div>
			</div>
			<div>
				<div className={css.ingredientsWrappe}>
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
