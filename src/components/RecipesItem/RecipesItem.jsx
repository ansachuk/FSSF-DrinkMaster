// import { Link } from "react-router-dom";
// import { SeeButton } from "../../components/RecipesItem/DeleteButton/DeleteButton";
// import { DeleteButton } from "../../components/RecipesItem/SeeButton/SeeButton";
// import drink from "../../assets/img/DrinkDefault.jpg";
// import "../../components/RecipesItem/";

// це тимчасовий код поки не буде запросів до бази даних
// import drinkData from "./drinkData.JSON";

// export default function RecipesItem({ cocktail, page }){
// 	return (
// 		<div className={styles.card}>
// 			<Link to={`/main/recipe/${cocktail._id}`}>
// 				<div className={styles.imageBox}>
// 					<div className={styles.imageWrapper}>
// 						<img
// 							className={styles.image}
// 							src={cocktail.drinkThumb}
// 							alt={cocktail.drink}
// 							onError={e => {
// 								e.currentTarget.src = drink;
// 							}}
// 						/>
// 					</div>
// 				</div>
// 			</Link>
// 			<div className={styles.wrapper}>
// 				<div className={`${styles.ingredientsWrapper} ${page === "my" || page === "favorite" ? styles.my : ""}`}>
// 					<Link to={`/main/recipe/${cocktail._id}`}>
// 						<p className={styles.ingredientsTitle}>{cocktail.drink}</p>
// 					</Link>
// 					<p className={styles.ingredientsText}>Ingredients</p>
// 				</div>
// 			</div>
// 			{(page === "my" || page === "favorite") && <p className={styles.about}>{cocktail.about}</p>}
// 			<div className={styles.buttonsWrapper}>
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
import drinkImg from "../../images/static/main/main.jpg";
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
					onDeleteClick={() => handleDelete(_id, "favorite")}
				/>
			</div>
		</div>
	);
}
