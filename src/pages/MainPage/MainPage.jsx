import PreviewDrinks from "./PreviewDrinks/PreviewDrinks";
import HeroSection from "./HeroSection/HeroSection";

import { mainPage } from "../../redux/operations/recipiesOperations";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMainCocktails } from "../../redux/selectors/recipieSelectors";
import OtherDrinksButton from "./OtherDrinksButton/OtherDrinksButton";

export default function MainPage() {
	const dispatch = useDispatch();
	const category = useSelector(selectMainCocktails);

	console.log(category);

	const ordinaryDrink = category.filter(item => {
		return item.category === "Ordinary Drink";
	});

	const cocktail = category.filter(item => {
		return item.category === "Cocktail";
	});

	const shake = category.filter(item => {
		return item.category === "Shake";
	});

	const other = category.filter(item => {
		return item.category === "Other/Unknown";
	});

	useEffect(() => {
		if (category.length === 0) dispatch(mainPage());
	}, []);

	return (
		<>
			<HeroSection />
			<PreviewDrinks
				title="Ordinary Drink"
				data={ordinaryDrink}
			/>
			<PreviewDrinks
				title="Cocktail"
				data={cocktail}
			/>
			<PreviewDrinks
				title="Shake"
				data={shake}
			/>
			<PreviewDrinks
				title="Other/Unknown"
				data={other}
			/>
			<OtherDrinksButton />
		</>
	);
}

//
//
//
//

// ============================================================
// const dispatch = useDispatch();
// const category = encodeURIComponent("Cocktail");
// useEffect(() => {
// 	dispatch(getCoctailsByFourCategoryThunk(category));
// }, [dispatch, category]);
// return <div>MainPage</div>;

// 	return (
// 		<>
// 			<HeroSection />
// 			{/* <PreviewDrinks /> */}
// 			<PreviewDrinks
// 				title="Ordinary Drink"
// 				data={ordinaryDrink}
// 			/>
// 			<PreviewDrinks
// 				title="Cocktail"
// 				data={cocktail}
// 			/>
// 			<PreviewDrinks
// 				title="Shake"
// 				data={shake}
// 			/>
// 			<PreviewDrinks
// 				title="Other/Unknown"
// 				data={other}
// 			/>
// 			<OtherDrinksButton />
// 		</>
// 	);
// }

// =========================================================

// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import DrinksList from '../../components/DrinksList/DrinksList';
// import DrinksSearch from 'components/DrinksSearch/DrinksSearch';
// import Paginator from 'components/Paginator/Paginator';
// import { getCoctailsByFourCategoryThunk } from "../../redux/operations/drinksOperations";

// const DrinksSection = () => {
//   const dispatch = useDispatch();
//   const category = encodeURIComponent('Cocktail');
//   useEffect(() => {
//     dispatch(getCoctailsByFourCategoryThunk(category));
//   }, [dispatch, category]);

//   return (
//     <>
//       <h1>Drinks</h1>
//       <DrinksSearch />
//       <DrinksList />
//       <Paginator />
//     </>
//   );
// };

// export default DrinksPage;
