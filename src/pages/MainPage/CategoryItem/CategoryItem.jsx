// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ItemList = ({ category }) => {
// 	const [items, setItems] = useState([]);

// 	useEffect(() => {
// 		// Make API request to fetch items based on category
// 		axios
// 			.get(`/api/recipes?category=${category}`)
// 			.then(response => {
// 				setItems(response.data);
// 			})
// 			.catch(error => {
// 				console.error("Error fetching data:", error);
// 			});
// 	}, [category]);

// 	console.log(category);

// 	return (
// 		<ul>
// 			{items.map(item => (
// 				<li
// 					key={item.id}
// 					className="item-card"
// 				>
// 					<h2>{category}</h2>
// 					<img
// 						src={item.image}
// 						alt={item.title}
// 					/>
// 					<h3>{item.title}</h3>
// 					<Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
// 					{/* <p>ID: {item.id}</p> */}
// 				</li>
// 			))}
// 		</ul>
// 	);
// };

// export default ItemList;

// =========================================================?

// import { NavLink } from "react-router-dom";

// import css from "./categoryItem.module.scss";

// export default function CategoryItem({ item }) {
// 	// const  drinksCategoriesList = categoryName;
// 	// const categoryName = [
// 	// 	{ id: 1, name: "Ordinary Drink" },
// 	// 	{ id: 2, name: "Cocktail" },
// 	// 	{ id: 3, name: "Shake" },
// 	// 	{ id: 1, name: "Other/Unknown" },
// 	// ];

// 	return (
// 		categoryName.map(element => {
// 			<li
// 				className={css.categoryItem}
// 				// id={item.id}
// 				// onClick={onclick}
// 			>
// 				<div className="categoryContainer">
// 					<NavLink
// 						className={css.link}
// 						to="/drinks/:categoryName"
// 					>
// 						{element}
// 					</NavLink>
// 					<div className="categoryImages">
// 						<img
// 							src=""
// 							alt=""
// 						/>
// 						<h2 className="drinkName">{drinkName}</h2>
// 						<NavLink
// 							className={css.link}
// 							to="/drinks/:categoryName"
// 						>
// 							{recipeLink}
// 						</NavLink>
// 					</div>
// 				</div>
// 			</li>;
// 		})
// 	);
// }
