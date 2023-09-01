import React from "react";

import css from "./PreviewDrinks.module.scss";
import DrinkCard from "../DrinkCard/DrinkCard";

const PreviewDrinks = ({ data, title }) => {
	return (
		<>
			<section className={css.section}>
				<h2
					className={css.sectionTitle}
					data={title}
				>
					{title}
				</h2>
				<ul className={css.sectionList}>
					{data.map(({ _id, recipes }) => (
						<div key={_id}>
							{recipes.map(({ _id, drinkThumb, drink }) => (
								<DrinkCard
									key={_id}
									image={drinkThumb}
									title={drink}
								/>
							))}
							{/* {data.map(({ _id, drinkThumb, drink }) => (
						<DrinkCard
							key={drink}
							image={drinkThumb}
							title={drink}
						/>
					))} */}
						</div>
					))}
				</ul>
			</section>
		</>
	);
};

export default PreviewDrinks;

// ============================================================
// return (
// 	<>
// 		<section className={css.section}>
// 			<h2
// 				className={css.sectionTitle}
// 				data={title}
// 			>
// 				{title}
// 			</h2>
// 			<ul className={css.sectionList}>
// 				{data.map(({ id, recipes }) => (
// 					<div key={id}>
// 						// console.log(recipes)
// 						{recipes.map(({ recipe }) => (
// 							<>
// 								{recipe.map(({ _id, drinkThumb, drink }) => (
// 									<DrinkCard
// 										key={_id}
// 										image={drinkThumb}
// 										title={drink}
// 									/>
// 								))}
// 								{/* {data.map(({ _id, drinkThumb, drink }) => (
// 						<DrinkCard
// 							key={drink}
// 							image={drinkThumb}
// 							title={drink}
// 						/>
// 					))} */}
// 							</>
// 						))}
// 					</div>
// 				))}
// 			</ul>
// 		</section>
// 	</>
// );
// =====================================================================
//
//
//
//
//

// const PreviewDrinks = ({ category }) => {
// 	console.log(category);
// 	return (
// 		<>
// 			<section className={css.section}>
// 				<h2 className={css.sectionTitle}>{data.category}</h2>
// 				<div>
// 					<DrinkCard category="Ordinary Drink" />
// 					<DrinkCard category="Cocktail" />
// 					<DrinkCard category="Shake" />
// 					<DrinkCard category="Other/Unknown" />
// 				</div>
// 			</section>
// 		</>
// 	);
// };

// export default PreviewDrinks;

// ===========================================================

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
