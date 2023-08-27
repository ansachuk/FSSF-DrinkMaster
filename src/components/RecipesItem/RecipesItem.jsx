// import React from "react";
// import { Link } from "react-router-dom";
// import DeleteButton from "../../components/DeleteButton/DeleteButton";
// import SeeButton from "../../components/SeeButton/SeeButton";
// import css from "./RecipesItem.module.scss";
// import imgDefault from "../../images/static/my-recepies/imgdefault.jpg";

// export default function RecipesItem({ drink, page }) {
// 	return (
// 		<div className={css.card}>
// 			<Link to={`/recipe/${drink._id}`}>
// 				<div className={css.imageBox}>
// 					<div className={css.imageWrapper}>
// 						<img
// 							className={css.image}
// 							src={drink.drinkThumb}
// 							alt={drink.drink}
// 							onError={e => {
// 								e.currentTarget.src = imgDefault;
// 							}}
// 						/>
// 					</div>
// 				</div>
// 			</Link>
// 			<div position={page}>
// 				<Link to={`/recipe/${drink._id}`}>
// 					<p className={css.ingredientsTitle}>{drink.drink}</p>
// 				</Link>
// 				<p className={css.ingredientsText}>Ingredients</p>
// 			</div>
// 			{(page === "my" || page === "favorite") && <p className={css.about}>{drink.about}</p>}
// 			<div className={css.buttonsWrapper}>
// 				{(page === "my" || page === "favorite") && <SeeButton id={drink._id} />}
// 				{(page === "my" || page === "favorite") && (
// 					<DeleteButton
// 						id={drink._id}
// 						page={page}
// 					/>
// 				)}
// 			</div>
// 		</div>
// 	);
// }

import React from "react";
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
