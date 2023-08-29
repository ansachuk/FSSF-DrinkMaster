import React from "react";

import css from "./PreviewDrinks.module.scss";
import DrinkCard from "../DrinkCard/DrinkCard";

import { mainPage } from "../../../redux/operations/recipiesOperations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMainCocktails } from "../../../redux/selectors/recipieSelectors";

// ==============================gpt================================================
const PreviewDrinks = () => {
	const dispatch = useDispatch();
	const drinks = useSelector(selectMainCocktails); // Renamed from 'category' to 'drinks'

	console.log(drinks);

	useEffect(() => {
		if (drinks !== undefined && drinks.length === 0) dispatch(mainPage());
	}, [dispatch, drinks]); // Added 'dispatch' and 'drinks' to the dependency array

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<section className={css.section}>
				<h2 className={css.sectionTitle}>{drinks.category}</h2>{" "}
				<ul>
					{drinks.map(({ _id, drinkThumb, drink }) => (
						<DrinkCard
							key={_id}
							image={drinkThumb} // Use the correct property name 'drinkThumb'
							title={drink}
						/>
					))}
				</ul>
			</section>
		</>
	);
};

export default PreviewDrinks;
// =============================================================================
// // const PreviewDrinks = ({ recipes, category, data = [] }) => {
// const PreviewDrinks = () => {
// 	const dispatch = useDispatch();
// 	const category = useSelector(selectMainCocktails);

// 	console.log(category);

// 	useEffect(() => {
// 		if (category !== undefined && category.length === 0) dispatch(mainPage());
// 	}, []);

// 	useEffect(() => {
// 		window.scrollTo(0, 0);
// 	}, []);

// 	return (
// 		<>
// 			<section className={css.section}>
// 				<h2 className={css.sectionTitle}>{category}</h2>
// 				<ul>
// 					{category.map(({ _id, drink, category, drinkThumb }) => (
// 						<DrinkCard
// 							key={_id}
// 							image={drinkThumb}
// 							title={drink}
// 						/>
// 					))}
// 				</ul>
// 			</section>
// 		</>
// 	);
// };

// export default PreviewDrinks;
// // export default { PreviewDrinks, ordinaryDrink, cocktail, shake, other };

// =======================================================================

// import React from "react";

// import css from "./PreviewDrinks.module.scss";
// import DrinkCard from "../DrinkCard/DrinkCard";

// const PreviewDrinks = ({ title, data = [] }) => {
// 	return (
// 		<section className="css.section">
// 			<h2 className="css.sectionTitle">{title}</h2>
// 			<div className="css.cardwrapper">
// 				<DrinkCard />
// 				<DrinkCard />
// 				<DrinkCard />
// 			</div>
// 		</section>
// 	);
// };

// export default PreviewDrinks;

// ============================================================

// import React from "react";
// import ItemList from "../CategoryItem/CategoryItem";

// const Category = () => {
// 	return (
// 		<div>
// 			{/* <h2>Items by Category</h2> */}
// 			<ItemList category="Ordinary Drink" />
// 			<ItemList category="Cocktail" />
// 			<ItemList category="Shake" />
// 			<ItemList category="Other/Unknown" />
// 			{/* Add more categories as needed */}
// 		</div>
// 	);
// };

// export default Category;

// =========================================================

// import css from "./category.module.scss";
// import CategoryItem from "../CategoryItem/CategoryItem";

// export default function Category({ categories }) {
// 	const categories = [
// 		{ id: 1, name: "Ordinary Drink" },
// 		{ id: 2, name: "Cocktail" },
// 		{ id: 3, name: "Shake" },
// 		{ id: 4, name: "Other/Unknown" },
// 	];

// 	const categoryName = categories.name;

// 	return (
// 		<ul className="categories">
// 			{categories.map(category => (
// 				<li
// 					key={category.id}
// 					className={css.category}
// 					// id={category.id}
// 				>
// 					{categoryName}
// 					<ul>
// 						<CategoryItem />
// 					</ul>
// 				</li>
// 			))}
// 		</ul>
// 	);
// }

// ======================================================

// import React, { useState, useEffect } from 'react';
// import './App.css'; // Include your CSS file with media queries

// const App = () => {
//   const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setViewportWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const getImageSet = () => {
//     if (viewportWidth <= 768) {
//       return ['small-image1.jpg', 'small-image2.jpg'];
//     } else if (viewportWidth <= 1024) {
//       return ['medium-image1.jpg', 'medium-image2.jpg'];
//     } else {
//       return ['large-image1.jpg', 'large-image2.jpg'];
//     }
//   };

//   const images = getImageSet();

//   return (
//     <div className="image-container">
//       {images.map((image, index) => (
//         <img key={index} src={image} alt={`Image ${index}`} />
//       ))}
//     </div>
//   );
// };

// export default App;
