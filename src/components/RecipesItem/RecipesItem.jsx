import { Link } from "react-router-dom";
import { SeeButton, DeleteButton } from "components";
import drink from "../../assets/img/DrinkDefault.jpg";
import "./RecipesItem.module.css";

// це тимчасовий код поки не буде запросів до бази даних
import drinkData from "./drinkData.JSON";

// export const RecipesItem = ({ cocktail, page }) => {
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

export const RecipesItem = ({ cocktail, page }) => {
	const cocktailData = drinkData.find(item => item._id === cocktail._id);
	return (
		<div className={styles.card}>
			<Link to={`/main/recipe/${cocktail._id}`}>
				<div className={styles.imageBox}>
					<div className={styles.imageWrapper}>
						<img
							className={styles.image}
							src={cocktailData ? cocktailData.drinkThumb : drink} //  Використовую cocktailData для отримання правильних даних
							alt={cocktailData ? cocktailData.drink : cocktail.drink} //  Використовую cocktailData для отримання правильних даних
							onError={e => {
								e.currentTarget.src = drink;
							}}
						/>
					</div>
				</div>
			</Link>
			<div className={styles.wrapper}>
				<div className={`${styles.ingredientsWrapper} ${page === "my" || page === "favorite" ? styles.my : ""}`}>
					<Link to={`/main/recipe/${cocktail._id}`}>
						<p className={styles.ingredientsTitle}>{cocktailData ? cocktailData.drink : cocktail.drink}</p>{" "}
						{/* Використовую cocktailData для отримання тимчасових даних */}
					</Link>
					<p className={styles.ingredientsText}>Ingredients</p>
				</div>
			</div>
			{(page === "my" || page === "favorite") && <p className={styles.about}>{cocktailData ? cocktailData.about : cocktail.about}</p>}{" "}
			{/*  Використовую cocktailData для отримання тимчасових даних */}
			<div className={styles.buttonsWrapper}>
				{(page === "my" || page === "favorite") && <SeeButton id={cocktail._id} />}
				{(page === "my" || page === "favorite") && (
					<DeleteButton
						id={cocktail._id}
						page={page}
					/>
				)}
			</div>
		</div>
	);
};
